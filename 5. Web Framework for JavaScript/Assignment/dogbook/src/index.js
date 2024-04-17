import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// npx create-reacte-app foldername
// cd foldername
// npm start
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);

// npm start
// Starts the development server.

// npm run build
// Bundles the app into static files for production.

// npm test
// Starts the test runner.

// npm run eject
// Removes this tool and copies build dependencies, configuration files
// and scripts into the app directory. If you do this, you can’t go back!