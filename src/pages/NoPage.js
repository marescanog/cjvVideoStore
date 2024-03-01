import React from 'react'
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/NoPage.css';

const NoPage = () => {
  return (
    <div className="mainContainer">
        <div>
          <NavigationBar/>
          <Header title={'404'}/>
        </div>
        <Footer/>  
    </div>
  )
}

export default NoPage
