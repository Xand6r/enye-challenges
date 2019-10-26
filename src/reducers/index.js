//  A file to combine all the reducers to pass into the store
import {combineReducers} from 'redux';
import addReducer from "./addReducer";

// combine all the reducers we currently have
const allReducers=combineReducers({
    details:addReducer
});


// exporting the combined reducers
export default allReducers