import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Character from './models/character';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Character />,
  document.getElementById('root')
);

serviceWorker.unregister();
