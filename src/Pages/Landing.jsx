import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './landing.css'
function Landing() {
  return (
    <div className="landimg container-fluid rounded " style={{width:'100%',height:'100vh',backgroundColor:'#00848c',backgroundImage: `url("https://img.freepik.com/free-vector/aesthetic-arrow-background-black-gradient-technology-concept-vector_53876-143338.jpg?w=1060&t=st=1700927662~exp=1700928262~hmac=5188176c94a7bfec94bb24058c2331435c5a297387953ffa5f60d52d85ba4a06")`}}>
       
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