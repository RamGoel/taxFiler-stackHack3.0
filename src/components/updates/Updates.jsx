import React from 'react';
import './Updates.css'
export default function Updates(props) {
  return (
    <div className="col w-100 " id="updateDiv">
      <h1 className="bg-dark text-light px-3 py-1 rounded shadow">{props.title}</h1>
      <div className=" mx-auto bg-dark rounded">
        <div className="py-3 mx-4">
          <p className="p-2 bg-light rounded mx-auto my-2 ">22-August is Last date to File Your Returns</p>
          <p className="p-2 bg-light rounded mx-auto my-2 ">22-August is Last date to File Your Returns</p>
          <p className="p-2 bg-light rounded mx-auto my-2 ">22-August is Last date to File Your Returns</p>
          <p className="p-2 bg-light rounded mx-auto my-2 ">22-August is Last date to File Your Returns</p>
          
        </div>
      </div>
    </div>
  );
}
