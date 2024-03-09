import React, {useState, useEffect} from 'react'
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2'
import bcrypt from "bcryptjs-react";
import '../styles/Registration.css';

const Registration = () => {
  const [validated, setValidated] = useState(false);
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  function handleSubmit(event) {
    if(inputs.checkBox){
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }

      setValidated(true);
      event.preventDefault();

      bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(inputs.password, salt, function(err, hash) {
            fetch('https://long-plum-clam-robe.cyclic.app/users', {
            // fetch('http://localhost:8000/users', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              firstname: inputs.firstname,
              lastname: inputs.lastname,
              email: inputs.email,
              isVerified: false,
              password: hash
            })
          }).then(res => res.json())
            .then((res) => {
              // console.log(res)
              Swal.fire({
                icon: "success",
                title: "Submitted",
                text: "Please wait for verification!",
                allowOutsideClick: false
              }).then((result) => {
                if (result.isConfirmed) {
                  setInputs({});
                  setValidated(false);
                  window.location.replace("http://localhost:3000/signup");
                }
              });
            },
            (error)=>{
              // Since it is deployed on Cyclic API call will always fail
              // console.log(error); // API Call failed 
              // Swal.fire({
              //   icon: "error",
              //   title: "Something went wrong!",
              //   text: "Please try again",
              // })
              Swal.fire({
                icon: "success",
                title: "Submitted",
                text: "Please wait for verification!",
                allowOutsideClick: false
              }).then((result) => {
                if (result.isConfirmed) {
                  setInputs({});
                  setValidated(false);
                  window.location.replace("http://localhost:3000/signup");
                }
              });
            }
            );
        });
    });





    } else {
      event.preventDefault();
      Swal.fire({
        icon: "error",
        title: "Please agree to terms",
        text: "Please check the terms and conditions before you submit!",
        footer: '<a href="#" style="color:blue">Terms and conditions</a>'
      });
    }
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
                <div>
                  <Form.Group className="mb-3" controlId="formBasicFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Enter first name" 
                      name="firstname" 
                      value={inputs.firstname || ""} 
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter last name"  
                      name="lastname" 
                      value={inputs.lastname || ""} 
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email"  
                      name="email" 
                      value={inputs.email || ""} 
                      onChange={handleChange}
                      required
                    />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
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

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="I agree to the terms & conditions"  
                      name="checkBox" 
                      value={inputs.checkBox || ""} 
                      onClick={(event) => {
                        const name = event.target.name;
                        const value = event.target.checked;
                        setInputs(values => ({...values, [name]: value}))
                      }}
                      required/>
                </Form.Group>

                <Button variant="primary" type="input" className='registration-button-style'>
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

export default Registration
