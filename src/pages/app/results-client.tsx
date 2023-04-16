import Card from '@/components/general/Card'
import Sets from '../../lib/queries/Sets.graphql'
import { useQuery } from '@apollo/client'
import { extractMatchScores } from '@/shared/utils'
import Loading from '@/components/general/Loading'

// CS NOTE: This is an example of hitting the start API with Apollo with polling for a normal component
// TODO: Axe this on component re-write
export default function Results2() {
  const constructSubtitle = (displayScore: string): string => {
    const updatedDisplayScore = extractMatchScores(displayScore)
    const keys = Object.keys(updatedDisplayScore)
    return `${keys[0]}: ${updatedDisplayScore[keys[0]]} - ${keys[1]}: ${updatedDisplayScore[keys[1]]}`
  }

  const { loading, error, data } = useQuery(Sets, {
    pollInterval: Number(process.env.POLL_INTERVAL ?? 0)
  })

  if (loading && !data) return <Loading />
  if (error) return <p>Error: {error.message}</p>

  return (
    <div className="flex flex-col mx-auto mt-10">
      <h1 className="text-xl text-center mb-8">Player Results</h1>
      {data.player.sets.nodes.map((set: any) => (
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