import React from 'react'

type BracketProps = {
  set: Record<string, any>
}

// TODO: update primary colors based on our palette
const BracketItem = ({ set }: BracketProps) => {
  const [playerOne, playerTwo] = set.slots
  const { name: playerOneName } = playerOne.entrant
  const { name: playerTwoName } = playerTwo.entrant
  const { displayValue: playerOneScore } = playerOne.standing.stats.score
  const { displayValue: playerTwoScore } = playerTwo.standing.stats.score

  return (
    <div className="rounded-[1rem] bg-white w-[80vw] my-3 py-6 drop-shadow-lg container max-w-[400px]">
      <h2 className="card-title justify-center mb-4">Winners Finals</h2>
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
      <div className="flex justify-center mt-6">
        {/* TODO: Add hover effect here */}
        <button className="btn btn-sm mx-1 btn-info text-white">Update</button>
        <button className="btn btn-sm btn-error btn-outline mx-1">Delete</button>
      </div>
    </div>
  )
}

export default BracketItem