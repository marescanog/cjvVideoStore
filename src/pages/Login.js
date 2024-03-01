import React from 'react'
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/Login.css';

const Login = () => {
  return (
    <div className="mainContainer">
        <div>
          <NavigationBar/>
          <Header title={'Login'} center/>
        </div>
        <Footer/>  
    </div>
  )
}

export default Login
