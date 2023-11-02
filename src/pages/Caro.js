import React from 'react';
import Carousel from 'react-grid-carousel';
import { Link } from 'react-router-dom';
import './Caro.css'; // Import a CSS file for styling

const Caro = () => {
  return (
    <div className="carousel-container">
      <Carousel cols={4} rows={1} gap={10} loop={true}>
        <Link to="/">
          <Carousel.Item>
            <img width="100%" src="https://picsum.photos/800/600?random=2" />
          </Carousel.Item>
        </Link>
        <Carousel.Item>
          <img width="100%" src="https://picsum.photos/800/600?random=3" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src="https://picsum.photos/800/600?random=3" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src="https://picsum.photos/800/600?random=3" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src="https://picsum.photos/800/600?random=3" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src="https://picsum.photos/800/600?random=3" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src="https://picsum.photos/800/600?random=3" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src="https://picsum.photos/800/600?random=3" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src="https://picsum.photos/800/600?random=3" />
        </Carousel.Item>
       
      </Carousel>
    </div>
  );
};

export default Caro;
