import React from 'react';
import { useSelector } from "react-redux";
import './Counter.css';

const Counter = () => {
  const counter = useSelector(state => state.roundResult.counter);

  return (
    <div className="margin-top-55" >
      {counter} Total rounds played.
    </div>
  );
};

export default Counter;