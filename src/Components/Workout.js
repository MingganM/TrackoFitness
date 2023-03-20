import React, {useState, useContext} from 'react';
import { RxCross2 } from "react-icons/rx";
import { GoDiffAdded } from "react-icons/go";
import { mainContext } from '../Context';
import SingleWorkout from './SingleWorkout';

export default function Workout() {
  const [workoutState, setWorkoutState] = useState({
    isGenerateFormOpen: false,
    exercise: "",
    duration: ""
  });

  const appContext = useContext(mainContext);
  const { setWorkout, workouts, inProgress, assignProgress } = appContext;
 
  function toggleGenerateForm(e, shouldItOpen){
    e.preventDefault();

    if(workoutState.isGenerateFormOpen === shouldItOpen) return;

    setWorkoutState({
      ...workoutState,
      isGenerateFormOpen: shouldItOpen
    })
  }
  function openGenerateForm(e){
    toggleGenerateForm(e, true) //shouldItOpen = true;
  }
  function closeGenerateForm(e){
    toggleGenerateForm(e, false)
  }

  function handleChange(e){
    const {value, name} = e.target;
  
    setWorkoutState({
      ...workoutState,
      [name]: value
    })
  }

  function handleGenerateSubmit(e){
    e.preventDefault();
    const {exercise, duration} = workoutState;

    if(!exercise || !duration) return;

    setWorkout(exercise, parseInt(duration));

    setWorkoutState({
      ...workoutState,
      exercise: "",
      duration: ""
    })
  }

  return (
    <section className="workout">
      <div className="workout__list">
        <button onClick={openGenerateForm} className="workout__generate">
          Generate Exercise <GoDiffAdded />
        </button>

        {
          workouts.map((workout, index) => <SingleWorkout key={index} workout={workout} inProgress={inProgress} assignProgress={assignProgress} />)
        }
      </div>

      <div className="workout__avg">

      </div>

      <form onSubmit={handleGenerateSubmit} className={"generateExercise" + (workoutState.isGenerateFormOpen ? "" : " closed")}>
        <button onClick={closeGenerateForm} className="generateExercise__close"><RxCross2 /></button>

        <label className="generateExercise__label" htmlFor="exerciseName">Exercise: </label>
        <input value={workoutState.exercise} onChange={handleChange} type="text" name="exercise" id="exerciseName" className="generateExercise__input" />

        <label className="generateExercise__label" htmlFor="exerciseDuration">Target Duration (in minutes): </label>
        <input value={workoutState.duration} onChange={handleChange} type="number" name="duration" id="exerciseDuration" className="generateExercise__input" />

        <button className="generateExercise__submit">Generate</button>
      </form>
    </section>
  )
}
