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

// NOTE: Very under construction: pushing before migration to Apollo
// TODO: Update the typing in here once we have solid idea of the response types
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { eventId } = req.body
	try {
		// Forward the incoming request to the external GraphQL API
		const query = gql`
    query EventSets($eventId: ID!) {
      event(id: $eventId) {
        id
        name
        sets {
          pageInfo {
            total
          }
          nodes {
            id
            slots {
              id
              entrant {
                id
                name
              }
            }
          }
        }
      }
    },
    {
      "eventId": 261856,
    }`
		const variables = req.body.variables
		const data = (await graphQLClient.request(query, variables)) as Record<string, any>
		console.log('data', data)
	} catch (error) {
		// TODO: Add typing for caught errors in handlers
		// @ts-ignore
		const statusCode = error.response?.status || 500
		// @ts-ignore
		const message = error.message || 'Internal Server Error'
		res.status(statusCode).json({ error: message })
	}
}

export default handler
