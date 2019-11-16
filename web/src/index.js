import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers/index';
import App from './App';

const appStore = createStore(
  reducers,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <Provider store={appStore}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
