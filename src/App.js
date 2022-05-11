import React from 'react';
import './style.css';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import NavBar from './components/navBar/NavBar';

import 'bootstrap/dist/css/bootstrap.min.css';
export default function App() {
  return (
    <div>
      {/* <Login /> */}
      <NavBar />
      <Home />
    </div>
  );
}
