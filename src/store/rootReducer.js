import {combineReducers} from "redux";
import userReducer from "./reducers/userReducer.js";
import healthReducer from "./reducers/healthReducer.js";

const rootReducer = combineReducers({
    user: userReducer,
    health: healthReducer
})

export default rootReducer;