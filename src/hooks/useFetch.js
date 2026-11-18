import { useEffect, useState } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let abortController = new AbortController();
    let signal = abortController.signal;
    setLoading(true);
    
    fetch(url, { signal })
      .then((res) => {
        if (!res.ok) {
          throw Error('Something went wrong while fetching trips');
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setError(null);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching trips:', error);
        setError(error.message);
        setLoading(false);
      });
      return () => {
        //cleanup function to cancel the fetch request if the component unmounts
        abortController.abort();
      }
  }, [url]);

  return { data, loading, error };
}

export default useFetch;