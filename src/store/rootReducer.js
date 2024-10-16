import {combineReducers} from "redux";
import userReducer from "./reducers/userReducer.js";
import summaryReducer from "./reducers/setSummaryReducer.js";

const rootReducer = combineReducers({
    user: userReducer,
    summary: summaryReducer
})

export default rootReducer;