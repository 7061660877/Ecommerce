/*import {useNavigate} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const navigate=useNavigate()
  const handleLogout=()=>{
    localStorage.removeItem('uid')
    localStorage.removeItem('cart-len')
  }
  return (
    <div className='navbar'>
    <nav   className="navbar navbar-expand-lg bg-body-tertiary" >
      <div className="container-fluid">
      <a className="navbar-brand" href="">
  <img  style={{height:'40px',width:'40px'}} src="/Producthut.png" alt="Producthut Logo" />
</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page"onClick={()=>{navigate('/home')}} >Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={()=>{navigate('/about')}}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={()=>{navigate('/contact')}}>Contact</a>
            </li>
            <form style={{marginLeft:'750px'}} class="form-inline">
              <button class="btn btn-outline-success my-2 my-sm-0" onClick={handleLogout} type="submit">Logout</button>
            </form>
            <form  class="form-inline"   style={{ marginLeft: '10px' }}>
              <button class="btn btn-outline-success my-2 my-sm-0" onClick={()=>{navigate('cart')}} type="submit">{`My Cart(${localStorage.getItem('cart_len')}:items )}</button>
            </form>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;
*/
/*import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('uid');
    localStorage.removeItem('cart_len');
  };

  return (
    <div className='navbar'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img style={{ height: '40px', width: '40px' }} src="/Producthut.png" alt="Producthut Logo" />
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" onClick={() => { navigate('/home') }}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => { navigate('/about') }}>About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => { navigate('/contact') }}>Contact</a>
              </li>
            </ul>
            
            <form className="form-inline">
              <button className="btn btn-outline-success my-2 my-sm-0" onClick={handleLogout} type="submit">Logout</button>
            </form>
            
            <form className="form-inline" style={{ marginLeft: '10px' }}>
              <button className="btn btn-outline-success my-2 my-sm-0" onClick={() => { navigate('cart') }} type="submit">
                {`My Cart (${localStorage.getItem('cart_len') || 0} items)`}
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;*/
/*import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('uid');
    localStorage.removeItem('cart_len');
  };

  return (
    <div className='navbar'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img style={{ height: '40px', width: '40px' }} src="/Producthut.png" alt="Producthut Logo" />
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" onClick={() => { navigate('/home') }}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => { navigate('/about') }}>About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => { navigate('/contact') }}>Contact</a>
              </li>
            </ul>
            
            <form className="form-inline">
              <button className="btn btn-outline-success my-2 my-sm-0" onClick={handleLogout} type="submit">Logout</button>
            </form>
            
            <form className="form-inline" style={{ marginLeft: '10px' }}>
              <button className="btn btn-outline-success my-2 my-sm-0" onClick={() => { navigate('cart') }} type="submit">
                {`My Cart (${localStorage.getItem('cart_len') || 0} items)`}
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;*/
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('uid');
    localStorage.removeItem('cart_len');
  };

  return (
    <div className='navbar'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img style={{ height: '40px', width: '40px' }} src="/Producthut.png" alt="Producthut Logo" />
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" onClick={() => { navigate('/home') }}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => { navigate('/about') }}>About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => { navigate('/contact') }}>Contact</a>
              </li>
            </ul>
          </div>
          
          <div className="d-flex align-items-center">
            <form className="form-inline" style={{ marginRight: '10px' }}>
              <button className="btn btn-outline-success my-2 my-sm-0" onClick={() => { navigate('cart') }} type="submit">
                {`My Cart (${localStorage.getItem('cart_len') || 0} items)`}
              </button>
            </form>
            
            <form className="form-inline">
              <button className="btn btn-outline-success my-2 my-sm-0" onClick={handleLogout} type="submit">Logout</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;


