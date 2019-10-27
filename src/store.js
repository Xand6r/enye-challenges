import {createStore, applyMiddleware, compose} from 'redux'; //import the function to create a global store
import allReducers from "./reducers"; //import all the reducers
import thunk from 'redux-thunk'; //import thunk middleware to allow use other drivers in our application

// define the initial state to be empty
const initialState={};

const middleware=[thunk];

// create a store containing the initial state,all the reducers and the middlewares
const store = createStore(
    allReducers, 
    initialState, 
    // wrap up all of them in compose to combine them as an argument
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);


export default store