import { ApolloClient, HttpLink, InMemoryCache, ApolloLink } from '@apollo/client'

const authLink = new ApolloLink((operation, forward) => {
	const token = process.env.START_API_KEY

	operation.setContext({
		headers: {
			authorization: `Bearer ${token}`
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
