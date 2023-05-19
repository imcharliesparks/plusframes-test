import Image from 'next/image'
import React from 'react'
import styles from '../../styles/components/BracketItem.module.css'

type BracketProps = {
	set: Record<string, any>
}

// TODO: update primary colors based on our palette
const BracketItem = ({ set }: BracketProps) => {
	const [cardIsFlipped, setCardIsFlipped] = React.useState<boolean>(false)
	const [playerOne, playerTwo] = set.slots
	const { name: playerOneName } = playerOne.entrant
	const { name: playerTwoName } = playerTwo.entrant
	const { displayValue: playerOneScore } = playerOne.standing.stats.score
	const { displayValue: playerTwoScore } = playerTwo.standing.stats.score

	return (
		<div
			className={`rounded-[1rem] bg-white w-[90vw] md:w-[80vw] my-3 py-6 drop-shadow-lg max-w-[400px] h-[144px] ${
				styles.card
			} ${cardIsFlipped ? styles.cardFlipped : ''}`}
		>
			<div className={styles.cardFace}>
				<h2 className="card-title justify-center mb-4">Winners Finals</h2>
				<div className="flex justify-center space-x-8 px-1">
					<div className="flex flex-col items-center w-[120px] text-center">
						<span className="font-normal text-sm">{playerOneName}</span>
						<span className="font-bold text-2xl">{playerOneScore}</span>
					</div>
					<div onClick={() => setCardIsFlipped(!cardIsFlipped)} className="font-bold">
						<svg
							className={styles.versusImage}
							xmlns="http://www.w3.org/2000/svg"
							data-name="Layer 1"
							viewBox="0 0 122.88 122.88"
						>
							<title>{'versus'}</title>
							<path d="M61.44 5.62A55.57 55.57 0 0 1 93.86 16l.12-.12L107.15 2.7a9.21 9.21 0 0 1 13 13L107 28.9l-.12.12A55.83 55.83 0 0 1 29 106.88l-.28.3-13 13a9.21 9.21 0 0 1-13-13l13-13 .29-.28A55.83 55.83 0 0 1 61.44 5.62Zm4 36.65L55.23 79.94l-13.83.78-12.55-36.4 13.22-1.22 5.36 21.18 5.18-22.85 12.82.84ZM94 67.07a15.09 15.09 0 0 1-1.33 6.6 12.63 12.63 0 0 1-3.62 4.56 15.16 15.16 0 0 1-5.38 2.66 25.06 25.06 0 0 1-6.62.84 14 14 0 0 1-3-.36q-1.62-.36-3.3-.9c-1.11-.36-2.19-.75-3.21-1.17s-1.95-.82-2.75-1.19L66 67.19a20.05 20.05 0 0 0 5.26 2.16 22.86 22.86 0 0 0 5.67.73h1.28a6.2 6.2 0 0 0 1.44-.25 3.31 3.31 0 0 0 1.16-.62 1.56 1.56 0 0 0 .46-1.2 1.32 1.32 0 0 0-.33-.92 2.7 2.7 0 0 0-.86-.61 5.92 5.92 0 0 0-1.19-.36q-.68-.12-1.32-.18t-1.2-.06h-.89a11.91 11.91 0 0 1-4.36-.75A9.54 9.54 0 0 1 67.79 63a9.33 9.33 0 0 1-2.19-3.35 11.46 11.46 0 0 1-.78-4.35 12.74 12.74 0 0 1 1.32-5.9 13.8 13.8 0 0 1 3.54-4.44 16 16 0 0 1 5.09-2.79 18.32 18.32 0 0 1 5.94-1c.91 0 1.84 0 2.81.1a27.92 27.92 0 0 1 2.88.34 25 25 0 0 1 2.81.65 17 17 0 0 1 2.59 1l-1.06 11.27a32 32 0 0 0-4-1.07 19.7 19.7 0 0 0-4.03-.46h-.93c-.38 0-.78 0-1.2.08s-.84.12-1.27.21a5.65 5.65 0 0 0-1.14.37 2.48 2.48 0 0 0-.81.63 1.36 1.36 0 0 0-.28.93 1.19 1.19 0 0 0 .46.94 2.69 2.69 0 0 0 1.12.49 6.93 6.93 0 0 0 1.5.15h1.63l1.5-.08a9.27 9.27 0 0 1 1.15 0 11.46 11.46 0 0 1 4 .95 9.54 9.54 0 0 1 3 2.14A9.14 9.14 0 0 1 93.37 63a12.12 12.12 0 0 1 .63 4.07Zm-.34-37.88A45.63 45.63 0 1 0 107 61.44a45.49 45.49 0 0 0-13.31-32.25Z" />
						</svg>
					</div>
					<div className="flex flex-col items-center w-[120px] text-center">
						<span className="font-normal text-sm">{playerTwoName}</span>
						<span className="font-bold text-2xl">{playerTwoScore}</span>
					</div>
				</div>
			</div>
			{/* <div className={styles.cardBack}>
				<h2 className="card-title justify-center mb-4">Report Results</h2>
			</div> */}
		</div>
	)
}

export default BracketItem
