import React, {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';

const Hero = () => {
  const [myData, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/movies')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
      <Carousel data-bs-theme="dark" style={{color: 'blue', fontSize: 30, width:'100%'}}>
      <Carousel.Item>
        {/* <img src="/img\posters\movie\exploreTheUniverse.webp" alt="asdadsa"/> */}
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>

  )
}

export default Hero
