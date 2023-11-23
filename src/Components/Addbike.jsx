import React from 'react'
import Navbars from './Navbars'
import { Link } from 'react-router-dom'

function Addbike() {
  return (

   <>
   <Navbars/>
     <div className='d-flex justify-content-center align-items-center w-100' style={{height:'100vh',backgroundColor:'#edebd9'}}>
    
         <div className='flex-column align-items-center' style={{height:'500px',width:'700px',backgroundColor:'#00848c'}}>
            <div className='mb-5'>
             <h2 className='text-center mt-4 '>Add your bike details</h2>
            </div>
             <div className='d-flex justify-content-center  mt-5'>
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
                 <input type="text" className='form-control w-50' placeholder='Yoru Place'/>
             </div>
             <div className='d-flex justify-content-center mt-3'>
             <button className='btn btn-warning me-5'>Add</button>
             <Link to={'/home'}>
                <button className='btn btn-warning' >Close</button>
             </Link>
    
             </div>
         </div>
    
         
    
     </div>
   </>
  )
}

export default Addbike