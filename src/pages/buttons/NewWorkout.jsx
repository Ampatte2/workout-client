import React from 'react'

function NewWorkout(props) {
    return (
        <div>
            <button onClick={props.handleClick} name="newworkout">New Workout</button>
        </div>
    )
}

export default NewWorkout
