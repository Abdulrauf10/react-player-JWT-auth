import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import './Login.css';

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://react-player-jwtauth.herokuapp.com/login", {
        email,
        password,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.accessToken);
        localStorage.setItem("email", response.data.email);
        console.log(response);
        history.push("/collection");
      })
      .catch((error) => {
        console.log(error);
        alert("user or password not found");
      });
  };

  return (
    <div className='login'>
      <Row>
        <Col md={7}>
          <div className='login_image'>
           <h4 className='login_page'>Log in</h4>
          </div>
        </Col>

        <Col md={5}>
           <form onSubmit={(e) => handleSubmit(e)} className='form_login'>
            <input 
              onChange={(e) => setEmail(e.target.value)}
              required
              type='text' 
              className='input_login'
              placeholder='Email'/>
            
            <input 
              onChange={(e) => setPassword(e.target.value)}
              required
              type='password' 
              className='input_login'
              placeholder='Password'/>

            <button type="submit" className='button_logintocollection'>Login</button>
          </form>
        </Col>
      </Row>
    </div>
  )
}

export default Login;
