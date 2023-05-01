import React from 'react';

function ModalCart(props) {
  return (
    <div className="w-full h-full lg:w-1/2 lg:h-auto bg-white shadow-md rounded-lg overflow-hidden">
      <img className="h-64 w-full object-cover object-center" src={props.imagen} alt={props.titulo} />
      <div className="p-4">
        <h2 className="font-bold text-2xl mb-2">{props.titulo}</h2>
        <p className="text-gray-700 text-base mb-4">{props.descripcion}</p>
        <div className="text-gray-700 text-base mb-4">
          <p><span className="font-bold">Tipo:</span> {props.tipo}</p>
          <p><span className="font-bold">Año:</span> {props.anio}</p>
        </div>
      </div>
    </div>
  );
}

export default ModalCart;