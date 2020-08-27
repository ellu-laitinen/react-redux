import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'

import './index.css';
import App from './App';
import counterReducer from './store/reducers/counter'
import resultsReducer from './store/reducers/results'

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultsReducer
});

const composeEnhancers = composeWithDevTools({
    trace: true,
    traceLimit: 25
})

const store = createStore(rootReducer, composeEnhancers());

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>,
    document.getElementById('root')
);


