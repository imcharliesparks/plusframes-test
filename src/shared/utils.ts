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
