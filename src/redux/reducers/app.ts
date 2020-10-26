import { AnyAction } from 'redux';
import {
    REQ_API_DATA,
    RCV_API_DATA,
    ERR_API_DATA,
    appState,
    AppReducer
} from '../constants/app';

export const appComponent = (state = appState, action: AnyAction): AppReducer => {
    switch(action.type) {
        case REQ_API_DATA:
            return {
                ...state,
                response: null
                //failure: null
            };
        case RCV_API_DATA:
            return {
                ...state,
                response: action.response.data.results[0]
            };
        case ERR_API_DATA:
            return {
                ...state
                //failure: action.error
            };
        default:
            return state;
    }
};
