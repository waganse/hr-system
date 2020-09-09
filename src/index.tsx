import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './domain/store/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import { BrowserRouter } from 'react-router-dom';
import './print.css';

Amplify.configure(aws_exports);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
