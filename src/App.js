import React from 'react';
import Header from './components/layout/Header';
import Form from './components/InputForm'
import Table from "./components/Table"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import { Provider } from "react-redux"
import {createStore, applyMiddleware, compose} from 'redux'; //import the function to create a global store
import allReducers from "./reducers"; //import all the reducers
import thunk from 'redux-thunk'; //import thunk middleware to allow use other drivers in our application
import rootSaga from "./sagas";
import createSagaMiddleware from '@redux-saga/core';

// define the initial state to be empty
const initialState={};

// initialise the saga middleware
const sagaMiddleware = createSagaMiddleware();

const middleware=[thunk,sagaMiddleware];

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

// run the root middleware for all the sagas
sagaMiddleware.run(rootSaga);


function App() {

    return (
      // wrap the app in provider to make store globally accesible
      <Provider store={store}>

        {/* use a router to selectively display content */}
        <Router>
          <div className="App">
          {/* header component */}
            <Header />
          {/* header component */}


            {/* route for the home page which contains the form */}
            <Route exact path="/" render={props=>(
                  <React.Fragment>
                    <div className="content">
                      <div className="formWrapper">
                        <Form />
                      </div>
                    </div>
                  </React.Fragment>
                  )}>
            </Route>
            {/* route for the home page which contains the form */}


            {/* route for the page which contains the table */}
            <Route exact path="/table" render={props=>(
                  <React.Fragment>
                    <Table className="table"/>
                  </React.Fragment>
                  )}>
            </Route>
            {/* route for the page which contains the table */}

          </div>
        </Router>

      </Provider>
    );

}

export default App;

