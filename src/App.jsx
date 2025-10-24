import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/navBar/Navbar'

//Import pages
import Home from './pages/HomePage/Home'
import About from './pages/AboutPage/About'
import Dashboard from './pages/DashboardPage/Dashboard'
import Approved from './pages/ApprovedPage/Approved'
import UpdateForm from './pages/UpdateFormPage/UpdateForm'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route element={<ProtectedRoutes />}> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/approved" element={<Approved />} />
          <Route path="/updateform/:_id" element={<UpdateForm />} /> //Pass the _id params as a Route parameter
        </Routes>
      </main>

    </>
  )
}


export default App
