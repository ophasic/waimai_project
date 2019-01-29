import { combineReducers } from 'redux';
import tabReducre from './tabReducer';
import categoryReducers from './categoryReducer';
import contentListReducer from './contentListReducer';
import orderReducer from './orderReducer';
import { routerReducer } from "react-router-redux";

const reducers = combineReducers({
    tabReducre,
    categoryReducers,
    contentListReducer,
    orderReducer,
    router: routerReducer
})


export default reducers;