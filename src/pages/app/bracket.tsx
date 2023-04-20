import React from 'react'
import { useQuery } from '@apollo/client'
import EventSets from '../../lib/queries/EventSets.graphql'
import Loading from '@/components/general/Loading'
import BracketItem from '@/components/brackets/BracketItem'

const Bracket = () => {
  const { loading, error, data } = useQuery(EventSets, {
    // pollInterval: Number(process.env.POLL_INTERVAL ?? 0)
    variables: {
      eventId: 857807,
      page: 1,
      perPage: 20,
    }
  })

  // TODO: Make this better (redirect?)
  if (error) return <p>Error: {error.message}</p>

  return loading ? <Loading /> 
  : (
    <div className="bg-gray-100">
      <div className="flex flex-col items-center py-8 container ">
        <div>
          <h2 className="text-2xl mb-2">Matches</h2>
        </div>
        {
          data.event.sets.nodes.map((set: any) => (
            <BracketItem key={set.id} set={set} />
          ))
        }
      </div>
    </div>
  )
}

export default Bracket

