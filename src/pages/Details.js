import React, {useState, useEffect} from 'react';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { useParams } from "react-router-dom";
import '../styles/Details.css';

const Details = () => {
  const [details, setDetails] = useState({})
  let { id, type } = useParams();

  useEffect(()=>{
    fetch(`http://localhost:8000/${type}?id=${id}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setDetails(data[0]);
    });

  },[]);

  return (
    <div className="mainContainer">
        <div>
          <NavigationBar/>
        </div>
        <div className='details-image-banner'>
          <div className='details-info-bg-section'>
            <Header title={'Details'}/>
            <div className="details-info-container universal_container">
              <div className='details-info-left'>
                <Image src={details?.posterImage} fluid className='details-poster-img'/>
              </div>
              <div className='details-info-right'>
                <h3>{details?.title}</h3>

                <div className='genre-rating-section'>
                  <div>
                    {JSON.stringify(details?.genre)}
                  </div>
                  <div>
                    {JSON.stringify(details?.MPARating)}
                  </div>
                </div>

                <div className='rating-section'>
                  {JSON.stringify(details?.rating)}
                </div>

                <div className='buttons-section'>
                  <Button variant="outline-info" className='details-buttons-info'>Trailer</Button>
                  <Button variant="outline-info" className='details-buttons-info mr-3 ml-3'>List</Button>
                  <Button variant="outline-info" className='details-buttons-info'>Redeem</Button>
                </div>

                <div>
                  {JSON.stringify(details?.description)}
                </div>

                <div>
                  <div>Rent       {JSON.stringify(details?.rentPrice)}</div>
                  <div>Buy       {JSON.stringify(details?.buyPrice)}</div>
                </div>
              </div>
            </div>
          </div>
          <div className='details-img-section'>
            <Image src={details?.backgroundImage} fluid className='details-img'/>
          </div>
        </div>
        <p>{JSON.stringify(details)}</p>
        <Footer/>  
    </div>
  )
}

export default Details
