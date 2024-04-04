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



  useEffect(() => {
    // fetch('https://long-plum-clam-robe.cyclic.app/movies?mostDemanded=true&releaseYear=2021') // JSON Server old
    // fetch('http://localhost:8000/movies?mostDemanded=true&releaseYear=2021')

    try{
      // fetch('http://localhost:5000/mostDemanded?releaseYear=2021') // Java Server local
      fetch('https://myspringbootapi-env.eba-sf9ddjd5.ca-central-1.elasticbeanstalk.com/mostDemanded?releaseYear=2021') // Java Server deployed
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setHeroData(data);
      });
    } catch (err) {
      console.log(err);
      setHeroData([]);
    }


    
    // fetch('https://long-plum-clam-robe.cyclic.app/movies?IsFeatured=true') // JSON Server old
    // fetch('http://localhost:8000/movies?IsFeatured=true')
    try{
      console.log(process.env);
      // fetch(`http://localhost:5000/mostDemanded?releaseYear=2021`) // Java Server local
      fetch('https://myspringbootapi-env.eba-sf9ddjd5.ca-central-1.elasticbeanstalk.com/movies?IsFeatured=true') // Java Server prod
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        seFeatured2021Movies(data);
      });
    } catch (err){
      console.log(err);
      seFeatured2021Movies([]);
    }

      
      // fetch('https://long-plum-clam-robe.cyclic.app/shows?IsFeatured=true') // JSON Server old
    // fetch('http://localhost:8000/shows?IsFeatured=true')

    try{
      // fetch('http://localhost:5000/shows?IsFeatured=true') // Java Server local
      fetch('https://myspringbootapi-env.eba-sf9ddjd5.ca-central-1.elasticbeanstalk.com/shows?IsFeatured=true') // Java Server prod
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        seFeatured2021TV(data);
      });
    }catch (err){
      console.log(err);
      seFeatured2021TV([]);
    }

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
          <div className="ad-space-featured">
            <Content /> 
          </div>

        </div>
      </div>
      <Footer/>  
    </div>
  )
}

export default Home
