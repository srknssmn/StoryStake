import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './pages/Home';
import WrongPath from './pages/WrongPath';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path='*' element={<WrongPath></WrongPath>} ></Route>
      </Routes>
      <ToastContainer/>
      {/* <Footer /> */}
    </>
  )
}

export default App
