import React from 'react';
import { useHistory } from 'react-router-dom';
import './Navbar.css';

import Navbar2 from './Navbar2';

const Navbar = () => {
  const history = useHistory();

  const handleLogout = async () => {
    localStorage.removeItem("token");
    history.push("/login");
  };

  return (
    <>
    <div className='logout'>
      <button className='button_logout' onClick={handleLogout}>Logout</button>
      <Navbar2/>
    </div>
    
    </>
  )
}

export default Navbar;
