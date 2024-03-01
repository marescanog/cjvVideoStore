import React from 'react'
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import Header from '../components/Header';

const NoPage = () => {
  return (
    <div>
      <NavigationBar/>
      <Header title={'404'}/>
      <Footer/>  
    </div>
  )
}

export default NoPage
