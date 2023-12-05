import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Calendar from 'react-calendar';
import { Link } from 'react-router-dom';
import { getbikesforadmin, getusers } from '../services/allApi';

function Admhome() {
  const [totalusers,settotalusers]=useState()
  const [totalbikes,settotalbikes]=useState()
  const [totalusersag,settotalusersag]=useState(0)
  const [totalbikesag,settotalbikesag]=useState(0)
  const [totalbikessold,settotalbikessold]=useState(0)
  const [happyusers,sethappyusers]=useState(0)
  const countofbikesandusers=async()=>{
    const result = await getusers()
    console.log(result.data.length);
    settotalusers(result.data.length)
    const result2 = await getbikesforadmin()
    settotalbikes(result2.data.length)
  }

  useEffect(()=>{
    countofbikesandusers()

  },[])

  
var i=300
var k=300
var s=75

  const myFunction = () => {
    if(totalusers==totalusersag){
      settotalusersag(totalusers)
      
    }
    else{
      settotalusersag(totalusersag+1)
    }
  };
 if(totalusers){
  setTimeout(myFunction, i );
 }



    const myFunctionforbike = () => {
      if(totalbikes==totalbikesag){
        settotalbikesag(totalbikes)
      }
      else{
        settotalbikesag(totalbikesag+1)
      }
    };
     if(totalbikes){
      setTimeout(myFunctionforbike, i );
     }

      const myFunctionforbikesold = () => {
        if(totalbikessold==45){
          settotalbikessold(45)
        }
        else{
          settotalbikessold(totalbikessold+1)
        }
      };
        setTimeout(myFunctionforbikesold, s );
  

        const myFunctionhappyusers = () => {
          if(happyusers==40){
            sethappyusers(40)
          }
          else{
            sethappyusers(happyusers+1)
          }
        };
          setTimeout(myFunctionhappyusers, s );
    
  

  return (
    <div className='container w-100 justify-content-center' style={{height:'100vh'}}>
      <Row className='justify-content-evenly d-flex ' style={{marginTop:'150px'}}>
        <Col className='d-flex mt-5  ' style={{width:'450px',height:'90px'}} xl={6} lg={6} sm={12} md={6}>
        <div className=' rounded-start' style={{width:'20px',height:'90px',backgroundColor:'#00848c'}}></div>
        <div className='bg-danger rounded-end justify-content-center align-items-center d-flex' style={{width:'430px',height:'90px'}}>
          {totalusers? <h3 className='text-light fw-bolder' style={{}}>Acitve Users : {totalusersag}</h3>:
          <h3 className='text-light fw-bolder' style={{}}>Loading....</h3>
          }</div>
        </Col>
        <Col className='d-flex  mt-5 ' style={{width:'450px',height:'90px'}} xl={6} lg={6} sm={12} md={6}>
        <div className=' rounded-start' style={{width:'20px',height:'90px',backgroundColor:'#00848c'}}></div>
        <div className='bg-danger rounded-end justify-content-center align-items-center d-flex' style={{width:'430px',height:'90px'}}>
           {totalbikes?<h3 className='text-light fw-bolder'>Total Bike Stocks : {totalbikesag}</h3>
                :     <h3 className='text-light fw-bolder' style={{}}>Loading....</h3>

          }
        </div>
        </Col>

      </Row>

      <Row className='justify-content-evenly d-flex '>
        <Col className='d-flex mt-5  ' style={{width:'450px',height:'90px'}} xl={6} lg={6} sm={12} md={6}>
        <div className=' rounded-start' style={{width:'20px',height:'90px',backgroundColor:'#00848c'}}></div>
        <div className='bg-danger rounded-end justify-content-center align-items-center d-flex flex- column' style={{width:'430px',height:'90px'}}>
           <h3 className='text-light fw-bolder' style={{}}>Happy Customers : {happyusers}</h3></div>
        </Col>
        <Col className='d-flex  mt-5 ' style={{width:'450px',height:'90px'}} xl={6} lg={6} sm={12} md={6}>
        <div className=' rounded-start' style={{width:'20px',height:'90px',backgroundColor:'#00848c'}}></div>
        <div className='bg-danger rounded-end justify-content-center align-items-center d-flex' style={{width:'430px',height:'90px'}}>
           <h3 className='text-light fw-bolder'>Bikes Sold : {totalbikessold}</h3>
        </div>
        </Col>

      </Row>
      
      
     
     
   </div>
  )
}

export default Admhome