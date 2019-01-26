import { combineReducers } from 'redux';
import tabReducre from './tabReducer';
import categoryReducers from './categoryReducer';
import contentListReducer from './contentListReducer';
import orderReducer from './orderReducer';

const reducers = combineReducers({
    tabReducre,
    categoryReducers,
    contentListReducer,
    orderReducer,
})


export default reducers;