import React from 'react'

function Decrement(props) {
         
    const endOfWorkout = props.begin;
    if(endOfWorkout){
        return (null)
    }else{
        return (<button name="decrement" onClick={props.handleClick}>Yesterday's Workout</button>)
    }

}
export default Decrement
