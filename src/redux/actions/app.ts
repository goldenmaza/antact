import { Dispatch } from 'redux';
import {
    REQ_API_DATA,
    RCV_API_DATA,
    ERR_API_DATA,
    SERVICE_ENDPOINT,
    Response,
    Error
} from '../constants/app';
import axios from 'axios';

export const getAPIData = () => (dispatch: Dispatch) => {
    dispatch({
        type: REQ_API_DATA
    });

    axios.get(SERVICE_ENDPOINT)
        .then((response: Response) => dispatch({
            response,
            type: RCV_API_DATA
        }))
        .catch((error: Error) => dispatch({
            error,
            type: ERR_API_DATA
        }));
};
