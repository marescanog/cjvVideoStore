import React, {useState, useEffect} from 'react'
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Content from '../components/Content';
import Featured from '../components/Featured';
import '../styles/Home.css';

const Home = () => {
  const [heroData, setHeroData] = useState([]);
  const [featured2021Movies, seFeatured2021Movies] = useState([]);
  const [featured2021TV, seFeatured2021TV] = useState([]);

  const filter2021Featured = () => {

  }
  useEffect(() => {
    fetch('http://localhost:8000/movies?mostDemanded=true&releaseYear=2021')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setHeroData(data);
    });

    fetch('http://localhost:8000/movies?IsFeatured=true')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        seFeatured2021Movies(data);
      });

    fetch('http://localhost:8000/shows?IsFeatured=true')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        seFeatured2021TV(data);
      });

  }, []);

  return (
    <div className="mainContainer">
      <div>
        <NavigationBar/>
        <div className='homeContainer'>
          <Header title={'Start Your Ultimate Binge Journey Today!'} />
          <Hero list={heroData}/>
          <Featured title={'Featured Films'} featuredList={featured2021Movies} type="movies"/>
          <div className="home_space_featured">
            <Featured  title={'Featured TV Shows'} featuredList={featured2021TV} type="shows"/>
          </div>
          <div className="home_space_featured">
            <Content /> 
          </div>

        </div>
      </div>
      <Footer/>  
    </div>
  )
}

export default Home
