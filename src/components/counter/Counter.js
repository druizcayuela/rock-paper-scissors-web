import React from 'react';
import { useSelector } from "react-redux";

const Counter = () => {
  const counter = useSelector(state => state.roundResult.counter);

  return (
    <div>
      {counter} Total rounds played.
    </div>
  );
};

export default Counter;