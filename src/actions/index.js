export const ADD_WORKOUT = "ADD_WORKOUT"
export const AUTHENTICATE = "AUTHENTICATE"
export const NEXT_DAY = "NEXT_DAY"
export const NEXT_WEEK = "NEXT_WEEK"
export const PREV_DAY = "PREV_DAY"
export const PREV_WEEK = "PREV_WEEK"


export function addWorkout (value){
    return {type: ADD_WORKOUT, value}
}

export function authenticate (){
    return {type: AUTHENTICATE}
}

export function nextDay (){
    return {type: NEXT_DAY}
}
export function nextWeek (){
    return {type: NEXT_WEEK}
}
export function prevDay (){
    return {type: PREV_DAY}
}
export function prevWeek (){
    return {type: PREV_WEEK}
}