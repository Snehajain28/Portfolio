import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { PortContextProvider } from './utils/Provider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <PortContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </PortContextProvider>
);
