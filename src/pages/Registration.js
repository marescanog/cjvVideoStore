import React from 'react'
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/Registration.css';

const Registration = () => {
  return (
    <div className="mainContainer">
        <div>
          <NavigationBar/>
          <Header title={'Registration'}/>
        </div>
        <Footer/>  
    </div>
  )
}

export default Registration
