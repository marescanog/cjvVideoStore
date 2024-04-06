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
import { useCookies } from 'react-cookie';
import Cookies from 'js-cookie';

const Login = () => {
  const [validated, setValidated] = useState(false);
  const [inputs, setInputs] = useState({});
  const [cookies, setCookie] = useCookies(['xsrf','user']);
  function setXSRF(newValue) {
    setCookie('xsrf', newValue);
  }
  function setUser(newValue) {
    setCookie('user', newValue);
  }
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

        const base64Credentials = btoa(`${inputs.username}:${inputs.password}`);

        const requestOptions = {
          method: 'GET', 
          headers: {
            'Authorization': `Basic ${base64Credentials}`
          }
        };

        try{
        // fetch(`https://long-plum-clam-robe.cyclic.app/users?email=${inputs.email}`)
        // fetch(`http://localhost:8000/users?email=${inputs.email}`)

        // fetch(`http://localhost:5000/user`, // local
        fetch(`https://videostoreapi.torontohotelcalifornia.net/user`, // prod
        requestOptions
        )
          .then(res => {
            console.log(res)
            if (res.status == 200) {

              return res.json(); 

            }
            return res.json().then(err => Promise.reject(err));
          })
          .then(res=>{
            delete res.password
            let xsrf = Cookies.get('XSRF-TOKEN');
            setXSRF(xsrf);
            setUser(res)

            Swal.fire({
              icon: "success",
              title: "Success",
              text: "You will now be reidrected to your account page",
              allowOutsideClick: false
            }).then((result) => {
              if (result.isConfirmed) {
                window.location.replace("/account");
              }
            });
          })
          .catch(err=>{
            console.log(err)
          })
        } catch (err){
          console.log(err)
        }
            


    //   bcrypt.genSalt(10, function(err, salt) {
    //     bcrypt.hash("B4c0/\/", salt, function(err, hash) {
    //         fetch(`https://long-plum-clam-robe.cyclic.app/users?email=${inputs.email}`)
    //         // fetch(`http://localhost:8000/users?email=${inputs.email}`)
    //         .then(res => res.json())
    //         .then((fetchRes) => {
    //           if(fetchRes.length > 0 && fetchRes[0].isVerified == true){
    //             bcrypt.compare(inputs.password, fetchRes[0].password, function(err, res) {
    //               if(res === true){
    //                 // get jwt token
    //                 fetch('http://localhost:5000/api/jwt', {
    //                   method: 'POST',
    //                   headers: {
    //                     'Accept': 'application/json',
    //                     'Content-Type': 'application/json'
    //                   },
    //                   body: JSON.stringify({
    //                     id:fetchRes[0].id
    //                   })
    //                 }).then(res2 => res2.json())
    //                 .then(res3 => {
    //                   setJwt(res3);
    //                   setId(fetchRes[0].id);
    //                   Swal.fire({
    //                     icon: "success",
    //                     title: "Success",
    //                     text: "You will now be reidrected to your account page",
    //                     allowOutsideClick: false
    //                   }).then((result) => {
    //                     if (result.isConfirmed) {
    //                       window.location.replace("http://localhost:3000/account");
    //                     }
    //                   });
    //                 })
    //               } else {
    //                 Swal.fire({
    //                   icon: "error",
    //                   title: "Wrong credentials!",
    //                   text: "Please try again",
    //               })  
    //             }
    //           });
    //           } else {
    //             Swal.fire({
    //               icon: "error",
    //               title: "Wrong credentials!",
    //               text: "Please try again",
    //             })
    //           }
    //         },
    //         (error)=>{
    //           console.log(error); // API Call failed 
    //           Swal.fire({
    //             icon: "error",
    //             title: "Something went wrong!",
    //             text: "Please try again",
    //           })
    //         }
    //         );
    //     });
    // });
  };

  return (
    <div className="mainContainer">
        <div>
          <NavigationBar/>
          <Header title={'Log into your account'} center/>
        </div>
        <div className='universal_container registration-form-container'>
          <Card className='registration-card-style'>
            <Card.Body  className='registration-card-body-style'>
              <Card.Title className='registration-title-text-style'>Create a New Account</Card.Title>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="username">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email"  
                      name="username" 
                      value={inputs.username || ""} 
                      onChange={handleChange}
                      required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="password"  
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