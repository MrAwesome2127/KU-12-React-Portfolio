import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './pages/Header'
import Footer from './pages/Footer'
import './index.css'
import './style/style.css';

 function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App