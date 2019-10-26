import React from 'react';
import Header from './components/layout/Header';
import Form from './components/InputForm'
import Table from "./components/Table"
import uuid from 'react-uuid'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

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

  render(){
    return (
      // use a router to selectively display content
      <Router>
        <div className="App">
        {/* header component */}
          <Header />

          {/* route for the home page which contains the form */}
          <Route exact path="/" render={props=>(
                <React.Fragment>
                  <div className="content">
                    <div className="formWrapper">
                      <Form customValidator={this.validateFields}/>
                    </div>
                  </div>
                </React.Fragment>
                )}>
          </Route>


          {/* route for the page which contains the table */}
          <Route exact path="/table" render={props=>(
                <React.Fragment>
                  <Table className="table" tableData={this.state.formData}/>
                </React.Fragment>
                )}>
          </Route>


        </div>
      </Router>
    );
  }
}

export default App;

