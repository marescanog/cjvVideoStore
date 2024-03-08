import React from 'react'
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import '../styles/Login.css';

const Login = () => {
  return (
        <div className="mainContainer">
          <div>
            <NavigationBar/>
            <Header title={'Registration'} center/>
          </div>
          <div className='universal_container registration-form-container'>
            <Card className='registration-card-style'>
              <Card.Body  className='registration-card-body-style'>
                <Card.Title className='registration-title-text-style'>Create a New Account</Card.Title>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group>
                  <Button variant="primary" type="submit" className='registration-button-style'>
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </div>
          <Footer/>  
      </div>
  )
}

export default Login
