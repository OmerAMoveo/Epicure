import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { displayStore } from './store/display-slice'
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={displayStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
