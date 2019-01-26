import React from 'react';
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import './index.css';
import './static/reset.css'
import App from './App';
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers'
import thunk from 'redux-thunk'


const store = createStore(rootReducer, applyMiddleware(thunk))

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();
