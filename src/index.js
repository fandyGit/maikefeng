import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {Switch,HashRouter,Route} from 'react-router-dom'

import App from './container/app/App';
import store from './redux/store'
ReactDOM.render(
  (
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  )
  ,
  document.getElementById('root'));

