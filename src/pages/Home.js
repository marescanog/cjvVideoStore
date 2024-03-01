import React from 'react';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Featured from '../components/Featured';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="mainContainer">
      <div>
        <NavigationBar/>
        <div className='container'>
          <Header title={'Welcome!'}/>
          <Hero />
          <Featured  title={'Movies'}/>
          <Featured  title={'TV Shows'}/>
          <p>Content</p>
        </div>
      </div>
      <Footer/>  
    </div>
  )
}

export default Home
