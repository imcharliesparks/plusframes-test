import Card from '@/components/general/Card';
import Loading from '@/components/general/Loading';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Sets from '../../lib/queries/Sets.graphql'

const query = `
  query Sets {
    player(id: 1000) {
      id
      sets(perPage: 5, page: 10) {
        nodes {
          id
          displayScore
          event {
            id
            name
            tournament {
              id
              name
            }
          }
        }
      }
    }
  }
`;

export default function Home() {
  const router = useRouter();
  const [sets, setSets] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  // TODO: Axe this on component re-write
  const constructSubtitle = (displayScore: Record<string, number>): string => {
    const keys = Object.keys(displayScore)
    return `${keys[0]}: ${displayScore[keys[0]]} - ${keys[1]}: ${displayScore[keys[1]]}`
  }

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('/api/startgg', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query }),
        });

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const result = await response.json();
        setSets(result);
        setLoading(false);
      } catch (err) {
        // @ts-ignore
        setError(err.message);
        router.push('/')
      }
    }

    fetchPosts();
  }, []);

  if (loading) return <Loading />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex flex-col mx-auto mt-10">
      <h1 className="text-xl text-center mb-8">Player Results</h1>
      {sets.map((set: any) => (
        <Card 
          key={set.id}
          title={set.event.name}
          subtitle={constructSubtitle(set.displayScore)}
          className="mx-auto my-2 w-[375px]"
        />
      ))}
    </div>
  );
}