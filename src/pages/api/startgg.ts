import { getClient } from '@/lib/start-apollo-client'
import { APIMethods, APIStatuses, GeneralAPIResponses } from '@/shared/types'
import { extractMatchScores } from '@/shared/utils'
import { withAuth } from '@clerk/nextjs/dist/api'
import { NextApiRequest, NextApiResponse } from 'next'
import Sets from '@/lib/queries/sets.graphql'

// CS NOTE: This is an example of hitting the API w/ Apollo Client in an API route
// TODO: Update the typing in here once we have solid idea of the response types
const handler = withAuth(async (req: NextApiRequest, res: NextApiResponse) => {
	const { method } = req

	if (method !== APIMethods.GET) {
		return res.status(404).json({ status: APIStatuses.ERROR, type: GeneralAPIResponses.INVALID_REQUEST_TYPE })
	}

	try {
		const graphQLClient = getClient(process.env.START_API_ENDPOINT!)
		const { data } = await graphQLClient.query({
			query: Sets
		})
		const sets =
			data?.player?.sets?.nodes.map((set: Record<string, any>) => {
				const updatedSet = {
					...set
				}
				updatedSet.displayScore = extractMatchScores(updatedSet.displayScore)
				return updatedSet
			}) ?? []
		res.status(200).json(sets)
	} catch (error) {
		// TODO: Add typing for caught errors in handlers
		// @ts-ignore
		const statusCode = error.response?.status || 500
		// @ts-ignore
		const message = error.message || 'Internal Server Error'
		res.status(statusCode).json({ error: message })
	}
})

export default handler
