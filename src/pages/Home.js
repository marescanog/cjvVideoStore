import React from 'react';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Featured from '../components/Featured';

const Home = () => {
  return (
    <div>
      <NavigationBar/>
        <Header title={'Welcome!'}/>
        <Hero />
        <Featured  title={'Movies'}/>
        <Featured  title={'TV Shows'}/>
        <p>Content</p>
      <Footer/>  
    </div>
  )
}

export default Home
