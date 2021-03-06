import React from 'react'

export default function Calc(){
  return(
    <>
    <div className=" container" style={{height:'100vh'}} >
    <div className='text-dark py-2 d-flex align-items-center justify-content-between mx-auto '>

    <h1 className='' >Income Tax Calculator</h1>
    <button class="btn btn-primary profile-button px-4 my-2" type="button">Calculate</button>
    </div>
    <div class="row py-2  w-100 justify-content-center  mx-auto text-dark ">
                    <div className="col">

                    <div class="col-md-12"><label class="labels my-1">Employer identification number (EIN)</label><input type="text" class="form-control"  value=""/></div>               
                    <div class="col-md-12"><label class="labels my-1">Employer’s name, address, and ZIP code</label><input type="text" class="form-control"  value=""/></div>
                    <div class="col-md-12"><label class="labels my-1">Control number</label><input type="text" class="form-control"  value=""/></div>
                    <div class="col-md-12"><label class="labels my-1">Employee’s first name and initial</label><input type="text" class="form-control"  value=""/></div>
                    <div class="col-md-12"><label class="labels my-1">Last name </label><input type="text" class="form-control"  value=""/></div>               
                    <div class="col-md-12"><label class="labels my-1">Employee’s address and ZIP code</label><input type="text" class="form-control"  value=""/></div>
                    <div class="col-md-12"><label class="labels my-1">Relief other than relief u/s 87A</label><input type="text" class="form-control"  value=""/></div>
                    </div>
                    <div className="col">

                    <div class="col-md-12"><label class="labels my-1">Wages, tips, other compensation</label><input type="text" class="form-control" value=""/></div>
                    <div class="col-md-12"><label class="labels my-1">Federal income tax withheld</label><input type="text" class="form-control" value=""/></div>
                    <div class="col-md-12"><label class="labels my-1">Capital Gains </label><input type="text" class="form-control"  value=""/></div>
                    <div class="col-md-12"><label class="labels my-1">Income From Other Sources </label><input type="text" class="form-control"  value="" /></div>
                    <div class="col-md-12"><label class="labels my-1">Profits and Gains of Business or Profession (enter profit only)  </label><input type="text" class="form-control" value=""/></div>
                    <div class="col-md-12"><label class="labels my-1">Surcharge </label><input type="text" class="form-control" value=""/></div>
                    <div class="col-md-12"><label class="labels my-1">Health and Education Cess  </label><input type="text" class="form-control"  value=""/></div>
                    </div>
                </div>

    </div>
    </>
  )
}