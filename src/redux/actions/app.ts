import { Dispatch } from 'redux';
import {
    REQ_API_DATA,
    RCV_API_DATA,
    ERR_API_DATA,
    SERVICE_ENDPOINT,
    APIResponse,
    Error
} from '../constants/app';
import axios from 'axios';

export const getAPIData = () => (dispatch: Dispatch):void => {
    dispatch({
        type: REQ_API_DATA
    });

    axios.request<APIResponse>({ url: SERVICE_ENDPOINT })
        .then((response) => dispatch({
            response,
            type: RCV_API_DATA
        }))
        .catch((error) => dispatch({
            error,
            type: ERR_API_DATA
        }));
};
