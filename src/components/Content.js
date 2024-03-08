import React from 'react'
import Image from 'react-bootstrap/Image';
import '../styles/components/Content.css';
import postcard from '../img/upcoming/postcard.jpg';
import paledoor from '../img/upcoming/paledoor.jpg';
import missFischer from '../img/upcoming/missFischer.jpg';
import bonetomahawk from '../img/upcoming/bonetomahawk.jpg';
import mandy from '../img/upcoming/mandy.jpg';
import colorOutOfSpace from '../img/upcoming/coloroutofspace.jpg';
import Container from 'react-bootstrap/Container';


const Content = () => {
  const staticPosterData = [
    postcard, paledoor, missFischer, bonetomahawk, mandy
  ]
  return (
    <div className="universal_container_content">
      <div className="ad_content_container">
          <div className="content-text-highlight">
            <p className='content-text-highlight-style-1'>NEW</p>
            <p className='content-text-highlight-style-2'>UPCOMING</p>
            <p className='content-text-highlight-style-3'>RELEASES</p>
          </div>
          <div className="content-image-highlights">
            {
              staticPosterData.map((el, index)=>{
                return <div key={JSON.stringify(el)+index} className="ad-content-image-wrapper">
                  <Container fluid  className="ad-content-image-container">
                   <Image src={el} className="ad-content-image-img" />
                  </Container>
                </div>
              })
            }
          </div>
          <div className="content-ender">
            <p className='content-text-highlight-style-4'>COMING</p>
            <p className='content-text-highlight-style-4'>THIS</p>
            <p className='content-text-highlight-style-4'>2024</p>
          </div>
      </div>
    </div>
  )
}

export default Content
