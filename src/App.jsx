import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import StudyLevel from './pages/StudyLevel'
import { Route,Routes } from 'react-router'

function App() {
  return (
    <>
    <Navbar/>
    <Header/>

    <Routes>
       <Route path="/StudyLevel" element={<StudyLevel />} />

    </Routes>
    </>


  )
}

export default App