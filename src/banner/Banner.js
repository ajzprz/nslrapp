import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Container } from 'react-bootstrap';


const Banner = () => {
    return (
     <Container>
<Carousel className=" heightinc ">
  <Carousel.Item className ="height-100 fix">
    <img
      className="d-block w-100 fix"
      src="deaf-sign-language-welcome-line-260nw-1585429861.jpg"
      alt="First slide"
    />
    <Carousel.Caption className="dark">
      {/* <h3 className="dark">First slide label</h3>
      <p className="dark">Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img background-image=""
      className="d-block w-100 fix"
      src="AI_Object-Identification_Top-Banner.jpg"
      alt="Second slide"
    />

    <Carousel.Caption className="dark ">
      {/* <h3 className="dark">Second slide label</h3>
      <p className="dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 fix"
      src="1_F-1fq9TNjDnAYPAXnZP4Ww.png"
      alt="Third slide"
    />

    {/* <Carousel.Caption>
      <h3 className="dark">Third slide label</h3>
      <p className="dark">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
</Carousel>
</Container>
       
    )
}

export default Banner
