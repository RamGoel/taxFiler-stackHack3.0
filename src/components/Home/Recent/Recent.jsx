import React from 'react'

let recents=[
    {
        desc:"ITR for",
        date:"May 2021",
        website:"www.taxindia.com"
    },
    {
        desc:"ITR for",
        date:"May 2021",
        website:"www.taxindia.com"
    },
    {
        desc:"ITR for",
        date:"May 2021",
        website:"www.taxindia.com"
    },
    {
        desc:"ITR for",
        date:"May 2021",
        website:"www.taxindia.com"
    },
]

function recentFn(props){
    return(
        <div  className='d-flex align-items-center justify-content-between text-dark bg-light my-2 border px-2 rounded'>
            <div className=''>
                
            <h4 className='my-0  py-1'>{props.desc+" "+props.date}</h4>
            <p className='my-0  py-1'>{props.website}</p>
            </div>
            <div className=''>
                <i className='fa fa-1x mx-3 fa-eye'></i>
                <button className='btn btn-outline-primary'>Status</button>
            </div>
        </div>
    )
}
export default function Recent() {
  return (
    <div className='text-dark px-3 py-2'>
        {recents.map((elem)=>recentFn(elem))}
    </div>
  )
}

