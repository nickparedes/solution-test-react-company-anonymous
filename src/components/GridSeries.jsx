import React, { useEffect, useState } from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';
import { helpHttp } from './helpers/helpHttp';
import { Loader } from 'semantic-ui-react';
import Error from './Error';
import Modals from './utils/Modals';

export default function GridSeries() {

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [series, setSeries] = useState([])
    const [twentySeries, setTwentySeries] = useState([])

    let api = helpHttp();
    let url = "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json"

  const seriess = [
    {
      title: 'El Padrino',
      description:
        'El patriarca de una familia de la mafia traslada su imperio criminal de Nueva York a la década de 1950.',
      poster:
        'https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/Godfather_ver1.jpg/220px-Godfather_ver1.jpg',
      trailer: 'https://www.youtube.com/watch?v=sY1S34973zA',
    },
    {
      title: 'Pulp Fiction',
      description:
        'La vida de dos matones, un boxeador en decadencia, una pareja y un par de ladrones se entrelaza en cuatro historias de violencia y redención.',
      poster:
        'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Pulp_Fiction_%281994%29_poster.jpg/220px-Pulp_Fiction_%281994%29_poster.jpg',
      trailer: 'https://www.youtube.com/watch?v=s7EdQ4FqbhY',
    },
    {
      title: 'Pulp Fiction',
      description:
        'La vida de dos matones, un boxeador en decadencia, una pareja y un par de ladrones se entrelaza en cuatro historias de violencia y redención.',
      poster:
        'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Pulp_Fiction_%281994%29_poster.jpg/220px-Pulp_Fiction_%281994%29_poster.jpg',
      trailer: 'https://www.youtube.com/watch?v=s7EdQ4FqbhY',
    },
    {
      title: 'Pulp Fiction',
      description:
        'La vida de dos matones, un boxeador en decadencia, una pareja y un par de ladrones se entrelaza en cuatro historias de violencia y redención.',
      poster:
        'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Pulp_Fiction_%281994%29_poster.jpg/220px-Pulp_Fiction_%281994%29_poster.jpg',
      trailer: 'https://www.youtube.com/watch?v=s7EdQ4FqbhY',
    },
    {
      title: 'Pulp Fiction',
      description:
        'La vida de dos matones, un boxeador en decadencia, una pareja y un par de ladrones se entrelaza en cuatro historias de violencia y redención.',
      poster:
        'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Pulp_Fiction_%281994%29_poster.jpg/220px-Pulp_Fiction_%281994%29_poster.jpg',
      trailer: 'https://www.youtube.com/watch?v=s7EdQ4FqbhY',
    },
    {
      title: 'Pulp Fiction',
      description:
        'La vida de dos matones, un boxeador en decadencia, una pareja y un par de ladrones se entrelaza en cuatro historias de violencia y redención.',
      poster:
        'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Pulp_Fiction_%281994%29_poster.jpg/220px-Pulp_Fiction_%281994%29_poster.jpg',
      trailer: 'https://www.youtube.com/watch?v=s7EdQ4FqbhY',
    },
    {
      title: 'Pulp Fiction',
      description:
        'La vida de dos matones, un boxeador en decadencia, una pareja y un par de ladrones se entrelaza en cuatro historias de violencia y redención.',
      poster:
        'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Pulp_Fiction_%281994%29_poster.jpg/220px-Pulp_Fiction_%281994%29_poster.jpg',
      trailer: 'https://www.youtube.com/watch?v=s7EdQ4FqbhY',
    },

  ];

  useEffect(() => {
    
    setLoading(true);
    api.get(url).then((res)=>{
        console.log(res)
        
        setSeries(res.entries.filter( item => item.programType === "series"))
        setTwentySeries(series.filter(item => (item.releaseYear >= 2010 ) ).slice(0,20).sort((a,b) =>{
            const titleA = a.title.toUpperCase(); // Convertir a mayúsculas para hacer la comparación
            const titleB = b.title.toUpperCase(); // Convertir a mayúsculas para hacer la comparación
          
            if (titleA < titleB) {
              return -1; // a viene antes que b
            }
          
            if (titleA > titleB) {
              return 1; // a viene después que b
            }
          
            return 0; // Son iguales
        }))
    })
    setLoading(false);
    
  }, [url])

console.log(twentySeries)
  
  

  return (
    <div>
        {loading && <Loader />}
        {error && <Error/>}
        {series && (
            
            <div className="container mx-auto">
                <Modals/>
                <h1 className="text-4xl font-bold mb-4">Series</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {twentySeries.map((twentyseries, index) => (
                    <Card key={index} {...twentyseries} />
                    ))}
                </div>
            </div>
        )}

        
    </div>
  )
}