import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Prueba from './components/prueba'
import { BrowserRouter } from 'react-router-dom'
import MyRoutes from './routers/routes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
      <BrowserRouter>
          <Navbar/>
          <MyRoutes/>
          <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
