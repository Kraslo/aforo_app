import { Link, Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import Login from './components/authentication/Login';
import ProtectedRoute from './components/routes/ProtectedRoute';
import PaseLista from './routes/PaseLista';


function App() {
  const [count, setCount] = useState(0);
  const [where, setWhere] = useState("/home");

  return (
    <>
    {console.log('this is a test')}
      <Routes>

        <Route path="*" element={
          <>
            {/* TOPNAV */}
            <div className='topnav'>
              <div className='header'>
                <img src='./visilogo2.svg' />
                <h2>Pase Lista App</h2>
              </div>
              <div className='links'>
                <Link to="/home">Home</Link>
                <Link to="/paselista">Pase de lista</Link>
                <Link to="/login">Logout</Link>
              </div>
              
            </div>


            {/* APP */}
            <div className="App">
              eeeeeeeeeeeeeeeee
              <Routes>
                <Route path="/" element={where} />
                <Route path="home" element={"placeholder"} />
                <Route path="/paselista" element={<ProtectedRoute><PaseLista /></ProtectedRoute>} />
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
