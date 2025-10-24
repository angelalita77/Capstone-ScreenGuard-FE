import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/navBar/Navbar'

//Import pages
import Home from './pages/HomePage/Home'
import About from './pages/AboutPage/About'
import Dashboard from './pages/DashboardPage/Dashboard'
import Approved from './pages/ApprovedPage/Approved'



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

        </Routes>
      </main>

    </>
  )
}

export default App
