import React from 'react'
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/MovieListing.css';

const MovieListing = () => {
  return (
    <div className="mainContainer">
        <div>
          <NavigationBar/>
          <Header title={'Movie Listing'}/>
        </div>
        <Footer/>  
    </div>
  )
}

export default MovieListing
