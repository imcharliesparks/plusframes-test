import { IPFUser } from '@/lib/models/PFUser'

export const extractMatchScores = (input: string): { [player: string]: number } => {
	const pattern = /(.*\S)\s+(\d+)\s*-\s*(.*\S)\s+(\d+)$/
	const match = input.match(pattern)

	if (match) {
		const player1 = match[1]
		const score1 = parseInt(match[2], 10)
		const player2 = match[3]
		const score2 = parseInt(match[4], 10)

		return {
			[player1]: score1,
			[player2]: score2
		}
	}

	throw new Error('Invalid input format')
}

// TODO: For future re-writes, need to not count DQs against seed weighting
export function seedPlayers(players: IPFUser[]) {
	players.sort((a, b) => b.seedVal - a.seedVal)

	const pairings: [IPFUser, IPFUser][] = []

	for (let i = 0; i < players.length / 2; i++) {
		const highSeed = players[i]
		const lowSeed = players[players.length - 1 - i]
		pairings.push([highSeed, lowSeed])
	}

	return pairings
}

export function formatPlayerName(playerName: string): string[] {
	if (!playerName.includes('|')) {
		return ['', playerName]
	}
	const strippedName = playerName.split('|')
	const sponsor = strippedName[0].trim()
	const name = strippedName[1].trim()

	return [sponsor, name]
}
