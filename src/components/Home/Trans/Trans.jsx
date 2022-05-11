import React from 'react';
import './trans.css';

let transData=[
  {
    account:"38918328129",
    date:"22-Aug-2020",
    credit:"",
    debit:"20$"
  },
  {
    account:"382918928129",
    date:"22-Aug-2020",
    credit:"20$",
    debit:""
  },
  {
    account:"3891832918929",
    date:"22-Aug-2020",
    credit:"",
    debit:""
  },
  {
    account:"38928129",
    date:"22-Aug-2020",
    credit:"20$",
    debit:""
  },
]


function tableRow(props){
  if(props.credit!=""){

    return(
      <tr style={{backgroundColor:"green"}}>
        <td>{props.account}</td>
        <td>{props.date}</td>
        <td>{props.credit}</td>
        <td>{props.debit}</td>
      </tr>
    )
  }else{
    return(
      <tr style={{backgroundColor:"red"}}>
        <td>{props.account}</td>
        <td>{props.date}</td>
        <td>{props.credit}</td>
        <td>{props.debit}</td>
      </tr>
    )
  }
}
export default function Trans() {
  return (
    <div className=" w-100">
      <table className="w-100">
        <thead>

        <th>From/To</th>
        <th>Date</th>
        <th>Credit</th>
        <th>Debit</th>
        </thead>
        <tbody>

        {transData.map((elem)=>tableRow(elem))}
        </tbody>
        
      </table>
    </div>
  );
}
