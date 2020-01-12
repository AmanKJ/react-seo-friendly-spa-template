import React from 'react';
import { render } from 'react-snapshot';
import './assets/style/main.scss';
import App from './App';
import './config/fa.config';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

const AppContainer = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

render(AppContainer, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
