import React from 'react'
import { Route, Routes } from 'react-router'
import Inicio from '../pages/Inicio';
import Series from '../pages/Series';
import Peliculas from '../pages/Peliculas';

const MyRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/series" element={<Series/>}/>
        <Route path="/peliculas" element={<Peliculas/>}/>
    </Routes>
  )
}

export default MyRoutes;