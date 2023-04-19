import { CodegenConfig } from '@graphql-codegen/cli'
import dotenv from 'dotenv'

dotenv.config()

const config: CodegenConfig = {
	overwrite: true,
	schema: {
		'https://api.start.gg/gql/alpha': {
			headers: {
				Authorization: `Bearer ${process.env.START_API_KEY}`
			}
		}
	},
	generates: {
		'src/lib/queries/startgg.ts': {
			overwrite: true,
			plugins: ['typescript', 'typescript-operations', 'typescript-apollo-client-helpers'],
			config: {
				exposeQueryKeys: true,
				strict: true,
				withHooks: true,
				withComponent: false,
				apolloReactCommonImportFrom: '@apollo/client',
				apolloReactComponentsImportFrom: '@apollo/client/react/components',
				namingConvention: 'keep',
				scalars: {
					DateTime: 'Date'
				},
				output: './src/lib/queries/startgg.ts'
			}
		},
		'./graphql.schema.json': {
			plugins: ['introspection']
		}
	}
}

export default config
