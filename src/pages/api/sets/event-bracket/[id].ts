import { APIMethods, APIStatuses, GeneralAPIResponses, TypedRequest, TypedResponse } from '@/shared/types'

export type EventBracketByIdRequest = {
	slug: string
	eventSlug: string
	phaseId: number
	phaseGroupId: number
}

export type EventBracketByIdResponse = {
	status: string
}

const handler = async (req: TypedRequest<EventBracketByIdRequest>, res: TypedResponse<EventBracketByIdResponse>) => {
	const { id } = req.query
	const { method, body } = req

	if (method === APIMethods.GET) {
		try {
			const { slug, eventSlug, phaseId, phaseGroupId } = body
			// const requestUrl = `https://www.start.gg/_next/data/voac9qnl_-GM_AizWuE9A/${slug}/${eventSlug}/event-bracket/${phaseId}/${phaseGroupId}`
			const requestUrl = `https://www.start.gg/_next/data/voac9qnl_-GM_AizWuE9A/en-us/tournament/game-lab-mega-monthly-presented-by-plusframesgg/event/dragon-ball-fighterz/brackets/1300956/1988888.json?slug=game-lab-mega-monthly-presented-by-plusframesgg&eventSlug=dragon-ball-fighterz&phaseId=1300956&phaseGroupId=1988888`
			const response = await fetch(requestUrl, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${process.env.START_API_KEY}`
				}
			})
			const data = await response.json()
			const { sets } = data.pageProps.fluxStoreData[2].entities
			const updatedSetsRecord = Object.keys(sets).reduce((acc, key) => {
				const set = sets[key]
				const {
					id,
					phaseId,
					phaseGroupId,
					roundId,
					winnerId,
					loserId,
					state,
					scoresCsv,
					fullRoundText,
					slots,
					entrant1Id,
					entrant2Id
				} = set
				const updatedSet = {
					id,
					phaseId,
					phaseGroupId,
					roundId,
					winnerId,
					loserId,
					state,
					scoresCsv,
					fullRoundText,
					slots,
					entrant1Id,
					entrant2Id
				}
				return {
					...acc,
					[id]: updatedSet
				}
			}, {})

			console.log('updatedSetsRecord', updatedSetsRecord)
			res.send('cheese')
		} catch (e) {
			console.log('e', e)
		}
	} else {
		res.status(404).json({ status: GeneralAPIResponses.INVALID_REQUEST_TYPE })
	}
}

export default handler
