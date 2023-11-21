import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './app.css';
import animalsData from './data';
 
const root = document.getElementById('root');
 
const addAnimal = (animal) => {
  animalsData.push(animal);
  renderApp();
};
 
const renderApp = () => {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};
 
renderApp();
 