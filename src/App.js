import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Auth from './Components/Auth'
import AdminDashboard from './Pages/AdminDashboard'
import Footer from './Components/Footer'
import Landing from './Pages/Landing'
import Addbike from './Components/Addbike'

function App() {
  return (
    
      <Routes>
       <Route path='/' element={<Landing/>}/>
       <Route path='/home' element={<Home/>}/>
      <Route path='/login' element={<Auth/>}/>
      <Route path='/register' element={<Auth register />}/>
      <Route path='/admindashboard' element={<AdminDashboard/>}/>
      <Route path='/sellyourbike' element={<Addbike/>}/>

      {/* <Route path='/projects' element={<Projects/>}/> */}
      
      </Routes>
      
   
    
  )
}

export default App