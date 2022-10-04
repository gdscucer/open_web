import React from 'react';
import ReactDOM from 'react-dom/client';

import App from "./components/App"
import Header from "./components/Header"
import "./styles/main.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header />
    <App />
  </>
);