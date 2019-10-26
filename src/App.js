import React from 'react';
import Header from './components/layout/Header';
import Form from './components/InputForm'
import Table from "./components/Table"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import { Provider } from "react-redux"
import store from "./store" 


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

