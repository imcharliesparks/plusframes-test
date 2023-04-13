import { IPFUser } from '@/models/PFUser'

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
