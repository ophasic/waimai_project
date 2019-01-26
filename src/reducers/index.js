import { combineReducers } from 'redux';
import tabReducre from './tabReducer';
import categoryReducers from './categoryReducer';
import contentListReducer from './contentListReducer';


const reducers = combineReducers({
    tabReducre,
    categoryReducers,
    contentListReducer
})


export default reducers;