import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './landing.css'
import backimg from './landingback.jpg'
function Landing() {
  return (
    <div className="landimg container-fluid rounded " style={{width:'100%',height:'100vh',backgroundColor:'#00848c'}}>
       
    <Row className='align-items-center p-5'>
        <Col sm={12} md={6}>
            <h2 style={{fontSize:"55px",color:'#00848c'}} className='fw-bolder '>GARAGE-X</h2>
            <p className='text-light mt-5'>
                One stop destination for all used bikes. Just one click away to buy your dream bike. <br /> Also you can sell your bike  for great value.
                And welcome you to the bikers community . <br />View our community page for more details and news related to motorbikes.
                </p>

            
              <Link to={'/home'} className='btn mt-3' style={{backgroundColor:'#00848c'}}>View latest collections <i className='fa-solid fa-right-long fa-beat ms-2'></i></Link>

              

            

        </Col>
        <Col sm={12} md={6}>
        <img src="https://www.pinclipart.com/picdir/big/17-171986_cartoon-motorbike-clipart.png" alt="" style={{marginTop:'100px'}} className='img-fluid w-75' />
        </Col>
    </Row>


    </div>
  )
}

export default Landing