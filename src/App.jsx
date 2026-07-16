import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Faculties from './components/Facaulties'
import Footer from './components/Footer'
import StudyLevel from './pages/StudyLevel'
import RegisterUndergraduate from './pages/RegisterUndergraduate'
import RegisterPostgraduate from './pages/RegisterPostgraduate'
import RegisterDoctrate from './pages/RegisterDoctrate'
import Login from './pages/Login'
import { useAuth } from "@/context/AuthContext";
import { Navigate } from 'react-router'
import { Route,Routes } from 'react-router'
import MainLayout from './layout/MainLayout'

function App() {
  const {isAdmin} = useAuth();
  return (
    <>
    <Routes>
       <Route path="/" element={
          <>
            <Navbar />
            <Header />
            <About />
            <Faculties/>
            <Footer />
          </>
        }/>

        <Route element={<MainLayout/>}>
       <Route path="/StudyLevel" element={<StudyLevel />} /> 
       <Route path="/register-undergraduate" element={<RegisterUndergraduate/>} /> 
       <Route path="/register-postgraduate" element={<RegisterPostgraduate/>} /> 
       <Route path="/register-doctrate" element={<RegisterDoctrate/>} /> 
       <Route path="/login" element={<Login/>} /> 
        </Route>

       <Route
    path="/admin"
    element={
        isAdmin
            ? <AdminDashboard />
            : <Navigate to="/" replace />
    }
    />
    </Routes>
    </>


  )
}

export default App