import React, { useEffect, useState } from 'react'
import Navbars from './Navbars'
import { Link, useNavigate } from 'react-router-dom'
import './auth.css'
import { addBikeAPI } from '../services/allApi'

function Addbike() {
    const navigate=useNavigate()
    const [bikeDetails,setbikeDetails]=useState({
        manufactor:"",model:"",year:"",km:"",overview:"",sname:"",smobile:"",splace:"",bikeimage:"",userId:""
    })
    useEffect(()=>{
        
            setbikeDetails({...bikeDetails,userId:(sessionStorage.getItem("userId"))})
            // var idofuser= (sessionStorage.getItem("userId"))
            // setbikeDetails({...bikeDetails,userId:idofuser})
           
        
        
    },[])
    console.log(bikeDetails)

   const handleclose = ()=>{
   setbikeDetails({
        manufactor:"",model:"",year:"",km:"",overview:"",sname:"",smobile:"",splace:"",bikeimage:"",userId:""
    })
   }

   const handleadd = async(e)=>{
     e.preventDefault()
     const {manufactor,model,year,km,overview,sname,smobile,splace,bikeimage,userId}=bikeDetails
     if(!manufactor ||!model ||!year ||!km ||!overview ||!sname ||!smobile ||!splace ||!bikeimage ||!userId){
        alert("Please fill the form completely")
     }
     else{
        const reqBody = new FormData()
        reqBody.append("manufactor",manufactor)
        reqBody.append("model",model)
        reqBody.append("year",year)
        reqBody.append("km",km)
        reqBody.append("overview",overview)
        reqBody.append("sname",sname)
        reqBody.append("smobile",smobile)
        reqBody.append("splace",splace)
        reqBody.append("bikeimage",bikeimage)
        reqBody.append("userId",userId)

        const reqHeader = {
            "Content-Type":"multipart/form-data"
        }
        const res = await addBikeAPI(reqBody,reqHeader)
        console.log(res);
        if(res.status===200){
            alert("Your Bike Added Successfully")
            // reset state
            setbikeDetails({
                manufactor:"",model:"",year:"",km:"",overview:"",sname:"",smobile:"",splace:"",bikeimage:"",userId:""
            })            
            navigate('/home')
          }
          else{
            alert(res.response.data)
          }
     }
     
   }
  return (

   <>
   <Navbars/>
     <div className='bgforaddbike d-flex justify-content-center align-items-center w-100 ' style={{height:'100vh'}}>
    
         <div className='forblur flex-column align-items-center border rounded mt-5' style={{height:'600px',width:'700px'}}>
            <div className='mb-2'>
             <h2 className='text-center mt-1 text-info'>Add your bike details</h2>
            </div>
             <div className='d-flex justify-content-center  mt-4'>
                 <input type="text" className='form-control w-50' placeholder='Manufacturer Name' value={bikeDetails.manufactor} onChange={e=>setbikeDetails({...bikeDetails,manufactor:e.target.value})}/>
             </div>
             <div className='d-flex justify-content-center mt-3'>
                 <input type="text" className='form-control w-50' placeholder='Model Name' value={bikeDetails.model} onChange={e=>setbikeDetails({...bikeDetails,model:e.target.value})}/>
             </div>
             <div className='d-flex justify-content-center mt-3'>
                 <input type="text" className='form-control w-50' placeholder='Purchased Year' value={bikeDetails.year} onChange={e=>setbikeDetails({...bikeDetails,year:e.target.value})}/>
             </div>
             <div className='d-flex justify-content-center mt-3'>
                 <input type="text" className='form-control w-50' placeholder='Km Driven' value={bikeDetails.km} onChange={e=>setbikeDetails({...bikeDetails,km:e.target.value})}/>
             </div>
             <div className='d-flex justify-content-center mt-3'>
                 <input type="text" className='form-control w-50' placeholder='Expected Price' value={bikeDetails.overview} onChange={e=>setbikeDetails({...bikeDetails,overview:e.target.value})}/>
             </div>
             <div className='d-flex justify-content-center mt-3'>
                 <input type="text" className='form-control w-50' placeholder='Your Name' value={bikeDetails.sname} onChange={e=>setbikeDetails({...bikeDetails,sname:e.target.value})}/>
             </div>
             <div className='d-flex justify-content-center mt-3'>
                 <input type="text" className='form-control w-50' placeholder='Your Mobile Number' value={bikeDetails.smobile} onChange={e=>setbikeDetails({...bikeDetails,smobile:e.target.value})}/>
             </div>
             <div className='d-flex justify-content-center mt-3'>
                 <input type="text" className='form-control w-50' placeholder='Yoru Place' value={bikeDetails.splace} onChange={e=>setbikeDetails({...bikeDetails,splace:e.target.value})}/>
             </div>
             <div className='d-flex justify-content-center mt-3'>
                 <input type="file" onChange={e=>setbikeDetails({...bikeDetails,bikeimage:e.target.files[0]})} className='form-control w-50' placeholder='Upload Bike Image'/>
             </div>
             <div className='d-flex justify-content-center mt-3'>
             <button className='btn btn-outline-info me-5' onClick={handleadd}>Add</button>
             <Link to={'/home'}>
                <button className='btn btn-outline-info' onClick={handleclose} >Close</button>
             </Link>
    
             </div>
         </div>
    
         
    
     </div>
   </>
  )
}

export default Addbike