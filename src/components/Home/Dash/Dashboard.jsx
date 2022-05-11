import React,{useState} from 'react'
import Trans from '../Trans/Trans'
import Calc from '../Calc/Calc'
import Profile from '../profile/Profile'
import Updates from '../updates/Updates'
import Recent from '../Recent/Recent'
import Resources from '../Resources/Resources'
import './Dash.css'
export default function Dashboard() {

  let [elem,setElem]=useState("")
  return (
    <div className=' text-white px-0'>
    <div className="text-center  bg-dark d-flex" id='optionDiv'>
    <button className="btn btn-dark d-block my-2   px-3 mx-auto" onClick={()=>setElem(<Trans />)}>
      <i className='fa fa-usd mx-2'></i><span className='optionBtnText'>See Transactions
    </span></button>
    <button className="btn btn-dark d-block my-2   px-3 mx-auto" onClick={()=>setElem(<Recent />)}>
    <i className='fa fa-clock mx-2'></i><span className='optionBtnText'>Your recent Filed Returns
    </span></button>
    <button className="btn btn-dark d-block my-2   px-3 mx-auto" onClick={()=>setElem(<Calc />)}>
    <i className='fa fa-pen mx-2'></i><span className='optionBtnText'>Calculate Tax
    </span></button>
    <button className="btn btn-dark d-block my-2   px-3 mx-auto" onClick={()=>setElem(<Resources />)}>
    <i className='fa fa-book mx-2'></i><span className='optionBtnText'>Useful Resources
    </span></button>
    <button className="btn btn-dark d-block my-2   px-3 mx-auto" onClick={()=>setElem(<Profile />)}>
    <i className='fa fa-user mx-2'></i><span className='optionBtnText'>User Profile
    </span></button>
    <button className="btn btn-dark d-block my-2   px-3 mx-auto" onClick={()=>setElem(<Updates title="we have some updates" />)}>
    <i className='fa fa-bell mx-2'></i><span className='optionBtnText'>Updates
    </span></button>
  </div>

  <div>{elem}</div>
  </div>
  )
}
