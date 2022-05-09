import React from 'react'

export default function Login(){
  return(
    <>
    <div className="mainScreen d-flex flex-column justify-content-center align-items-center text-center bg-dark" style={{height:'100vh'}} >
    <h1 className="text-light display-1">Login Now</h1>
    <div className="container  text-center py-3  ">

    <input placeholder="Enter Your User Id" className="rounded form-control mx-2 my-3 w-75 mx-auto"/>
    <input placeholder="Enter Your Password" className="rounded form-control mx-2 my-3 w-75 mx-auto"/>
    <button className="mx-auto btn btn-outline-primary px-5 my-2">Submit</button>
    
    </div>

    </div>
    </>
  )
}