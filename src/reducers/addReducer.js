// imoprt the action types
import { ADD_USER } from "../actions/types";

// define the default state of the posts to be an array
const defaultState=[];

const addReducer=(state=defaultState,action)=>{
    
    // check the type of the action passed to it and return a state based on it
    switch(action.type){
        // if the action type is 'ADD_USER', add the user in the payload to the current state and return them
        case ADD_USER:
            return [...state,action.payload]
    
        // default action is to return the current state back
        default:
            return state
    }
}

export default addReducer;