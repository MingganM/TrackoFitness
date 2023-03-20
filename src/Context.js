import { createContext, useState, useEffect } from "react";

export const mainContext = createContext();

export default function Context({children}){
    const [mainState, setMainState] = useState({
        workouts: [],
        inProgress: null,
        calender: {/* [date]: [{workout: "", duration: ""}] */}
    });

    useEffect(function (){
        const { workouts } = localStorage;
        if(!workouts) return;
        setMainState({
            workouts: JSON.parse(workouts)
        })
    }, [])

    useEffect(function (){
        console.log(mainState);
        localStorage.setItem("workouts", JSON.stringify(mainState.workouts));
        console.log(localStorage);
    }, [mainState])

    function setWorkout(exercise, duration){
        console.log(mainState)
        setMainState({
            ...mainState, workouts: [...mainState.workouts, {exercise, duration}]
        })
    }

    function assignProgress(progressValue){
        setMainState({
            ...mainState,
            inProgress: progressValue
        })
    }

    const passingValue = {
        ...mainState,
        setWorkout,
        assignProgress
    }

    return (
        <mainContext.Provider value={passingValue}>
            {
                children
            }
        </mainContext.Provider>
    )
}