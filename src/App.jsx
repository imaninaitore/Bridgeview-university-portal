import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import StudyLevel from './pages/StudyLevel'
import RegisterUndergraduate from './pages/Register'
import { Route,Routes } from 'react-router'
import MainLayout from './layout/MainLayout'

function App() {
  return (
    <>
    <Routes>
       <Route path="/" element={
          <>
            <Navbar />
            <Header />
          </>
        }/>

        <Route element={<MainLayout/>}>
       <Route path="/StudyLevel" element={<StudyLevel />} /> 
       <Route path="/register-undergraduate" element={<RegisterUndergraduate/>} /> 
        </Route>


    </Routes>
    </>


  )
}

export default App