import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getTotal } from "../../actions";
import { Link } from 'react-router-dom';
import './Total.css';

const Total = () => {
  const totalResult = useSelector(state => state.totalResult);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotal())
  }, [dispatch]);

  return (
    <div className="margin-top-40" >
		<div className="result-data" >
			<h3>Total Rounds Played</h3><br />
			Total rounds played: {totalResult?.roundsPlayed}<br />
			Total wins for first players: {totalResult?.winsFirstPlayer}<br />
			Total wins for second players: {totalResult?.winsSecondPlayer}<br />
			Total draws: {totalResult?.totalDraws}<br />
		</div>
		<div className="float-left">
			<Link to="/" className="go-back-link">Go Back</Link>
		</div>
    </div>
  );
};


export default Total;