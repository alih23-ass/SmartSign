// src/index.tsx
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' for createRoot
import App from './App';


const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement); // createRoot replaces render
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
