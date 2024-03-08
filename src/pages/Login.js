import React, {useState, useEffect} from 'react'
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2'
import bcrypt from "bcryptjs-react";
import jwtDecode from 'jwt-decode';
import '../styles/Registration.css';


const Login = () => {
  const [validated, setValidated] = useState(false);
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  function handleSubmit(event) {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }

      setValidated(true);
      event.preventDefault();



      bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash("B4c0/\/", salt, function(err, hash) {
            fetch(`http://localhost:8000/users?email=${inputs.email}`).then(res => res.json())
            .then((fetchRes) => {
              if(fetchRes.length > 0){
                bcrypt.compare(inputs.password, fetchRes[0].password, function(err, res) {
                  if(res === true){
                    // get jwt token
                    fetch('http://localhost:5000/api/jwt', {
                      method: 'POST',
                      headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                      },
                      body: JSON.stringify({
                        id:fetchRes[0].id
                      })
                    }).then(res2 => res2.json())
                    .then(res3 => {
                      console.log(res3);
                    })
                  } else {
                    Swal.fire({
                      icon: "error",
                      title: "Wrong credentials!",
                      text: "Please try again",
                  })  
                }
              });
              } else {
                Swal.fire({
                  icon: "error",
                  title: "Wrong credentials!",
                  text: "Please try again",
                })
              }
            },
            (error)=>{
              console.log(error); // API Call failed 
            }
            );
        });
    });
  };

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
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email"  
                      name="email" 
                      value={inputs.email || ""} 
                      onChange={handleChange}
                      required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password"  
                      name="password" 
                      value={inputs.password || ""} 
                      onChange={handleChange}
                      required
                  />
                </Form.Group>

                <Button variant="primary" type="input" className='registration-button-style'>
                  Login
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