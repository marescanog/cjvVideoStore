import React from 'react'
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/About.css';

const About = () => {
  return (
    <div className="mainContainer">
        <div>
          <NavigationBar/>
          <Header title={'About Us'}/>
        </div>
        <Footer/>  
    </div>
  )
}

export default About
