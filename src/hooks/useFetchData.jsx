import { useEffect, useState } from "react";

//this function takes a url as a parameter and returns data, isLoading and a error
const useFetchData = (url) => {
  //required stateful variables
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // create the fetchData function
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      const response = await fetch(url);
      const json = await response.json();

      //check if the response exists
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
    fetchData();// call the fetchData function
    //the dependency array contains the variable that causes the useEffect to run again if it changes
  }, [url]);
  
    //the function returns the retrieved data, the isLoading state and the error object
  return { data, isLoading, error };
};

export default useFetchData;
