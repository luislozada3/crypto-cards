import React from 'react';
import ReactDOM from 'react-dom/client';
import { CardsContextProvider } from './context/CardsContext';
import App from './App';
import './styles/main.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <CardsContextProvider>
      <App />
    </CardsContextProvider>
  </React.StrictMode>
);
