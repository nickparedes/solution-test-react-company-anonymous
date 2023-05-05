import React, { useEffect, useState } from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';
import { helpHttp } from './helpers/helpHttp';
import ModalCart from './ModalCart';
import { Loader } from 'semantic-ui-react';
import {Filtros, Paginacion}from './Filtros';
import { redimensionarArreglo } from './helpers/residimensionarArreglo';

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
export default function GridMovies() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [twentyPeliculas, setTwentyPeliculas] = useState([]);
  const [filtros, setFiltros] = useState({
    initialNumOfMovies: 20,
    año: null,
    cardsForPage: 5,
    pagina: 0,
  });
  const [peliculas, setPeliculas] = useState([]);

  const cardsForPage = (e) => {
    setFiltros({
      ...filtros,
      cardsForPage: e,
      pagina: 0,
    });
  };

  const numOfPage = (e) => {
    setFiltros({
      ...filtros,
      pagina: e,
    });
  };

  const inputAnio = (e) => {
    setFiltros({
      ...filtros,
      año: e,
      initialNumOfMovies: peliculas.length , 
      pagina: 0,
    });

  };

  let api = helpHttp();
  let url =
    "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json";

  useEffect(() => {
    setLoading(true);

    api.get(url).then((res) => {
      const filteredMovies = res.entries.filter(
        (item) => item.programType === "movie"
      );
      const twentyFilteredMovies = filteredMovies
        .filter((item) => item.releaseYear >= 2010)
        .slice(0, 20)
        .sort((a, b) => {
          const titleA = a.title.toUpperCase();
          const titleB = b.title.toUpperCase();

          if (titleA < titleB) {
            return -1;
          }

          if (titleA > titleB) {
            return 1;
          }

          return 0;
        });
      setTwentyPeliculas(twentyFilteredMovies);
    });

    setLoading(false);
  }, [url]);

  useEffect(() => {
    const array = redimensionarArreglo(
      twentyPeliculas,
      filtros.cardsForPage,
      filtros.año
    );
    setPeliculas(array);
  }, [twentyPeliculas, filtros.cardsForPage, filtros.año]);

  
  
  
  return (
    <div>
       <Filtros cardsForPage={cardsForPage} inputAnio={inputAnio}/>
       {loading && <Loader />}
      {error && <Error/>}
      { peliculas.length > 0 && (  
                
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">Películas</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
           { peliculas[filtros.pagina].map((pelicula, index) => (
              <Card key={index} {...pelicula} />
              
            ))} 
          </div>
          <Paginacion filtros = {filtros} numOfPage = {numOfPage}/>
        </div>
         ) 
      
      } 
    </div>
  )
}


