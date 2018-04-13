import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './reset.css';
import './index.css';

import Game from './components/game';

import store from './store';

console.log(store.getState())

setTimeout(function() {console.log(store.getState())}, 10000)

ReactDOM.render(
  <Provider  store={store} >
    <Game/>
  </Provider>,
  document.getElementById('root')
);
