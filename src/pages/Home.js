import React, {useState, useEffect} from 'react'
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Featured from '../components/Featured';
import '../styles/Home.css';

const Home = () => {
  const [heroData, setHeroData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/movies')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setHeroData(data);
      });
  }, []);

  return (
    <div className="mainContainer">
      <div>
        <NavigationBar/>
        <div className='homeContainer'>
          <Header title={'Start Your Ultimate Binge Journey Today!'}/>
          <Hero list={heroData}/>
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
