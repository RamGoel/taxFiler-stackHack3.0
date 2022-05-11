import React from 'react';

export default function Profile(props) {
  return (
    <div class="container rounded bg-white">
    <div class="row">
        <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-1 py-2"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" /><span class="font-weight-bold">Edogaru</span><span class="text-black-50">edogaru@mail.com.my</span><span> </span></div>
        </div>
        <div class="col border-right">
            <div class="p-3 py-2 w-100 ">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Profile Settings</h4>
                </div>

                <div class="row mt-3 w-100">
                    <div className="col">

                    <div class="col-md-12"><label class="labels my-1">Name</label><input type="text" class="form-control" placeholder="first name" value=""/></div>               
                    <div class="col-md-12"><label class="labels my-1">Mobile Number</label><input type="text" class="form-control" placeholder="enter phone number" value=""/></div>
                    <div class="col-md-12"><label class="labels my-1">Address</label><input type="text" class="form-control" placeholder="enter address line 2" value=""/></div>
                    <div class="col-md-12"><label class="labels my-1">Postcode</label><input type="text" class="form-control" placeholder="enter address line 2" value=""/></div>
                    </div>
                    <div className="col">

                    <div class="col-md-12"><label class="labels my-1">State</label><input type="text" class="form-control" placeholder="enter address line 2" value=""/></div>
                    <div class="col-md-12"><label class="labels my-1">Area</label><input type="text" class="form-control" placeholder="enter address line 2" value=""/></div>
                    <div class="col-md-12"><label class="labels my-1">Email ID</label><input type="text" class="form-control" placeholder="enter email id" value=""/></div>
                    <div class="col-md-12"><label class="labels my-1">Country</label><input type="text" class="form-control" placeholder="country" value="" /></div>
                    </div>
                </div>
                
                <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Save Profile</button></div>
            </div>
        </div>
       
    </div>
</div>


  );
}
