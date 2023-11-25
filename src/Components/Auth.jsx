import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { loginAPI, registerAPI } from '../services/allApi'
import './auth.css'
function Auth({register}) {
  const registerForm = register ? true:false
  const [userData,setUserData]=useState({
    username:"",mobile:"",email:"",password:""
  })
  // console.log(userData);
  const navigate=useNavigate()

  const handleRegister = async(e)=>{
    e.preventDefault()
    const{username,mobile,email,password}=userData
    if(!username || !mobile || !email || !password){
        alert("Please fill the form completely")
    }
   
    else{
      // api call
      const res = await registerAPI(userData)
      if(res.status===200){
        alert(`User ${res.data.username} has successfully registered`)
        // reset state
        setUserData({
          username:"",mobile:"",email:"",password:""
        })
        navigate('/login')
      }
      else{
        alert(res.response.data)
      }
    }
  
  }


  const handleLogin=async(e)=>{
    e.preventDefault()
    var user={email:userData.email,password:userData.password}
   const res = await loginAPI(user)
    if(res.status===200){
      navigate('/home')
      console.log(res.data);
      sessionStorage.setItem("email",res.data.email)
    }
    else{
      alert(res.response.data)

    }

  }
  return (
    <div style={{width:'100%',height:'100vh'}} className='bgforauth d-flex justify-content-center align-items-center'>
        <div className='container w-75'>
          <Link to={'/'} ><h5><i className='fa-solid fa-arrow-left'>  Back to Home</i></h5></Link>

          <div className="forblur card shadow p-5 bg-transparent border" >
            <div className="row align-items-center">
                <div className='col-lg-6'>
                    <img src="https://www.pngall.com/wp-content/uploads/13/Motocross-Dirt-Bike-PNG-Images.png" alt=""  className='rounded-start w-100' />
                </div>
                <div className='col-lg-6'>
                    <div className="d-flex align-items-center flex-column">
                        <div className="d-flex mt-2 text-light">
                            <i className='fa-brands fa-stack-overflow fa-bounce fa-2x me-1'></i>
                            <span className='h1 fw-bolder mb-0 text-light'>GarageX</span>
                        </div>
                       
                       <h5 className='fw-normal mt-4 pb-3 text-light'>
                       { registerForm? 'Sign Up to Your Account' : 'Sign In  to Your Account'

                        }
                        </h5>
                        <Form className='text-light w-100'>
                       { registerForm &&
                       <>
                        <Form.Group className="mb-3" controlId="formBasicUsername" >
                        
                        <Form.Control type="text" placeholder="Enter your name" value={userData.username} onChange={e=>setUserData({...userData,username:e.target.value})}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicmob" >
                        
                        <Form.Control type="text" placeholder="Enter your mobile number" value={userData.mobile} onChange={e=>setUserData({...userData,mobile:e.target.value})}/>
                        </Form.Group>
                       </>
                       }
                       <Form.Group className="mb-3" controlId="formBasicEmail">
                      
                       <Form.Control type="email" placeholder="Enter your Email" value={userData.email} onChange={e=>setUserData({...userData,email:e.target.value})} />
                       </Form.Group>

                       <Form.Group className="mb-3" controlId="formBasicpass">
                
                       <Form.Control type="password" placeholder="Enter Password" value={userData.password} onChange={e=>setUserData({...userData,password:e.target.value})} />
                       </Form.Group>
                      {
                        registerForm ?
                        <div><Button variant='outline-primary' type='submit' style={{width:'100%'}} size='lg' className='' onClick={handleRegister}>Register</Button>
                        <p className='mt-3 text-light'>Already have an account ? <Link className='btn-link text-info' to={'/login'}>Login Here</Link></p>
                        </div>

                        :
                        <div><Button variant='outline-primary' type='submit' size='lg' style={{width:'100%'}} className='' onClick={handleLogin}>Login</Button>
                        <p className='mt-3 text-light'>New User ? <Link className='btn-link text-info' to={'/register'}>Register Here</Link></p>
                        </div>
                      }
                        </Form>
                        
                    </div>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Auth