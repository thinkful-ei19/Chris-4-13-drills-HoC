import React from 'react';
import ReactDOM from 'react-dom';

import './reset.css';
import './index.css';

import Game from './components/game';

import store from './store';

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
