import React, { useState } from 'react'
import Footer from '../Components/Footer'
import Navbars from '../Components/Navbars'
import { Col, Row } from 'react-bootstrap'
import Bikes from '../Components/Bikes'


function Home() {
    const[bik,setbik]=useState([
        1,2,3,5,6,7,8,9,10
    ])
  return (
    <div >
    <Navbars/>
        
      <div className='d-flex justify-content-evenly ms-5 me-5' >
        <Row className='d-flex justify-content-center'>
          {bik.map((item)=>(
              <Col lg={4} xl={3} md={6} sm={12}>
              <Bikes/>
          </Col>
          ))}
        </Row>
      </div>

        <Footer/>
    </div>
  )
}

export default Home