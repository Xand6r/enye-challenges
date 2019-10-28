// An action to add users to the table
import { ADD_USER_ASYNC } from "./types"


const addUserAsync = (fields)=>{
    
    const {firstName,lastName,age,hobbies}=fields
    // convert the data from the date picker to a readable format
    const dateOfBirth=fields['date-picker'].format("DD-YY-MM")
    // create an object containing these items
    const detail = {
        firstName,
        lastName,
        age,
        dateOfBirth,
        hobbies
    }
    // return a payload containinng these objects
    return {
        type:ADD_USER_ASYNC ,
        payload:detail
    }
}

export default addUserAsync