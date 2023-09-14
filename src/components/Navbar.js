import React from 'react';
import logo from '../assets/icons8-data-collection-66.png'
import { Link } from 'react-router-dom';
import '../styles/navbarStyle.css';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src={logo}/>
        <div className='logo__text'>
          <h4>Questionaire</h4>
        </div>
      </div>

      <div className='nav-button'>
       
        
        <Link to='/'><h3>Dashboard</h3></Link>
        <Link to='/Questionaire'><h3>Questionaire</h3></Link>
        <Link to='/Create'> <h3>Create</h3></Link>
      </div>
    </div>
  );
}

export default Navbar;
