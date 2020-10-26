import { Dispatch } from 'redux';
import {
    REQ_API_DATA,
    RCV_API_DATA,
    ERR_API_DATA,
    CLEAR_API_DATA,
    APIResponse,
    APIError
} from '../constants/app';
import axios from 'axios';

export const getAPIData = (endpoint: string) => (dispatch: Dispatch):void => {
    dispatch({
        type: REQ_API_DATA
    });

    axios.request<APIResponse | APIError>({ url: endpoint })
        .then((response) => dispatch({
            response,
            type: RCV_API_DATA
        }))
        .catch((error) => dispatch({
            error,
            type: ERR_API_DATA
        }));
};

export const clearData = () => (dispatch: Dispatch):void => {
    dispatch({
        type: CLEAR_API_DATA
    });
};
