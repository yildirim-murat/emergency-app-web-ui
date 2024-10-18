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
                    eventData: payload.eventData || state.healthProps.eventData,
                    crew: payload.crew || state.healthProps.crew,
                }
            }
        default:
            return state
    }
}