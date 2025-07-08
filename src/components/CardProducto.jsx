import React from 'react';
import { Link } from 'react-router-dom';
import './CardProducto.css';

function CardProducto({ producto }) {
  if (!producto) {
    return <div className="card-placeholder">Producto no disponible</div>;
  }

  return (
    <div className="card">
      {}
      <img
        src={producto.image}
        alt={producto.title}
      />
      <div className="p-4">
        <h3>
          <Link to={`/productos/${producto.id}`}>
            {producto.title}
          </Link>
        </h3>
        <p>${producto.price}</p>
        <p>{producto.category}</p>
        <Link to={`/productos/${producto.id}`}>
          Ver más
        </Link>
      </div>
    </div>
  );
}

export default CardProducto;
