// Application entrypoint.

// Load up the application styles
require('../styles/application.scss');

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>,
    document.getElementById('dealer-root')
);
