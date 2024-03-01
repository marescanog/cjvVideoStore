import React from 'react'
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/TVListing.css';

const TVListing = () => {
  return (
    <div className="mainContainer">
        <div>
          <NavigationBar/>
          <Header title={'TV Listing'}/>
        </div>
        <Footer/>  
    </div>
  )
}

export default TVListing
