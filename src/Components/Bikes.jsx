import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
function Bikes() {
    const[fulldetails,setfulldetail]=useState(false)
  return (
    <>
    
       {!fulldetails&& <Card style={{ width: '18rem' ,height:'500px'}} className='ms-3 mt-5 shadow'>
        <Card.Img variant="top" src="https://imgd.aeplcdn.com/1280x720/bw/ec/42051/Hero-Xpulse-200-Action-169057.jpg?wm=2&q=75" style={{height:'200px',width:'100%'}}/>
        <Card.Body>
          <Card.Title>Model Name</Card.Title>
          {/* <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text> */}
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>2022</ListGroup.Item>
          <ListGroup.Item>18000km</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <button className='btn btn-dark' onClick={e=>setfulldetail(true)}>More Details</button>
          {/* <Card.Link href="#">Full Details</Card.Link> */}
        </Card.Body>
      </Card>}

       

       {fulldetails&&

       <>
        <Card style={{ width: '18rem' ,height:'500px'}}  className='ms-3 mt-5 shadow'>
        
        <Card.Body>
          <Card.Title>Model Name</Card.Title>
          {/* <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text> */}
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>2022</ListGroup.Item>
          <ListGroup.Item>18000km</ListGroup.Item>
          <ListGroup.Item>contact</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <button className='btn btn-danger' onClick={e=>setfulldetail(false)}>Close</button>
         
        </Card.Body>
      </Card>
       </>

       }
      
     
    
    </>
  )
}

export default Bikes