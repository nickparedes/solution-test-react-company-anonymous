import React, { useEffect, useState } from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';
import { helpHttp } from './helpers/helpHttp';
import { Loader } from 'semantic-ui-react';
import Error from './Error';
import Modals from './utils/Modals';
import Filtros from './Filtros';

export default function GridSeries({error, loading, series, twentySeries}) {

    
  
    

  return (
    <div>
        <Filtros/>
        {loading && <Loader />}
        {error && <Error/>}
        {series && (
            
            <div className="container mx-auto">
                
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