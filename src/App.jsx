import { Link, Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [where, setWhere] = useState("");

  return (
    <>
      <Routes>

        <Route path="*" element={
          <>
            {/* TOPNAV */}
            <div className='topnav'>
              <div className='header'>
                <img src='./visilogo.svg' />
              </div>
              <div className='links'>
                <Link to="/home">Home</Link>
                <Link to="/paselista">Pase de lista</Link>
                <Link to="/login">Logout</Link>
              </div>
              
            </div>


            {/* APP */}
            <div className="App">
              <Routes>
                <Route path="/" element={where} />
                <Route path="home" element={"placeholder"} />
                <Route path="/paselista" element={"placeholder"} />
                <Route path='/login' element={<Login />} />
              </Routes>
            </div>
          </>
        } />
          
      </Routes>
    </>
  )
}

export default App
