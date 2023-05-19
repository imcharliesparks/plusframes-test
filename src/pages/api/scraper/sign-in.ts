import { APIMethods, APIStatuses, GeneralAPIResponses } from '@/shared/types'
import { withAuth } from '@clerk/nextjs/dist/api'
import { NextApiRequest, NextApiResponse } from 'next'
import StartGGScraper from '@/lib/scraper/StartGG'

const handler = withAuth(async (req: NextApiRequest, res: NextApiResponse) => {
	const { method, body } = req
	const { email, password } = body.credentials
	const startScraper: StartGGScraper = new StartGGScraper()

	if (!email || !password) {
		console.error('Credentials not provided!')
		return res.status(401).json({
			status: APIStatuses.ERROR,
			type: GeneralAPIResponses.FAILURE,
			data: { error: 'Credentials not provided to request' }
		})
	}

	if (method === APIMethods.POST) {
		try {
			const scraperResult = await startScraper.signUserIn({ email, password })

			if (scraperResult) {
				return res.status(200).json({
					status: APIStatuses.SUCCESS
				})
			} else {
				console.error(`Unknown error signing user in: ${email}`)
				return res.status(400).json({
					status: APIStatuses.ERROR,
					type: GeneralAPIResponses.FAILURE,
					data: { error: `Unknown error signing user in: ${email}` }
				})
			}
		} catch (error) {
			await startScraper.terminate()
			console.error(error)
			return res.status(400).json({
				status: APIStatuses.ERROR,
				type: GeneralAPIResponses.FAILURE,
				data: { error: `Unable to sign in user: ${email}` }
			})
		}
	} else {
		return res.status(404).json({ status: APIStatuses.ERROR, type: GeneralAPIResponses.INVALID_REQUEST_TYPE })
	}
})

export default handler
