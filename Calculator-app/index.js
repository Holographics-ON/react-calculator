import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import AppCalculator from './AppCalculator';
import reportWebVitals from './reportWebVitals';

// Modern React
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <AppCalculator />
  </React.StrictMode>
);


reportWebVitals();