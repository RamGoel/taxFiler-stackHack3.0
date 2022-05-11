import React from 'react';
import Dashboard from './Dash/Dashboard';
import './Home.css'
export default function Home() {
  return (
    <div id="homeDiv" className=" w-100 mx-auto row justify-content-between">
      <Dashboard />
    </div>
  );
}
