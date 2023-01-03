import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import { Provider } from 'react-redux';

import store from './store';

import './firebase';
import './styles/index.scss';
import "src/styles/fontSize.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);




