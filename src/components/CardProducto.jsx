import React from 'react';
import { Link } from 'react-router-dom';
import './CardProducto.css';

function CardProducto({ producto }) {
  if (!producto) {
    return <div className="card-placeholder">Producto no disponible</div>;
  }

  return (
    <div className="card border rounded-lg shadow-md overflow-hidden bg-white">
      {}
      <img
        src={producto.image}
        alt={producto.title}
        className="w-full h-48 object-contain p-4"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 truncate">
          <Link to={`/productos/${producto.id}`} className="hover:text-blue-600">
            {producto.title}
          </Link>
        </h3>
        <p className="text-gray-800 font-bold mb-1">${producto.price}</p>
        <p className="text-sm text-gray-500 capitalize mb-3">{producto.category}</p>
        <Link to={`/productos/${producto.id}`} className="block w-full text-center bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors">
          Ver más
        </Link>
      </div>
    </div>
  );
}

export default CardProducto;
