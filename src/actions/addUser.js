// An action to add users to the table
import { ADD_USER } from "./types"
import uuid from 'react-uuid'


const addUser = (fields)=>{
    
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
    
    return {
        type:ADD_USER ,
        payload:detail
    }
}

export default addUser