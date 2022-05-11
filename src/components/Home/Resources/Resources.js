import React,{useState} from 'react'

let linkArr=[
    {
    link:"https://www.youtube.com/watch/83120edhwduwe2ui29",
    Name:"Video For Financial Literacy"
    },
    {
    link:"https://www.youtube.com/watch/83120edhwduwe2ui29",
    Name:"Video For Financial Literacy"
    },
    {
    link:"https://www.youtube.com/watch/83120edhwduwe2ui29",
    Name:"Video For Financial Literacy"
    },
    {
    link:"https://www.youtube.com/watch/83120edhwduwe2ui29",
    Name:"Video For Financial Literacy"
    },
]
function Resources() {

  let [url,setUrl]=useState("https://youtu.be/wrzL9QGVY48")
  return (
    <div className='text-dark row mx-2 my-2 p-2'>
        <div className="col-3 bg-light rounded mx-3  px-0 ">

            <h4 className='bg-dark text-light py-2 mx-0 rounded text-center'>Video Links</h4>
            <div id='linkBox' className='text-dark text-left px-2'>

            {
                linkArr.map((elem)=>{return <button onClick={()=>setUrl(elem.link)} className="d-block btn btn-light my-2">{elem.Name}</button>})
            }
            </div>
        </div>
        <div className='col'>
            <iframe src={url}  frameborder="0" className='w-100 border rounded shadow'></iframe>
        </div>
        
    </div>
  )
}

export default Resources