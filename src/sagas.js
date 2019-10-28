import {  takeLatest, all , take, fork, put} from 'redux-saga/effects';
import { ADD_USER_ASYNC } from "./actions/types";
import { eventChannel } from "redux-saga";
import firebase from "firebase";
import firebaseConfig from "./config";
import addUser from "./actions/addUser";
import {message} from 'antd'


// initialise the database 
firebase.initializeApp(firebaseConfig); 
const database=firebase.database();


// create an event channel to listen for data added to the database
function createEventChannel(){
    // yield delay(5000)
    // create an event listener that fires whenever a new user is added to the db
    const listener = eventChannel(
        emit => {
            database.ref("/users")
            .on("value",data => {
                return emit(data.val()||{})
            });
        return ()=>database.ref("/users").off(listener);
        }
    );

    return listener
}

// call the event listener to add a user upon recieving new users
function* updateItemSaga(){
    // create the event listener 
    const updateChannel = createEventChannel();
    // concurently get data from the event listener anytime it is fired
    while(true){

        const item =yield take(updateChannel);
        // dispatch the addUser action for the batch of new users
        yield put(addUser(item))
    }
}

// function to asynchronously add a user to the db using the API
function*  addUserToFirebase(action){
    // get the payload, i.e the details of the user
    const upload=action['payload'];
    // write a message that we are currently saving
    message.loading("Hold on, saving to database....",0.5)
    // send an http request to post this user
    const json = yield fetch('https://us-central1-enye-redux-3599e.cloudfunctions.net/addOrGetUser',{
                            method:'POST',
                            body:JSON.stringify(upload),//the body of the request is to be sent to the endpoint
                            header:{
                                "Content-Type":"application/json"
                            }
                        }).then(res=>res.json())
                            .then(res=>{message.success('Finished saving.....', 1.0)}) //If the request was sucessful, use a message component to alert us that it was sucessful
                            .catch(err=>{message.error("there was an error saving, please try again!",1.0);}) //if there was any error, use the message componenent to alert us

    // print the user to the console
    console.log(JSON.stringify(json));
}

// map the addUserToFirebase function to the action ADD_USER_ASYNC
function* addUserSaga(){
    yield takeLatest(ADD_USER_ASYNC,addUserToFirebase)
}

// export all of our sagas, which in this case is just addUserSaga
export default function* rootSaga(){
    yield all([
        addUserSaga(),
        fork(updateItemSaga)
    ])
}