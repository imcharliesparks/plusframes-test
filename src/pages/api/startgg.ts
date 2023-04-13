import { withAuth } from '@clerk/nextjs/dist/api'
import { GraphQLClient, gql } from 'graphql-request'
import { NextApiRequest, NextApiResponse } from 'next'

const START_API_ENDPOINT = 'https://api.start.gg/gql/alpha'

const graphQLClient = new GraphQLClient(START_API_ENDPOINT, {
	headers: {
		authorization: `Bearer ${process.env.START_API_KEY}`
	}
})

const handler = withAuth(async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		// Forward the incoming request to the external GraphQL API
		const query = gql`
			${req.body.query}
		`
		const variables = req.body.variables
		const data = await graphQLClient.request(query, variables)
		res.status(200).json(data)
	} catch (error) {
		// @ts-ignore
		const statusCode = error.response?.status || 500
		// @ts-ignore
		const message = error.message || 'Internal Server Error'
		res.status(statusCode).json({ error: message })
	}
})

export default handler
