import React, { useEffect, useState } from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';
import { helpHttp } from './helpers/helpHttp';
import { Loader } from 'semantic-ui-react';
import Error from './Error';
import Modals from './utils/Modals';
import {Filtros, Paginacion} from './Filtros';
import { redimensionarArreglo } from './helpers/residimensionarArreglo';

export default function GridSeries() {

    
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [twentySeries, setTwentySeries] = useState([]);
  const [filtros, setFiltros] = useState({
    initialNumOfMovies: 20,
    año: null,
    cardsForPage: 5,
    pagina: 0,
  });
  const [series, setSeries] = useState([]);

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
      initialNumOfMovies: series.length , 
      pagina: 0,
    });

  };

  let api = helpHttp();
  let url =
    "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json";

  useEffect(() => {
    setLoading(true);

    api.get(url).then((res) => {
      const filteredSeries = res.entries.filter(
        (item) => item.programType === "series"
      );
      const twentyFilteredSeries= filteredSeries
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
      setTwentySeries(twentyFilteredSeries);
    });

    setLoading(false);
  }, [url]);

  useEffect(() => {
    const array = redimensionarArreglo(
      twentySeries,
      filtros.cardsForPage,
      filtros.año
    );
    setSeries(array);
  }, [twentySeries, filtros.cardsForPage, filtros.año]);

  
  console.log(series)

  return (
    <div>
        <Filtros cardsForPage={cardsForPage} inputAnio={inputAnio}/>
        {loading && <Loader />}
        {error && <Error/>}
        {series.length > 0  && (
            
            <div className="container mx-auto">
                
                <h1 className="text-4xl font-bold mb-4">Series</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                     {series[filtros.pagina].map((serie, index) => (
                    <Card key={index} {...serie} />
                    ))} 
                </div>
                <Paginacion filtros = {filtros} numOfPage = {numOfPage}/>
            </div>
        )}

        
    </div>
  )
}