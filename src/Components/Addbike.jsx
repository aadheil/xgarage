import React from 'react'
import Navbars from './Navbars'
import { Link } from 'react-router-dom'
import './auth.css'

function Addbike() {
  return (

   <>
   <Navbars/>
     <div className='bgforaddbike d-flex justify-content-center align-items-center w-100 ' style={{height:'100vh'}}>
    
         <div className='forblur flex-column align-items-center border rounded mt-5' style={{height:'600px',width:'700px'}}>
            <div className='mb-2'>
             <h2 className='text-center mt-1 '>Add your bike details</h2>
            </div>
             <div className='d-flex justify-content-center  mt-4'>
                 <input type="text" className='form-control w-50' placeholder='Manufacturer Name'/>
             </div>
             <div className='d-flex justify-content-center mt-3'>
                 <input type="text" className='form-control w-50' placeholder='Model Name'/>
             </div>
             <div className='d-flex justify-content-center mt-3'>
                 <input type="text" className='form-control w-50' placeholder='Purchased Year'/>
             </div>
             <div className='d-flex justify-content-center mt-3'>
                 <input type="text" className='form-control w-50' placeholder='Km Driven'/>
             </div>
             <div className='d-flex justify-content-center mt-3'>
                 <input type="text" className='form-control w-50' placeholder='Description'/>
             </div>
             <div className='d-flex justify-content-center mt-3'>
                 <input type="text" className='form-control w-50' placeholder='Your Name'/>
             </div>
             <div className='d-flex justify-content-center mt-3'>
                 <input type="text" className='form-control w-50' placeholder='Your Mobile Number'/>
             </div>
             <div className='d-flex justify-content-center mt-3'>
                 <input type="text" className='form-control w-50' placeholder='Yoru Place'/>
             </div>
             <div className='d-flex justify-content-center mt-3'>
                 <input type="file" className='form-control w-50' placeholder='Upload Bike Image'/>
             </div>
             <div className='d-flex justify-content-center mt-3'>
             <button className='btn btn-outline-info me-5'>Add</button>
             <Link to={'/home'}>
                <button className='btn btn-outline-info' >Close</button>
             </Link>
    
             </div>
         </div>
    
         
    
     </div>
   </>
  )
}

export default Addbike