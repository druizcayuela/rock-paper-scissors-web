import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getTotal } from "../../actions";
import { Link } from 'react-router-dom';


const Total = () => {
  const totalResult = useSelector(state => state.totalResult);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotal())
  }, [dispatch]);

  return (
    <div style={{marginTop: 40}} >
		<div style={{height: 390}} >
			<h3>Total Rounds Played</h3><br />
			Total rounds played:  {totalResult?.roundsPlayed}	  <br />
			Total wins for first players:  {totalResult?.winsFirstPlayer}	  <br />
			Total wins for second players:  {totalResult?.winsSecondPlayer}	  <br />
			Total draws:  {totalResult?.totalDraws}	  <br />
		</div>
		<div style={{float: 'left'}}>
			<Link 
				to="/"  
				style={{
					color: '#3FCBE5',
					fontWeight: 'bold'
					}}>
				Go Back
			</Link>
		</div>
    </div>
  );
};


export default Total;