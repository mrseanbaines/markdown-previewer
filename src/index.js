import React from 'react';
import ReactDOM from 'react-dom';

// Styles
import './index.css';

// Components
import App from './App';

// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
