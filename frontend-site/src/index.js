import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from './Store';
import {Provider} from "react-redux";


 /*Provider conncet redux store with react */
ReactDOM.render(
  <Provider store={store}>                 
  <BrowserRouter>
  <div className='main-container'>
  <App/>
  </div>
  </BrowserRouter>
  </Provider>
 
 ,
  document.getElementById('root')
);


