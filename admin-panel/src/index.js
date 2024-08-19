import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

import { JWT_LOCAL_STORAGE_KEY } from './globals';

// Preload JWT if the user is logged in and it's saved in storage
const token = localStorage.getItem(JWT_LOCAL_STORAGE_KEY);

axios.defaults.baseUrl = process.env.REACT_APP_API_URL;
axios.defaults.headers = {
  "Content-Type": "application/json",
  "Authorization": token ? `Bearer ${token}` : undefined
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
