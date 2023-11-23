import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Auth({register}) {
  const registerForm = register ? true:false

  return (
    <div style={{width:'100%',height:'100vh'}} className='d-flex justify-content-center align-items-center'>
        <div className='container w-75'>
          <Link to={'/'} ><h5><i className='fa-solid fa-arrow-left'>  Back to Home</i></h5></Link>

          <div className="card shadow p-5 " style={{backgroundColor:'#00848c'}}>
            <div className="row align-items-center">
                <div className='col-lg-6'>
                    <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?w=740&t=st=1698328298~exp=1698328898~hmac=dbbe7d6c0a80c3f013cc2fb8c954faa90fa219cf1a7275003b0e8593b7121ab7" alt="" className='rounded-start w-100' />
                </div>
                <div className='col-lg-6'>
                    <div className="d-flex align-items-center flex-column">
                        <div className="d-flex mt-2 text-light">
                            <i className='fa-brands fa-stack-overflow fa-bounce fa-2x me-1'></i>
                            <span className='h1 fw-bolder mb-0'>Xgarage</span>
                        </div>
                       
                       <h5 className='fw-normal mt-4 pb-3 text-dark'>
                       { registerForm? 'Sign Up to Your Account' : 'Sign In  to Your Account'

                        }
                        </h5>
                        <Form className='text-light w-100'>
                       { registerForm &&
                       <Form.Group className="mb-3" controlId="formBasicUsername" >
                      
                       <Form.Control type="text" placeholder="Enter your name"/>
                       </Form.Group>}
                       <Form.Group className="mb-3" controlId="formBasicEmail">
                      
                       <Form.Control type="email" placeholder="Enter your Email" />
                       </Form.Group>

                       <Form.Group className="mb-3" controlId="formBasicpass">
                
                       <Form.Control type="password" placeholder="Enter Password" />
                       </Form.Group>
                      {
                        registerForm ?
                        <div><Button variant='danger' type='submit' size='lg' className='' >Register</Button>
                        <p className='mt-3 text-light'>Already have an account ? <Link className='btn-link text-dark' to={'/login'}>Login Here</Link></p>
                        </div>

                        :
                        <div><Button variant='danger' type='submit' size='lg'  className=''>Login</Button>
                        <p className='mt-3 text-light'>New User ? <Link className='btn-link text-dark' to={'/register'}>Register Here</Link></p>
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