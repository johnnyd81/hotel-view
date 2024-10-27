import { useEffect, useState } from "react";

//this function takes a url as a parameter and returns data, isLoading and a error
const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      const response = await fetch(url);
      const json = await response.json();

      if (!response.ok) {
        setError(json.error);
        setIsLoading(false);
      }

      if (response.ok) {
        setData(json);
        setIsLoading(false);
        setError(null);
      }
    };
    fetchData();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetchData;
