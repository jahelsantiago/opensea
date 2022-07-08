import React from "react";
import { useState, useEffect } from "react";

/**
 * Function to use the query string to get the value of a query parameter
 * @param {String} query - the query string
 * @returns
 *
 */
export default function useQuery(query) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(query);
      const json = await response.json();
      console.log(json);

      if(response.ok) {
        setData(json);
        setError(false);
      }else{
        setError(true);
      }

      setLoading(false);
    };
    fetchData();
  }, [query]);

  return { data, loading, error };
}
