import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import StudyLevel from './pages/StudyLevel'
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
        </Route>


    </Routes>
    </>


  )
}

export default App