import React from 'react'

type BracketProps = {
  playerNames: string[]
  isWinner: boolean
  sponsor?: string
}

const Bracket = ({ playerNames, isWinner, sponsor }: BracketProps) => {
  return (
    <div>Bracket</div>
  )
}

export default Bracket