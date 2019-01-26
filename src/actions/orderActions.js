import { ORDER_DATA } from './actionTypes';

import axios from 'axios';

export const getOrderData = (page) => (dispatch, getState) => {
    axios({
        method: 'get',
        url: '/json/orders.json'
    }).then((res) => {
        dispatch({
            type: ORDER_DATA,
            currentPage: page,
            obj: res.data
        })
    });
}