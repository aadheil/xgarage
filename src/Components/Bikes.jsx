import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './navbar.css'
import { BASEURL } from '../services/baseUrl';

function Bikes({bikes}) {
    const[fulldetails,setfulldetail]=useState(false)
    console.log(bikes);
    
  return (
    <>
    
       {!fulldetails&& <Card className='cdim ms-3 shadow mt-4 bg-dark'>
        <Card.Img variant="top"  src={bikes.bikeimage?`${BASEURL}/uploads/${bikes.bikeimage}`:"https://bikeadvice.in/wp-content/uploads/2023/11/Royal-Enfield-Himalayan-452-Pic.jpg"} style={{height:'200px',width:'100%'}}/>
        <Card.Body>
          <Card.Title className='text-center  rounded fw-bolder' style={{backgroundColor:'#00848c'}}>{bikes.model} </Card.Title>
          <Card.Title className='text-center fw-bolder mt-4  rounded' style={{backgroundColor:'#00848c'}}>₹ {bikes.overview}</Card.Title>

          {/* <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text> */}
        </Card.Body>
        {/* <div className='d-flex flex-column'> */}
         <div className='d-flex justify-content-evenly' style={{color:'#00848c'}}>
           <Card.Title className='text-center rounded '>{bikes.year}</Card.Title>
           <Card.Title className='text-center rounded '>{bikes.km} km</Card.Title>

         {/* </div> */}
        </div>
        <Card.Body className='text-center'>
          <button className='btn btn-outline-info' onClick={e=>setfulldetail(true)} style={{borderRadius:'20%'}}>More Details</button>
          {/* <Card.Link href="#">Full Details</Card.Link> */}
        </Card.Body>
      </Card>}

       

       {fulldetails&&

       <>
        <Card style={{ width: '18rem' ,height:'450px'}}  className='ms-3 mt-4 shadow bg-dark text-light'>
        
        <Card.Body>
          <Card.Title>{bikes.model}</Card.Title>
        </Card.Body>
        <div className='d-flex flex-column'>
         <div className='d-flex justify-content-evenly text-center'>
           <p>manufacturor Name <span className='text-danger'>{bikes.manufactor}</span></p>
           <p>Seller Name <span className='text-danger'>{bikes.sname}</span></p>
         </div>
         <div className='d-flex justify-content-center mt-2'>
         <i className="fa-solid fa-location-dot me-1"></i><span className=''>{bikes.splace}</span>
         </div>
         <p className='text-center mt-4'>Contact Seller</p>
         <div className='d-flex justify-content-evenly text-center mt-2 mb-3'>
        <a href={`https://wa.me/91${bikes.smobile}`} target='_blank' className='btn btn-outline-success' >
        <i class="fa-brands fa-whatsapp fa-xl"></i>
        </a>
       <a href={`tel:+91${bikes.smobile}`} target='_blank' className='btn btn-outline-primary'>
       <i class="fa-solid fa-phone fa-xl"></i>
        </a>        </div>
        </div>
        <Card.Body className='text-center'>
          <button className='btn btn-outline-info' onClick={e=>setfulldetail(false)}  style={{borderRadius:'20%'}}>Close</button>
         
        </Card.Body>
      </Card>
       </>

       }
      
     
    
    </>
  )
}

export default Bikes