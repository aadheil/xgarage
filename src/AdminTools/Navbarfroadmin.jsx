import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../Components/navbar.css'
import { useNavigate } from 'react-router-dom';
function Navbarfroadmin() {
    const navigate=useNavigate()
  const handleLogout=()=>{
    navigate('/')
  }
    
  return (
    <Navbar expand="sm" className=" shadow mb-5" style={{backgroundColor:'#00848c',position:'',zIndex:'10',width:'100%'}}>
      <Container>
        <Navbar.Brand href="/" className='fw-bolder me-5'><img src="https://openclipart.org/image/2400px/svg_to_png/169874/1336282248.png" style={{height:'60px',width:'80px'}} alt="" className='me-2 ms-1'/>GarageX</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/admindashboard" className='nvbt shadow me-2 mt-3 text-center fw-bolder mb-3' style={{borderRadius:'20%',width:'100px'}}>Home</Nav.Link>
            <Nav.Link href='/viewusers' className='nvbt shadow  me-2 mt-3 text-center fw-bolder mb-3' style={{borderRadius:'20%',width:'100px'}} >Users</Nav.Link>
            <Nav.Link href='/managebikes' className='nvbt shadow  me-2 mt-3 text-center fw-bolder mb-3 ' style={{borderRadius:'20%',width:'100px'}}  >Bikes</Nav.Link>
                
              <Nav.Link className='nvbt shadow me-2 mt-3 text-center fw-bolder mb-3' style={{borderRadius:'20%',width:'100px'}} onClick={handleLogout}>Logout</Nav.Link>
            
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

export default Navbarfroadmin