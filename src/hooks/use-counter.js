// must start with useXXX name convention
import { useState, useEffect } from "react";

const useCounter = (forward = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("useEffect"); //  useEffect only run once.
    const interval = setInterval(() => {
      if (forward) {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(interval); // this will run when the component is unmounted
  }, [forward]);

  return counter;
};

export default useCounter;
