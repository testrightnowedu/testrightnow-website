import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// Load tracking/analytics script asynchronously in the background
const script = document.createElement("script");
script.type = "module";
script.src = "/tracker.js";
script.async = true;
document.head.appendChild(script);
