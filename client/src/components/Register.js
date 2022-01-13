import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import './Register.css';

const Register = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistration = (e) => {
    e.preventDefault();
    axios.post("https://react-player-jwtauth.herokuapp.com/register", {
        email,
        password,
      })
      .then(function (response) {
        console.log(response);
        history.push("/login");
        alert("Registered!");
      })
      .catch(function (error) {
        console.log(error);
        alert("incorrect data");
      });
    }

  return (
    <div className='register'>
       <form onSubmit={(e) => handleRegistration(e)} className='form_register'>
        <div className='box_form'>
          <input 
          onChange={(e) => setEmail(e.target.value)}
          required
          type='text'
          placeholder='Email' 
          className='input'/>
        
          <input 
            onChange={(e) => setPassword(e.target.value)}
            required
            type='password' 
            placeholder='Password'
            className='input'/>
          
          <Link to='/login'>Have an account? log in here</Link>

          <button type="submit" className='button_register'>Register</button>
        </div>
      </form>
    </div>
  )
}

export default Register;
