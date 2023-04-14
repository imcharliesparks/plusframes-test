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
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

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
        setData(result);
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
      {data?.player.sets.nodes.map((set: any) => (
        <Card 
          key={set.id}
          title={set.event.name}
          subtitle={set.displayScore}
          className="mx-auto my-2 w-[375px]"
        />
      ))}
    </div>
  );
}