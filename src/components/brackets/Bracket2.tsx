import React from 'react'

type BracketProps = {
  playerName: string
  isWinner: boolean
  sponsor?: string
}

const Bracket2 = ({ playerName, isWinner, sponsor }: BracketProps) => {
  return (
    <div>Bracket</div>
  )
}

export default Bracket2