// An action to add users to the table
import { ADD_USER } from "./types"


const addUser = (fields)=>{
    const users=[];
    // since all the keys are unique, we need to programatically get them.
    const objectKeys=Object.keys(fields);
    // iterate through each element found in each key and add them to the table
    for (let key of objectKeys){
        // get all the users and add them to a user array
        let field=fields[key];
        // since the key is too long, get only the first part to display, wrap it in a try catch, in case the oncreate event on the functions part has not yet fired
        try{
            field['User Id']=field['User Id'].split("-")[0] //abcd-efgh-ijk becomes abcd
        }
        catch{
            // do nothing
            continue;
        }
        // push this user to our list of users
        users.push(field)
    }
    // return those users and actions to the reducers
    return {
        type:ADD_USER ,
        payload:users
    }
}

export default addUser