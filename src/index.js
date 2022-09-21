import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CountriesProvider } from './context/countriesContext';
import { QuizProvider } from './context/quizContext';
import * as serviceWorker from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <CountriesProvider>
      <QuizProvider>
        <App />
      </QuizProvider>
    </CountriesProvider>
  </React.StrictMode>
);
serviceWorker.register();


