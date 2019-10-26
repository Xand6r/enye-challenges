// imoprt the action types
import { ADD_USER } from "../actions/types"

// define the default state of the posts to be an array
const defaultState=[]

export default addReducer=(state=defaultState,action)=>{
    // check the type of the action passed to it and return a state based on it
    switch(Selection.type){
        // if the action type is 'ADD_USER', add the user in the payload to the current state
        case ADD_USER:
            return [...state,action.payload]
        // 
        // default action is to return the current state back
        default:
            return state
    }
}