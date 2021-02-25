import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import citiesReducer from './reducers/cities_reducer';

const reducers = combineReducers({
  cities: citiesReducer
});

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
