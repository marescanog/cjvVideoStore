import React, {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/components/Hero.css';

const Hero = ({list}) => {
  return (
    <>
    {
      list && Array.isArray(list) && list.length > 0 ?
        <Carousel data-bs-theme="dark" style={{color: 'blue', fontSize: 30, width:'100%'}}>
          {list.map((el)=>{
            return <Carousel.Item key={el.id}>
            <img src={el.posterImage} alt="asdadsa"/>
            <Carousel.Caption>
              <h3>{el.title}</h3>
              <p>{el.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
          })}
        </Carousel>
      : 
      <div>
        <p>No Data</p>
      </div>
    }
 
    </>
  )
}

export default Hero
