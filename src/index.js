// Import React and ReactDOM to render the component
import React from 'react';
import ReactDOM from 'react-dom';

// Import the main App component
import App from './App';

// Import the styles
import './style.css';

// Render the App component inside the div with id 'root' in index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // This targets the div with id 'root' in index.html
);
