import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div className="container-fluid rounded " style={{width:'100%',height:'100vh',backgroundColor:'#00848c'}}>
       
    <Row className='align-items-center p-5'>
        <Col sm={12} md={6}>
            <h1 style={{fontSize:"55px"}} className='text-dark'><i className='fa-brands fa-stack-overfloe fa-bounce'></i>X-GARAGE</h1>
            <p className='text-light'>
                One stop destination for all used bikes. Just one click away to buy your dream bike. Also you can sell your bike for great value.
                </p>

            
              <Link to={'/home'} className='btn btn-warning'>View latest collections <i className='fa-solid fa-right-long fa-beat ms-2'></i></Link>
              

            

        </Col>
        <Col sm={12} md={6}>
        <img src="https://www.pinclipart.com/picdir/big/17-171986_cartoon-motorbike-clipart.png" alt="" style={{marginTop:'100px'}} className='img-fluid w-75' />
        </Col>
    </Row>


    </div>
  )
}

export default Landing