import React, {useState} from 'react';

export default function SingleWorkout({workout, inProgress, assignProgress}) {
  const [singleWOState, setSingleWOState] = useState({});

  function handleStartWorkout(){
    
  }

  return (
    <div className={"singleWorkout" + (inProgress ? " inactive" : "")}>
        <button onClick={handleStartWorkout} className="singleWorkout__btn">start {workout.exercise}</button>
        <button className="singleWorkout__btn">stop {workout.exercise}</button>
    </div>
  )
}
