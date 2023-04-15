import { extractMatchScores } from '@/shared/utils'
import { withAuth } from '@clerk/nextjs/dist/api'
import { GraphQLClient, gql } from 'graphql-request'
import { NextApiRequest, NextApiResponse } from 'next'

const START_API_ENDPOINT = 'https://api.start.gg/gql/alpha'

const graphQLClient = new GraphQLClient(START_API_ENDPOINT, {
	headers: {
		authorization: `Bearer ${process.env.START_API_KEY}`
	}
})

// TODO: Update the typing in here once we have solid idea of the response types
const handler = withAuth(async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		// Forward the incoming request to the external GraphQL API
		const query = gql`
			${req.body.query}
		`
		const variables = req.body.variables
		const data = (await graphQLClient.request(query, variables)) as Record<string, any>
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
