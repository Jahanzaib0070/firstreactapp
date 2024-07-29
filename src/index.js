import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import "./index.css";
// import App from './App';
// import Calculator from './Calculator';
// import NetflixCard from './NetflixCard';
// import NetflixMain from './NetflixMain';
// import ContextApi from './ContextApiPractice/ContextApi';
// import App from './useEffect/App';
import App from './PokemonAPI/App';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);