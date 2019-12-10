import React from 'react'
import NewWorkout from "./NewWorkout"

function Increment(props) {
         
    const endOfWorkout = props.end;
    if(endOfWorkout){
        return (<NewWorkout onClick={props.handleClick}>NewWorkout</NewWorkout>)
    }else{
        return <button name="increment" onClick={props.handleClick}>Tomorrow's Workout</button>
    }

}

export default Increment
