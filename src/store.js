import {createStore, applyMiddleware} from 'redux'; //import the function to create a global store
import allReducers from "./reducers"; //import all the reducers
import thunk from 'redux-thunk'; //import thunk middleware to allow use other drivers in our application

// define the initial state to be empty
const initialState={};

const middleware=[thunk];

// create a store containing the initial state,all the reducers and the middlewares
const store = createStore(
    allReducers, 
    initialState, 
    applyMiddleware(...middleware)
);


export default store