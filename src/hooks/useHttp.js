import React, { useState } from "react";

const useHttp = (requestConfig, dataConsumer) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async () => {
    setIsLoading(true);
    setError(null);
    try {
      //"https://react-http-69ae2-default-rtdb.firebaseio.com/tasks.json"
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method,
        headers: requestConfig.headers,
        body: JSON.stringify(response.body),
      });
      console.log(response);
      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();
      dataConsumer(data); // feed the parsed-data to the dataConsumer

      setTasks(loadedTasks);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  };

  return { isLoading, error, sendRequest };
};

export default useHttp;
