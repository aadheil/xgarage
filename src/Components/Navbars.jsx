import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navbar.css'
function Navbars() {
    
  return (
    <Navbar expand="sm" className=" shadow mb-5" style={{backgroundColor:'#00848c',position:'fixed',zIndex:'1',width:'100%'}}>
      <Container>
        <Navbar.Brand href="/" className='fw-bolder me-5'>Xgarage</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home" className='nvbt shadow me-2 mt-3 text-center' style={{borderRadius:'20%',width:'100px'}}>Home</Nav.Link>
            <Nav.Link href="/login" className='nvbt shadow me-2 mt-3 text-center ' style={{borderRadius:'20%',width:'100px'}}>Login</Nav.Link>
            <Nav.Link href="/sellyourbike" className='nvbt shadow  me-2 mt-3 text-center  ' style={{borderRadius:'20%',width:'100px'}}>Start Selling</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" className='bg-success' style={{borderRadius:'10%',width:'100px'}}>Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navbars