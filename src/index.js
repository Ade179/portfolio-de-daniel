// Import required libraries
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Get the DOM element where the React app will be rendered
const rootElement = document.getElementById('root');

// Create a root and render the App component inside it
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
