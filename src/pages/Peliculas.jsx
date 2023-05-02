import React, { useEffect, useState } from 'react'
import GridMovies from '../components/GridMovies'
import { helpHttp } from '../components/helpers/helpHttp';

const Peliculas = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [peliculas, setPeliculas] = useState([])
  const [twentyPeliculas, setTwentyPeliculas] = useState([])

  let api = helpHttp();
  let url = "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json"

 

  

  useEffect(() => {
    
    setLoading(true);
    console.log(loading)
    api.get(url).then((res)=>{
        console.log(res)
        
        const filteredMovies= res.entries.filter( item => item.programType === "movie")
        const twentyFilteredMovies = filteredMovies.filter(item => (item.releaseYear >= 2010 ) ).slice(0,20).sort((a,b) =>{
          const titleA = a.title.toUpperCase(); // Convertir a mayúsculas para hacer la comparación
          const titleB = b.title.toUpperCase(); // Convertir a mayúsculas para hacer la comparación
        
          if (titleA < titleB) {
            return -1; // a viene antes que b
          }
        
          if (titleA > titleB) {
            return 1; // a viene después que b
          }
        
          return 0; // Son iguales
      })
      setPeliculas(filteredMovies);
      setTwentyPeliculas(twentyFilteredMovies);
    })
    
    setLoading(false);
    console.log(loading)
  }, [url])


  

  return (
    <div>
      <GridMovies error = {error} loading = {loading} series = {peliculas} twentyPeliculas={twentyPeliculas}/>
      
    </div>
  )
}

export default Peliculas