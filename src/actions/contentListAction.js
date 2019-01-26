import { LIST_DATA } from './actionTypes';

import axios from 'axios';

export const getListData = () => (dispatch, getState) => {
    axios({
        method: 'get',
        url: '/json/list.json'
    }).then((res) => {
        dispatch({
            type: LIST_DATA,
            obj: res.data
        })
    });
}