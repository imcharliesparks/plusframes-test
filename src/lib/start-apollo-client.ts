import { ApolloClient, HttpLink, InMemoryCache, ApolloLink } from '@apollo/client'

let client: ApolloClient<any> | null = null

const authLink = new ApolloLink((operation, forward) => {
	const token = process.env.START_API_KEY

	operation.setContext({
		headers: {
			authorization: token ? `Bearer ${token}` : ''
		}
	})

	return forward(operation)
})

export const getClient = (uri: string) =>
	new ApolloClient({
		ssrMode: typeof window === 'undefined',
		link: authLink.concat(
			new HttpLink({
				uri
			})
		),
		cache: new InMemoryCache()
	})
