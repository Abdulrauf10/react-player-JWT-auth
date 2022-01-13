import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import './Collection.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import ImageGerman from '../images/german.jpg';
import ImageRussian from '../images/russian.jpg';
import ImageJapanese from '../images/japanese.jpg';

import Navbar from './Navbar';

const Collection = () => {
  const history = useHistory();
  const [token] = useState(localStorage.getItem("token"));

  useEffect(() => {
    axios
      .get("https://react-player-jwtauth.herokuapp.com/home", {
        headers: { authorization: token },
      })
      .then((response) => {
        console.log(response);       
      })
      .catch((error) => {
        console.log(error);
        history.push("/login");
      });
  });

  return (
    <>
    <Navbar/>
      <div className='collection'>
        <Container>
          <Row className="justify-content-md-center">
            <Col md='auto'>
              <Card style={{ width: '16rem' }} className='column'>
                <Card.Img variant="top" src={ImageGerman} />
                <Card.Body>
                  <Card.Title>German</Card.Title>
                  <Card.Text>
                    Learn greetings in german
                  </Card.Text>
                  <Link to='/german'>
                    <Button variant="primary">Go to class</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>

            <Col md='auto'> 
              <Card style={{ width: '16rem' }} className='column'>
                <Card.Img variant="top" src={ImageRussian} />
                <Card.Body>
                  <Card.Title>Russian</Card.Title>
                  <Card.Text>
                    Russian for pronounciation and daily conversation
                  </Card.Text>
                  <Link to='/russian'>
                    <Button variant="primary">Go to class</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>

            <Col md='auto'>
              <Card style={{ width: '16rem' }} className='column'>
                <Card.Img variant="top" src={ImageJapanese} />
                <Card.Body>
                  <Card.Title>Japanese</Card.Title>
                  <Card.Text>
                    Learn daily conversation, cultures, greetings in japanese 
                  </Card.Text>
                  <Link to='/japanese'>
                    <Button variant="primary">Go to class</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Collection;
