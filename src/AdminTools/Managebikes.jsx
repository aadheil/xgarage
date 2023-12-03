import React, { useEffect, useState } from 'react'
import Navbarfroadmin from './Navbarfroadmin'
import { deletebike, getbikesforadmin } from '../services/allApi'
import { BASEURL } from '../services/baseUrl'

function Managebikes() {
  const [allbikes,setallbikes]=useState([])
  const[deleteresponse,setresponse]=useState(1)
  const getbikes = async()=>{
    const result=await getbikesforadmin()
    console.log(result);
    setallbikes(result.data)
   
  }

  const handlebikedelete =async(e)=>{
    const reqBody=e._id
    const result=await deletebike(reqBody)
    if(result.status==200){
      setresponse(deleteresponse+1)
    }
    else{
      alert("Action Failed !!! Please Try After Some Time...")
    }
  }

  useEffect(()=>{
     getbikes()
  },[deleteresponse])
  return (
    <>
    <Navbarfroadmin/>
   
  <div className='d-flex justify-content-center'>
     <table className='table text-center m-5 p-5 border shadow '>
      <thead>
        <tr>
          <th>Bike Name</th>
          <th>Price</th>
          <th>Photo</th>
          <th>Seller Name</th>
          <th>Seller Mobile</th>
          <th>Action</th>
        </tr>
      </thead>
     <tbody className=''>
       {
        allbikes.length>0?allbikes.map((bikes)=>(
          <tr className=''>
         <td>{bikes.model}</td>
         <td>{bikes.overview}</td>
         <td><img src={bikes.bikeimage?`${BASEURL}/uploads/${bikes.bikeimage}`:"https://bikeadvice.in/wp-content/uploads/2023/11/Royal-Enfield-Himalayan-452-Pic.jpg"} style={{height:'80px',width:'100px'}} alt="No Image" /></td>
         <td>{bikes.sname}</td>
         <td>{bikes.smobile}</td>
         <td><button className='btn btn-outline-dark' onClick={e=>handlebikedelete(bikes)} ><i className='fa-solid fa-trash'></i></button></td>
       </tr>
        )): <h3 className='text-danger text-center'>No Bikes</h3>
       }
     </tbody>
     </table>
  </div>
    </>
    
  )
}

export default Managebikes