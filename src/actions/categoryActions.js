import { HEAD_DATA } from './actionTypes';

import axios from 'axios';

export const getHeaderData = () => (dispatch, getState) => {
    axios({
        method: 'get',
        url: '/json/head.json'
    }).then((res) => {
        dispatch({
            type: HEAD_DATA,
            obj: res.data
        })
    });
}