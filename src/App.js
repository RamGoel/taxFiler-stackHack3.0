import React from 'react';
import './style.css';
// import Login from './components/Login/Login';
import { initializeApp } from "firebase/app";
import Home from './components/Home/Home';
import NavBar from './components/navBar/NavBar';
// import firebaseConfig from "./config.js";

import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends React.Component {
  constructor(){
    super(props)
    // initializeApp(firebaseConfig);
  }


  render() {
    return (
      <div>
        <NavBar />
        <Home />
      </div>
    );
  }
}

