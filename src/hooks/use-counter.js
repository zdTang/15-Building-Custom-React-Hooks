// must start with useXXX name convention
import { useState, useEffect } from "react";
const useCounter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("useEffect"); //  useEffect only run once.
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval); // this will run when the component is unmounted
  }, []);
};

export default useCounter;
