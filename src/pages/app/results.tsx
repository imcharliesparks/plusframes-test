import Card from '@/components/general/Card'
import Sets from '../../lib/queries/Sets.graphql'
import { getClient } from '@/lib/start-apollo-client'
import { extractMatchScores } from '@/shared/utils'

// TODO: Axe this on component re-write
export default function Results({ sets: initialSets }: { sets: any }) {
  const constructSubtitle = (displayScore: Record<string, number>): string => {
    const keys = Object.keys(displayScore)
    return `${keys[0]}: ${displayScore[keys[0]]} - ${keys[1]}: ${displayScore[keys[1]]}`
  }

  return (
    <div className="flex flex-col mx-auto mt-10">
      <h1 className="text-xl text-center mb-8">Player Results</h1>
      {initialSets.map((set: any) => (
        <Card 
          key={set.id}
          title={set.event.name}
          subtitle={constructSubtitle(set.displayScore)}
          className="mx-auto my-2 w-[375px]"
        />
      ))}
    </div>
  )
}

// CS NOTE: This is an example of hitting the start API with Apollo in an SSR component
export const getServerSideProps = async () => {
  const client = getClient(process.env.START_API_ENDPOINT!)
  const { data } = await client.query({ query: Sets })
  const sets =
    data?.player?.sets?.nodes.map((set: Record<string, any>) => {
      const updatedSet = {
        ...set
      }
    updatedSet.displayScore = extractMatchScores(updatedSet.displayScore)
    return updatedSet
  }) ?? []
  return {
    props: {
      sets
    }
  }
}