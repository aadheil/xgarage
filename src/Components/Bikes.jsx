import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './navbar.css'

function Bikes() {
    const[fulldetails,setfulldetail]=useState(false)
  return (
    <>
    
       {!fulldetails&& <Card style={{ width: '18rem' ,height:'450px',backgroundColor:'#edebd9'}} className='ms-3 shadow mt-4'>
        <Card.Img variant="top" src="https://imgd.aeplcdn.com/1280x720/bw/ec/42051/Hero-Xpulse-200-Action-169057.jpg?wm=2&q=75" style={{height:'200px',width:'100%'}}/>
        <Card.Body>
          <Card.Title className='text-center fw-bolder'>Xpulse 200 4v</Card.Title>
          {/* <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text> */}
        </Card.Body>
        <div className='d-flex flex-column'>
         <div className='d-flex justify-content-evenly'>
           <p>Year: <span className='text-danger'>2022</span></p>
           <p>Km Driven: <span className='text-danger'>1500</span></p>
         </div>

        

        </div>
        <Card.Body className='text-center'>
          <button className='nvb btn' onClick={e=>setfulldetail(true)} style={{borderRadius:'20%'}}>More Details</button>
          {/* <Card.Link href="#">Full Details</Card.Link> */}
        </Card.Body>
      </Card>}

       

       {fulldetails&&

       <>
        <Card style={{ width: '18rem' ,height:'450px',backgroundColor:'#edebd9'}}  className='ms-3 mt-4 shadow'>
        
        <Card.Body>
          <Card.Title>Model name</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <div className='d-flex flex-column'>
         <div className='d-flex justify-content-evenly text-center'>
           <p>Manufacorer Name <span className='text-danger'>Hero</span></p>
           <p>Seller Name <span className='text-danger'>John</span></p>
         </div>
         <p className='text-center mt-4'>Contact Seller</p>
         <div className='d-flex justify-content-evenly text-center mt-3 mb-5'>
        <a href='https://wa.me/919946241459' target='_blank' className='btn btn-outline-success' >
        <i class="fa-brands fa-whatsapp fa-xl"></i>
        </a>
       <a href='tel:+919946241459' target='_blank' className='btn btn-outline-primary'>
       <i class="fa-solid fa-phone fa-xl"></i>
        </a>        </div>
        </div>
        <Card.Body className='text-center'>
          <button className='nvb btn' onClick={e=>setfulldetail(false)}  style={{borderRadius:'20%'}}>Close</button>
         
        </Card.Body>
      </Card>
       </>

       }
      
     
    
    </>
  )
}

export default Bikes