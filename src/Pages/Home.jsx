import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer'
import Navbars from '../Components/Navbars'
import { Col, Row } from 'react-bootstrap'
import Bikes from '../Components/Bikes'
import Carousal from '../Components/Carousal'
import { Link } from 'react-router-dom'
import { getbikeAPI } from '../services/allApi'


function Home() {
    const[bik,setbik]=useState([])
    
    const getallbikesdetails = async()=>{
      const result=await getbikeAPI()
      if(result.status===200){
        setbik(result.data)
      }
     
    }
    useEffect(()=>{
    getallbikesdetails()
    },[])
  return (
    <div className='landimg' style={{backgroundColor:'#edebd9'}}>
    <Navbars/>
        
      <div className='d-flex justify-content-evenly ms-5 me-5 ' >
       
        <Row className='d-flex justify-content-center mt-5 '>
        <Carousal/>
        <Link to={'/xclan'} className='text-center' style={{textDecoration:'none'}}>View Gallery</Link>
        <h1  className='text-center text-light fw-bolder mt-5'>Our Latest Collections</h1>
        {bik.length<1&&
          <div className=''> <h1  className='text-center text-light fw-bolder mt-5'>LOADING....</h1></div>}
       
          {bik.map((item)=>(
              <Col lg={4} xl={3} md={6} sm={12}>
              <Bikes bikes={item}/>
          </Col>
          ))}
        
        </Row>
      </div>

        <Footer/>
    </div>
  )
}

export default Home