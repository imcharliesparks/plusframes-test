import { useState, useEffect } from 'react';

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
        console.log('result', result)
        setData(result);
        setLoading(false);
      } catch (err) {
        // @ts-ignore
        setError(err.message);
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {data?.player.sets.nodes.map((set: any) => (
        <div key={set.id}>
          <h2>{set.event.name}</h2>
          <p>{set.displayScore}</p>
        </div>
      ))}
    </div>
  );
}