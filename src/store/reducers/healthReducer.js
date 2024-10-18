import healthProps from "../initialStates/healthProps.js";
import {UPDATE} from "../actions/healthActions.js";

const initialState = {
    healthProps: healthProps
}

export default function healthReducer(state = initialState, {type, payload}) {
    switch (type) {
        case UPDATE:
            return {
                ...state,
                healthProps: {
                    ...state.healthProps,
                    health: {...state.healthProps.health,...payload}
                }
            }
        default:
            return state
    }
}