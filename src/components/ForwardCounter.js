import { useState, useEffect } from "react";

import Card from "./Card";

const ForwardCounter = () => {
  console.log("forwardCounter");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("useEffect");
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
