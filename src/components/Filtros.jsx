import React, { useState } from 'react'

export const Filtros = ({cardsForPage, inputAnio}) => {
  

  const [yearFilterValue, setYearFilterValue] = useState("")
 

  const handleYearFilterChange = (event) => {
    setYearFilterValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    inputAnio(yearFilterValue)
  };
  
  return (
    <div>
        <div class="flex items-center justify-center flex-wrap  gap-3 fles-wrap py-5">
            <form onSubmit={handleFormSubmit}>
            <div class="flex items-center space-x-2">
              
                <label for="year-filter"   class="text-gray-700">Filtrar por año:</label>
                <input 
                id="year-filter" 
                placeholder='Año' 
                type="text" 
                class="border border-gray-300 rounded-md px-3 py-2 w-40" 
                value={yearFilterValue}
                onChange={handleYearFilterChange}
                
                />
                             

            </div>
            </form> 
            <div class="flex items-center space-x-2">
                <label for="results-per-page" class="text-gray-700">Resultados por página:</label>
                <select id="results-per-page" onClick={(e)=>{cardsForPage(parseInt(e.target.value))}} class="border border-gray-300 rounded-md px-3 py-2">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                </select>
            </div>

    </div>


</div>
  )
}

export const Paginacion = ({filtros,numOfPage})=>{
  
  const {initialNumOfMovies, cardsForPage} = filtros;
  
  const cantidadOfPage = Math.round(initialNumOfMovies/cardsForPage)=== 0 ? 1: Math.round(initialNumOfMovies/cardsForPage)
  

  const botones = Array.from({ length: cantidadOfPage }, (_, i) => i + 1);

  console.log(initialNumOfMovies, cardsForPage, cantidadOfPage)

  return(
    <div className="flex items-center justify-center space-x-4 py-4">
      <button className="bg-gray-200 hover:bg-gray-300 rounded-md px-3 py-2">Anterior</button>
      <div className="flex space-x-2">
        {botones.map((numero) => (
          <button key={numero} onClick={(e)=>{numOfPage(parseInt(e.target.value - 1))}} value={numero} className="bg-gray-200 hover:bg-gray-300 rounded-md px-3 py-2">{numero}</button>
        ))}
      </div>
      
      <button className="bg-gray-200 hover:bg-gray-300 rounded-md px-3 py-2">Siguiente</button>
    </div>
  )
}


