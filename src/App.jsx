import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/navBar/Navbar'

//Import pages
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Approved from './pages/Approved'



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
