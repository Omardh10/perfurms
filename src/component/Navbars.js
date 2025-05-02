import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import './Navbar.css'
const Navbars = () => {
  return (
    <div className='navbr'>
      <Navbar expand="lg">
  <Navbar.Brand href="#home"><strong style={{fontSize:"30px",fontStyle:"italic"}}>MOTHHELA</strong></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#perfume">Perfume</Nav.Link>
      <Nav.Link href="#makeup">Makeup</Nav.Link>
      <Nav.Link href="#services">Services</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
      {/* <Navbar bg='light' expand="lg">
  <Navbar.Brand href="#home">MOTHHELA</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#perfume">Perfume</Nav.Link>
      <Nav.Link href="#makeup">Makeup</Nav.Link>
      <Nav.Link href="#services">Services</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
    </Nav>
   
  </Navbar.Collapse>
</Navbar> */}
    </div>
  )
}

export default Navbars
