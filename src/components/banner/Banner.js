import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import './Banner.css'; // Assuming you have a separate CSS file for styling

const Banner = () => {
  return (
    <Container>
      <Carousel className="heightinc">
        <Carousel.Item className="height-100 fix">
          <img
            className="d-block w-100 fix"
            src="deaf-sign-language-welcome-line-260nw-1585429861.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="dark">
            {/* Add caption content if needed */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 fix"
            src="AI_Object-Identification_Top-Banner.jpg"
            alt="Second slide"
          />
          <Carousel.Caption className="dark">
            {/* Add caption content if needed */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 fix"
            src="1_F-1fq9TNjDnAYPAXnZP4Ww.png"
            alt="Third slide"
          />
          <Carousel.Caption className="dark">
            {/* Add caption content if needed */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Banner;
