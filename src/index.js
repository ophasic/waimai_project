import React from 'react';
import { render } from 'react-dom'
import { createStore } from 'redux'
import './index.css';
import './static/reset.css'
import App from './App';
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers'

const store = createStore(rootReducer)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();
