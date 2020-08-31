import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// root reducer
import rootReducer from './reducers/index';
//react redux 
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// create redux store
const store = createStore(rootReducer);

// use a special React Redux component called <Provider> to magically make the store available 
// to all container components in the application without passing it explicitly
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
/*
    * path : src/index.js
    * description : applicatoin entry point
 */
