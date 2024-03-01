import React from 'react'
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="mainContainer">
        <div>
          <NavigationBar/>
          <Header title={'Contact Us'}/>
        </div>
        <Footer/>  
    </div>
  )
}

export default Contact
