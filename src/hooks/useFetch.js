import { useEffect, useState } from "react";

function useFetch(url) {

let[data,setData]=useState(null);
let[loading,setLoading]=useState(false);
    
  useEffect(() => {
    setLoading(true);
     fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching trips:', error);
        setLoading(false);
      });
  }, [url]);
  return {data, loading};
}

export default useFetch;