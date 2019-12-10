import {ADD_WORKOUT, NEXT_DAY, NEXT_WEEK, PREV_DAY, PREV_WEEK} from "../actions"

const initialState = {month: [], day:0, week:0, thisDay:[]}

const workout = (state=initialState, action) =>{
    switch(action.type){
        case ADD_WORKOUT:
            return Object.assign({}, state, {
                month: [...state.month, action.value], 
                day: 0,
                week: 0,
                thisDay: action.value[state.week][state.day]   
            })
        case NEXT_DAY:
            return Object.assign({}, state, { 
                day: state.day + 1,
                week: state.week,
                thisDay: state.month[state.week][state.day+1]
            })
        case NEXT_WEEK:
            return Object.assign({}, state, { 
                day: state.day,
                week: state.week + 1,
                thisDay: state.month[state.week][state.day+1]
            })
        case PREV_DAY:
            return Object.assign({}, state, { 
                day: state.day -1,
                week: state.week,
                thisDay: state.thisDay  
            })
        case PREV_WEEK:
            return Object.assign({}, state, { 
                day: state.day,
                week: state.week -1,
                thisDay: state.thisDay  
            })
        default:
            return state
    }
}

export default workout