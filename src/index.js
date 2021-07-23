import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Repositories from './pages/Repositores';

ReactDOM.render(
  <React.StrictMode>
    {/* Componente que você quer inserir no HTML */}
    <App title="Hello, Gama Academy!"/>
  </React.StrictMode>,
  // Elemento HTML que vai receber esse componente
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
