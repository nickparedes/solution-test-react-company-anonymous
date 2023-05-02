import React, { useEffect, useState } from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';
import { helpHttp } from './helpers/helpHttp';
import ModalCart from './ModalCart';
import { Loader } from 'semantic-ui-react';
import Filtros from './Filtros';

export const obj = [
  {
    title: 'El Padrino',
    description:
      'El patriarca de una familia de la mafia traslada su imperio criminal de Nueva York a la década de 1950.',
    trailer: 'https://www.youtube.com/watch?v=sY1S34973zA',
    programType: 'movie',
    releaseYear: '2010',
    images: {
      'Poster Art' : { 
        url : 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/Godfather_ver1.jpg/220px-Godfather_ver1.jpg',
       }
    }
  },

];
export default function GridMovies({loading, error, peliculas, twentyPeliculas}) {
  
  

  return (
    <div>
       <Filtros/>
       {loading && <Loader />}
      {error && <Error/>}
      {peliculas || ( 
                
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">Películas</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {twentyPeliculas.map((pelicula, index) => (
              <Card key={index} {...pelicula} />
            ))}
          </div>
          <Paginacion/>
        </div>
        )
      
      } 
    </div>
  )
}


const Paginacion = ()=>{
  return(

    <div className="flex items-center justify-center space-x-4 py-4">
      <button className="bg-gray-200 hover:bg-gray-300 rounded-md px-3 py-2">Anterior</button>
      
      <div className="flex space-x-2">
      <button className="bg-gray-200 hover:bg-gray-300 rounded-md px-3 py-2">2</button>
      <button className="bg-gray-200 hover:bg-gray-300 rounded-md px-3 py-2">3</button>
      <button className="bg-gray-200 hover:bg-gray-300 rounded-md px-3 py-2">4</button>
      <button className="bg-gray-200 hover:bg-gray-300 rounded-md px-3 py-2">5</button>
      </div>
      
      <button className="bg-gray-200 hover:bg-gray-300 rounded-md px-3 py-2">Siguiente</button>
    </div>
  )
}