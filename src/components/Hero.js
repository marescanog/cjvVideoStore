import React, {useState, useEffect} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import '../styles/components/Hero.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
const Hero = ({list}) => {
  return (
    <div className='test'>
      <div className="hero_container bg-effect">
        {
          list && Array.isArray(list) && list.length > 0 ?
            <Carousel data-bs-theme="dark" className="carousel_style">
              {list.map((el)=>{
                return <Carousel.Item key={el.id}>
                <div className="carousel_image_container">
                  <Image src={el.backgroundImage} fluid className='carousel_image'/>
                </div>
                <Carousel.Caption className="carousel_caption_outer_container">
                  <div className="carousel_caption_container">
                    <h2 className="title_text_style">{el.title}</h2>
                    <p className="hide_small description_text_style">{el.description}</p>
                    <Button variant="primary" className='button_hero' as={Link} to={'/details/'+el.id}>WATCH NOW</Button>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              })}
            </Carousel>
          : 
          <div>
            <p>No Data</p>
          </div>
        }
      </div>
    </div>
  )
}

export default Hero
