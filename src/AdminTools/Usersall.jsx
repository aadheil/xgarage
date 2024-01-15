import React, { useEffect, useState } from 'react'
import Navbarfroadmin from './Navbarfroadmin'
import { deleteuser, edituser, getusers } from '../services/allApi'

function Usersall() {
  const[allusers,setallusers]=useState([])
  const [delresponse,setdelresponse]=useState(1)
  // const [userData,setUserData]=useState({
  //   username:"",mobile:"",email:"",password:"",access:""
  // })
  const getusersdetails = async()=>{
     const result = await getusers()
    //  console.log(result.data);
     setallusers(result.data)
     
  }
  // console.log(allusers);

  const handledeleteuser = async(e)=>{
    // console.log(e);
    console.log(e._id);
    const reqBody = e._id
    const res = await deleteuser(reqBody)
    if(res.status==200){
      setdelresponse(delresponse+1)
    }
    else{
      alert("Action Failed!!! Please try after some time")
    }
    
  }

  const handleapprove=async(e)=>{
    // console.log(e.access);
    // console.log(e);
    var userData=({
      username:e.username,mobile:e.mobile,email:e.email,password:e.password,access:"approved"
    })
    const id=e._id
    if(userData.username&&userData.mobile&&userData.email&&userData.password){
    const res = await edituser(id,userData)}
    // console.log(userData);
  }

  useEffect(()=>{
    getusersdetails()
  },[delresponse])
  return (
    <>
    <Navbarfroadmin/>
  <div className='d-flex justify-content-center'>
     <table className='table text-center m-5 p-5 border shadow '>
      <thead>
        <tr>
          <th>Name</th>
          <th>Mobile</th>
          <th>Email</th>
          <th>Access</th>
          <th>Action</th>
        </tr>
      </thead>
     <tbody className=''>
       {
        allusers.length>0?allusers.map((users)=>(
          <tr className=''>
         <td>{users.username}</td>
         <td>{users.mobile}</td>
         <td>{users.email}</td>
         <td>{users.access}</td>
         <td className='d-flex justify-content-center'>
          {users.access=="pending"&&<button className='btn btn-outline-success' onClick={e=>handleapprove(users)}>Approve</button>}
         <button className='btn btn-outline-danger ms-2' onClick={e=>handledeleteuser(users)}>Block User</button>
         </td>
       </tr>
        )): <h3 className='text-danger text-center'>No Users</h3>
       }
     </tbody>
     </table>
  </div>
    </>
  )
}

export default Usersall