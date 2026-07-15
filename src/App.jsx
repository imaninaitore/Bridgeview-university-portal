import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import StudyLevel from './pages/StudyLevel'
import RegisterUndergraduate from './pages/RegisterUndergraduate'
import RegisterPostgraduate from './pages/RegisterPostgraduate'
import RegisterDoctrate from './pages/RegisterDoctrate'
import Login from './pages/Login'
import { Route,Routes } from 'react-router'
import MainLayout from './layout/MainLayout'

function App() {
  return (
    <>
    <Routes>
       <Route path="/home" element={
          <>
            <Navbar />
            <Header />
          </>
        }/>

        <Route element={<MainLayout/>}>
       <Route path="/StudyLevel" element={<StudyLevel />} /> 
       <Route path="/register-undergraduate" element={<RegisterUndergraduate/>} /> 
       <Route path="/register-postgraduate" element={<RegisterPostgraduate/>} /> 
       <Route path="/register-doctrate" element={<RegisterDoctrate/>} /> 
       <Route path="/login" element={<Login/>} /> 
        </Route>


    </Routes>
    </>


  )
}

export default App