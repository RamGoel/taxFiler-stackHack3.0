import React from 'react';
import Dash from '../main/Dash';
import './Home.css'
export default function Login() {
  return (
    <div id="homeDiv" className=" py-2 w-100 mx-auto row justify-content-between">
      <Dash />
      <div className="text-center col w-100 bg-dark">
        <button className="btn btn-primary d-block my-2 w-100 px-3 mx-auto">
          See Transactions
        </button>
        <button className="btn btn-primary d-block my-2 w-100 px-3 mx-auto">
          File Returns
        </button>
        <button className="btn btn-primary d-block my-2 w-100 px-3 mx-auto">
          See your Balance
        </button>
        <button className="btn btn-primary d-block my-2 w-100 px-3 mx-auto">
          See your current Status
        </button>
        <button className="btn btn-primary d-block my-2 w-100 px-3 mx-auto">
          See your current Status
        </button>
      </div>
    </div>
  );
}
