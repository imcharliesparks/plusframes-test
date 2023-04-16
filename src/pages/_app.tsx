import * as React from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ErrorBoundary from '../components/ErrorBoundary'
import { ClerkProvider } from '@clerk/nextjs'
import Layout from '@/components/Layout'
import { ApolloProvider } from '@apollo/client'
import { getClient } from '@/lib/start-apollo-client'
import { START_API_ENDPOINT } from '@/shared/constants'

function MyApp({ Component, pageProps }: AppProps) {
	// @ts-ignore
	const renderWithLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>)
	const client = getClient(START_API_ENDPOINT)

	return (
		<ErrorBoundary>
				<ClerkProvider {...pageProps}>
					<ApolloProvider client={client}>
						{ renderWithLayout((<Component {...pageProps} />)) }
					</ApolloProvider>
				</ClerkProvider>
		</ErrorBoundary>
	)
}

export default MyApp
