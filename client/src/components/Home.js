import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className='home'>
      <Link to='/login' className='link_login'>Login</Link>

      <div className='link_register'>
        <h2 className='welcoming'>Welcome,</h2>
        <h3 className='get_leason'>Get your free leason here and have fun!</h3>

        <Link to='/register' className='to_register'>
          <button className='button_getstarted'>Get started</button>  
        </Link>
      </div>
    </div>
  )
}

export default Home
