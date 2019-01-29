import { createStore,applyMiddleware } from 'redux';

import rootReducer from './reducers';

import thunk from 'redux-thunk';

import createHistory from 'history/createHashHistory'

import { routerMiddleware } from 'react-router-redux'

// 创建基于hash的history
const history = createHistory();

// 创建初始化tab
history.replace('home');

// 创建history的Middleware
const historyMiddl = routerMiddleware(history);

const store = createStore(rootReducer, applyMiddleware(thunk,historyMiddl));

export {
    store,
    history
}