import { combineReducers } from 'redux';
import tabReducre from './tabReducer';
import categoryReducers from './categoryReducer';


const reducers = combineReducers({
    tabReducre,
    categoryReducers
})


export default reducers;