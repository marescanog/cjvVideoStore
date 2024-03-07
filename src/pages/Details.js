import React from 'react'
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useParams } from "react-router-dom";
import '../styles/Details.css';

const Details = () => {
  return (
    <div className="mainContainer">
        <div className='bgStyleDetails'>
          <NavigationBar/>
          <Header title={'Details'}/>
        </div>
        <Footer/>  
    </div>
  )
}

export default Details
