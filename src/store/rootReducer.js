import {combineReducers} from "redux";
import userReducer from "./reducers/userReducer.js";

const rootReducer = combineReducers({
    user:userReducer,
})

export default rootReducer;