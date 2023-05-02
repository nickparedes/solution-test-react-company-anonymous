import React, { useEffect, useState } from 'react'
import GridSeries from '../components/GridSeries'
import { helpHttp } from '../components/helpers/helpHttp';

const Series = () => {

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [series, setSeries] = useState([])
  const [twentySeries, setTwentySeries] = useState([])

  let api = helpHttp();
  let url = "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json"


  useEffect(() => {
    setLoading(true);
    console.log("Loading: ", loading);
    
    api.get(url)
      .then((res) => {
        const filteredSeries = res.entries.filter(item => item.programType === "series");
        const twentyFilteredSeries = filteredSeries.filter(item => (item.releaseYear >= 2010 ) ).slice(0,20).sort((a,b) =>{
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
        setSeries(filteredSeries);
        setTwentySeries(twentyFilteredSeries);
        console.log("Loading: ", loading);
        setLoading(false);
        console.log("Loading: ", loading);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
        console.log("Loading: ", loading);
      });
  }, [url]);

  
  
  
  
  
  

  return (
    <div>
      <GridSeries error = {error} loading = {loading} series = {series} twentySeries={twentySeries}/>
    </div>
  )
}

export default Series