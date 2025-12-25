/**
 * Main Entry Point
 *
 * This file initializes the React application and renders it to the DOM.
 * It wraps the App component with BrowserRouter to enable client-side routing.
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';

// Create root element and render the application
// BrowserRouter enables navigation between pages without full page reloads
ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
