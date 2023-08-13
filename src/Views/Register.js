

import React, { useState } from 'react';
import axios from 'axios';
import {toast } from 'react-toastify';

function Register() {
    var [values,setValues]=useState(
        {
            name:" ",
            email:" ",
            mobile:" ",
            password:" "
        }
    )

    function handleInputs(e){
        console.log(e.target.name)
        setValues({...values,[e.target.name]:e.target.value})
 
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        
 var m_reg= /^[6-9]\d{9}$/
 var e_reg=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
 if(values.name=="")
 {
    toast.error("Please Enter Your Name")
 }
 else if(! e_reg.test(values.email)){
    toast.error("Please Enter a Valid Email")
 }
 else if(! m_reg.test(values.mobile)){
    toast.error("Please Enter a Valid Mobile")
 }
 else if(values.password=="")
 {
    toast.error("Please Enter Password")
 }
 else{
    axios.post('http://localhost:9092/register',values).then((res)=>{
      console.log(res)
      toast.success(res.data.message)
    })
    .catch((err)=>
    {
      console.log(err)
      toast.error(err.response.data.message)
    })
 }
    }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title" style={{textAlign:'center'}}>Register Here</h5>
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                  <input type="email" onChange={handleInputs}  name="name" className="form-control" id="exampleInputEmail1"  placeholder="Enter Your Name" />
                </div>

                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                  <input type="email" onChange={handleInputs} name='email' className="form-control" id="exampleInputPassword1" placeholder="Enter Your Email-id" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Mobile</label>
                  <input type="text" onChange={handleInputs} name='mobile' className="form-control" id="exampleInputPassword1" placeholder="Mobile No" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" onChange={handleInputs} name='password' className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                
                  <button type="submit" onClick={(e)=>{handleSubmit(e)} } className="btn btn-primary">Submit</button>
            
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
