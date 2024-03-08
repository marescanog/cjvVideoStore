import React, {useState, useEffect} from 'react';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { Rating } from 'react-simple-star-rating'
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2';
import { useCookies } from 'react-cookie';
import '../styles/Details.css';

const Details = () => {
  const [details, setDetails] = useState({})
  let { id, type } = useParams();
  const [cookies] = useCookies(['jwt','id']);

  useEffect(()=>{
    fetch(`http://localhost:8000/${type}?id=${id}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setDetails(data[0]);
    });

  },[]);

  const openTrailerModal = (url) => {
    Swal.fire({
      title: "<strong>YouTube Trailer</u></strong>",
      background: 'rgb(0,116,185)',
      color: 'white',
      confirmButtonColor: '#041c2c',
      html: `
        <iframe width="420" height="315"
        src=${url}>
        </iframe>
      `
    });
  }

  const verifyIfUserLoggedIn = () => {
    return new Promise((res)=>{
      res(cookies.hasOwnProperty('jwt') && cookies['jwt'] != null);
    })
  }

  const addToWatchList = ({id, type}) => {
    verifyIfUserLoggedIn()
    .then(res=>{
      if(res == true){

      } else {
        Swal.fire({
          icon: "info",
          title: "Please Login",
          text: "Please login to your account to add to your list.",
          footer: '<a href="/login" style="color:blue">Sign in to your account</a>'
        });
      }
    });
  }

  const redeemItem = ({id, type}) => {
    verifyIfUserLoggedIn()
    .then(res=>{
      if(res == true){

      } else {
        Swal.fire({
          icon: "info",
          title: "Please Login",
          text: "Please login to your account to add to your list.",
          footer: '<a href="/login" style="color:blue">Sign in to your account</a>'
        });
      }
    });
  }

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
                <h2>{details?.title}</h2>

                <div className='genre-rating-section'>
                  {
                    details?.genre && details?.genre.length > 0 ? (
                      details?.genre.map((el,index, arr)=>{
                        return <p key={`${index}${JSON.stringify(el)}`} className="genre-text-style">{el} {index!=arr.length-1?"|":""}</p>
                      })
                    )
                    : <></>
                  }
                  <p className="genre-text-style">| {details?.releaseYear}</p>

                  <div className="mrating-box-style">
                    <p className="mrating-text-style">{details?.MPARating}</p>
                  </div>
                  { details?.Length && 
                    <div className="mrating-box-style">
                      <p className="mrating-text-style">{`${details?.Length} min`}</p>
                    </div>
                  }
                  { details?.numOfSeasons && 
                    <div className="mrating-box-style">
                      <p className="mrating-text-style">S1-S{details?.numOfSeasons}</p>
                    </div>
                  }
                  { details?.numOfTotalEpisodes && 
                    <div className="mrating-box-style">
                      <p className="mrating-text-style">Ep1-Ep{details?.numOfTotalEpisodes}</p>
                    </div>
                  }
                </div>

                <div className='rating-section'>
                  <div className='rating-component-container'>
                    <Rating onClick={()=>{}}
                      initialValue={Math.floor((details?.rating)/2??0)}
                      iconsCount={5}
                      disableFillHover={true}
                      SVGclassName={'rating-svg'}
                    />
                  </div>
                  <div className='rating-text-container'><p className='rating-text-style'>({details?.totalRatings})</p></div>

                </div>

                <div className='buttons-section'>
                  <Button variant="outline-info" className='details-buttons-info'
                  onClick={()=>{
                    openTrailerModal(details?.TrailerUrl);
                  }}>Trailer</Button>
                  <Button variant="outline-info" className='details-buttons-info mr-3 ml-3'
                  onClick={()=>{
                    addToWatchList({id: details?.id, type:type});
                  }}>List</Button>
                  <Button variant="outline-info" className='details-buttons-info' onClick={()=>{
                    redeemItem({id: details?.id, type:type});
                  }}>Redeem</Button>
                </div>

                <div className='details_desc_container'>
                  <p className='details_desc'>
                    {JSON.stringify(details?.description)}
                  </p>
                </div>
                

                <div className='details-rent-buy-section'>
                  <Button variant="info" className='details-rentBuy-button'>Rent       {JSON.stringify(details?.rentPrice)}</Button>
                  <Button variant="info" className='details-rentBuy-button' >Buy       {JSON.stringify(details?.buyPrice)}</Button>
                </div>
              </div>
            </div>
          </div>
          <div className='details-img-section'>
            <Image src={details?.backgroundImage} fluid className='details-img'/>
          </div>
        </div>
        {/* <p>{JSON.stringify(details)}</p> */}
        <Footer/>  
    </div>
  )
}

export default Details
