import React from 'react';
import Header from './components/layout/Header';
import Form from './components/InputForm'
import Table from "./components/Table"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import { Provider } from "react-redux"
import store from "./store" 

<<<<<<< HEAD
class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      // form data is an array containing all the information entered in the form each item is an object e.g [{},{}...]
      formData:[]
    }
  }
  
  // create a custom method to add information to the state 
  validateFields=(fields)=>{

    const {formData}=this.state
    // get the formdata from the fields
    const {firstName,lastName,age,hobbies}=fields
    // convert the data from the date picker to a readable format
    const dateOfBirth=fields['date-picker'].format("DD-YY-MM")
    // create a unique id for this object
    const key=uuid()
    // create an object containing these items
    const detail = {
      key,
      firstName,
      lastName,
      age,
      dateOfBirth,
      hobbies
    }
    // append the newly gotten data to the existing one in the table state
    this.setState({formData:[...formData,detail]})
  }
=======

function App() {
>>>>>>> feature-alex-add-redux

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

