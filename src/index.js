import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';

import WebFont from 'webfontloader';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

WebFont.load({
  google: {
    families: ['Lato:300,700', 'Josefin+Sans:100i', 'Grand+Hotel', 'sans-serif']
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
  );
registerServiceWorker();
