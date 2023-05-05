import React from 'react';
import { Modal } from 'semantic-ui-react';
import Modals from './utils/Modals';

function Card(props) {

 
  return (
    <div className="max-w-md mx-auto my-8 bg-white rounded-md overflow-hidden shadow-md">
      <img
        className="object-cover w-full h-64"
        src={props.images['Poster Art'].url}
        alt={props.title}
      />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{props.title}</h2>
        <p className="text-gray-700 text-base">{props.description}</p>
        <div className="mt-4">
          <Modals {...props}/>
        </div>
      </div>
      
    </div>
  );
}

export default Card;