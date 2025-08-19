import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './CardProducto.css';
import { CartContext } from '../context/CartContext';

function CardProducto({ producto }) {
  const { addToCart } = useContext(CartContext);

  if (!producto) {
    return <div className="card-placeholder">Producto no disponible</div>;
  }

  return (
    <div className="card">
      <img
        src={producto.image}
        alt={producto.title}
        className="card-img-top"
      />
      <div className="p-4">
        <h3>
          <Link to={`/productos/${producto.id}`}>
            {producto.title}
          </Link>
        </h3>
        <p>${producto.price}</p>
        <p>{producto.category}</p>
        <div className="d-flex gap-2">
          <Link className="btn btn-outline-primary btn-sm" to={`/productos/${producto.id}`}>
            Ver más
          </Link>
          <button
            className="btn btn-success btn-sm"
            onClick={() => addToCart(producto)}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardProducto;
