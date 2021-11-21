import Card from "./Card";
import useCounter from "../hooks/use-counter";

const ForwardCounter = () => {
  // this state will tie to the component
  const counter = useCounter(true);

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
