import { AnyAction } from 'redux';
import {
    REQ_API_DATA,
    RCV_API_DATA,
    ERR_API_DATA,
    appState,
    AppReducer
} from '../constants/app';

export const appComponent = (state: appState, action: AnyAction): AppReducer => {
    switch(action.type) {
        case REQ_API_DATA:
            return {
                ...state
                //variable: null
                //failure: null
            };
        case RCV_API_DATA:
            return {
                ...state
                //variable: action.response
            };
        case ERR_API_DATA:
            return {
                ...state
                //variable: null
                //failure: action.error
            };
        default:
            return state;
    }
};
