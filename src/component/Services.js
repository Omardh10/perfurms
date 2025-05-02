import React from 'react'
import { Alert, Carousel} from 'react-bootstrap'
import './Services.css'
import logo1 from '../Photoes/13.jpg'
import logo2 from '../Photoes/14.jpg'
import logo3 from '../Photoes/20.jpg'
import logo4 from '../Photoes/22.jpg'
import logo5 from '../Photoes/23.jpg'
import logo6 from '../Photoes/24.jpg'
import logo7 from '../Photoes/25.jpg'
import Contact from './Contact'
const Services = (props) => {
  return (
    <>
    <div className='services container' id='services'>
      <Carousel>
        <Carousel.Item>
      
           <img
            className="d-block w-100"
            src={logo1}
            alt="Second slide"
          /> 
          <Carousel.Caption>
            <h3>This is Us Services</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
           <img
            className="d-block w-100"
            src={logo2}
            alt="Second slide"
          /> 
          <Carousel.Caption>
            <h3>This is Us Services</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
    
           <img
            className="d-block w-100"
            src={logo3}
            alt="Second slide"
          /> 
          <Carousel.Caption>
            <h3>This is Us Services</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
    
          <img
            className="d-block w-100"
            src={logo4}
            alt="Second slide"
          /> 
          <Carousel.Caption>
            <h3>This is Us Services</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
      
          <img
            className="d-block w-100"
            src={logo5}
            alt="Second slide"
          /> 
          <Carousel.Caption>
            <h3>This is Us Services</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
    
          <img
            className="d-block w-100"
            src={logo6}
            alt="Second slide"
          /> 
          <Carousel.Caption>
            <h3>This is Us Services</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
     
          <img
            className="d-block w-100"
            src={logo7}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>This is Us Services</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* <Container>
  <Row>
    <Col xs={6} md={4}>
      <Image src="holder.js/171x180" rounded />
    </Col>
    <Col xs={6} md={4}>
      <Image src="holder.js/171x180" roundedCircle />
    </Col>
    <Col xs={6} md={4}>
      <Image src="holder.js/171x180" thumbnail />
    </Col>
  </Row>
</Container> */}

<Alert variant="danger">
  <Alert.Heading>Hey, nice to see you</Alert.Heading>
  <p>
    Aww yeah, you successfully read this important alert message. This example
    text is going to run a bit longer so that you can see how spacing within an
    alert works with this kind of content.
  </p>
  <hr />
  <p className="mb-0">
    Whenever you need to, be sure to use margin utilities to keep things nice
    and tidy.
  </p>
</Alert>
    </div>
    <Contact/>
    </>
  )
}

export default Services
