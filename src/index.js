import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Toaster } from 'react-hot-toast';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducers from './reducers';
import ScrollToTop from './components/ScrollToTop';

const store = configureStore({
   reducer : rootReducers
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store={store}>
      <BrowserRouter>
         <ScrollToTop/>
         <App />
         <Toaster />
      </BrowserRouter>
   </Provider>
);

