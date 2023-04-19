import React from 'react'

type BracketProps = {
  set: Record<string, any>
}

const BracketItem = ({ set }: BracketProps) => {
  const [playerOne, playerTwo] = set.slots
  const { name: playerOneName } = playerOne.entrant
  const { name: playerTwoName } = playerTwo.entrant
  const { displayValue: playerOneScore } = playerOne.standing.stats.score
  const { displayValue: playerTwoScore } = playerTwo.standing.stats.score

  return (
    <div className="rounded-[1rem] bg-white w-[80vw] my-3 py-6 drop-shadow-lg container">
      <div className="grid grid-cols-10 text-center">
        <div className="col-span-4">
          <span className="font-normal text-sm">
            {playerOneName}
          </span>
        </div>
        <div className="col-span-2">
          {playerOneScore} - {playerTwoScore}
        </div>
        <div className="col-span-4">
          <span className="font-normal text-sm">
            {playerTwoName}
          </span>
        </div>
      </div>
    </div>
  )
}

export default BracketItem