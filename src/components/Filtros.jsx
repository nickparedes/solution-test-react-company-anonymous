import React from 'react'

const Filtros = () => {
  return (
    <div>
        <div class="flex items-center justify-center flex-wrap  gap-3 fles-wrap py-5">
            <div class="flex items-center space-x-2">
                <label for="year-filter" class="text-gray-700">Filtrar por año:</label>
                <input id="year-filter" type="text" class="border border-gray-300 rounded-md px-3 py-2 w-40" />
            </div>
            
            <div class="flex items-center space-x-2">
                <label for="results-per-page" class="text-gray-700">Resultados por página:</label>
                <select id="results-per-page" class="border border-gray-300 rounded-md px-3 py-2">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                </select>
            </div>

    </div>


</div>
  )
}

export default Filtros