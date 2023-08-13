/*
import React, { useState } from 'react';
import axios from 'axios';
import {toast } from 'react-toastify';


function Login(){

    var [values,setValues]=useState(
        {
           
            email:" ",
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
 
 if(! e_reg.test(values.email)){
    toast.error("Please Enter a Valid Email")
 }

 else if(values.password=="")
 {
    toast.error("Please Enter Password")
 }
 else{
    axios.post('http://localhost:9092/login',values).then((res)=>{
      console.log(res)
      toast.success(res.data.message)
      localStorage.setItem('uid',res.data.data_id)
      window.location.reload()
    })
    .catch((err)=>
    {
      console.log(err)
      toast.error(err.response.data.message)
    })
 }
    }
    return(
        <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title" style={{textAlign:'center',color:'greenyellow'}}>Login Here</h5>
              <form>
                

                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                  <input type="email" onChange={handleInputs} name='email' className="form-control" id="exampleInputPassword1" placeholder="Enter Your Email-id" />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" onChange={handleInputs} name='password' className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                
                  <button style={{marginLeft:'200px'}} type="submit" onClick={(e)=>{handleSubmit(e)} } className="btn btn-primary">Submit</button>
                  <p style={{textAlign:'center'}}>Don't have an account</p>
                  
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}


export default Login
*/
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import './Login.css'; 


import 'react-toastify/dist/ReactToastify.css';
import './Login.css'; // You can create a separate CSS file for styling

function Login() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const handleInputs = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!emailRegEx.test(values.email)) {
      toast.error('Please Enter a Valid Email');
    } else if (values.password === '') {
      toast.error('Please Enter Password');
    } else {
      try {
        const response = await axios.post('http://localhost:9092/login', values);
        const { message, data_id } = response.data;
        toast.success(message);
        localStorage.setItem('uid', data_id);
        window.location.reload();
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center text-success">Login Here</h5>
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    onChange={handleInputs}
                    name="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter Your Email"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    onChange={handleInputs}
                    name="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    required
                  />
                </div>

                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="btn btn-primary w-100"
                >
                  Submit
                </button>
              </form>
              <p className="text-center mt-3">
                Don't have an account?
              <p> <a href="/Register">Register</a> </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

