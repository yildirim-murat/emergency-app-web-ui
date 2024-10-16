import { SET_SUMMARY_DATA } from '../actions/setSummaryActions.js';

const initialState = {
    summaryData: null,
};

const summaryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SUMMARY_DATA:
            return {
                ...state,
                summaryData: action.payload,

            };
        default:
            return state;
    }
};

export default summaryReducer;
