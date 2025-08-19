import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CartContext } from '../context/CartContext';

const ProductoDetalle = () => {
  const { idProducto } = useParams();
  const [producto, setProducto] = useState(null);
  const [cantidad, setCantidad] = useState(1);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${idProducto}`)
      .then(res => setProducto(res.data))
      .catch(err => console.error("Error cargando detalle", err));
  }, [idProducto]);

  if (!producto) return <p>Cargando producto...</p>;

  const handleAgregar = () => {
    addToCart(producto, cantidad);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{producto.title}</h1>
      <img src={producto.image} alt={producto.title} style={{ width: '200px', marginBottom: '1rem' }} />
      <p><strong>Precio:</strong> ${producto.price}</p>
      <p><strong>Categoría:</strong> {producto.category}</p>
      <p>{producto.description}</p>

      <div style={{ marginTop: '1rem' }}>
        <label>Cantidad: </label>
        <input 
          type="number" 
          min="1" 
          value={cantidad} 
          onChange={(e) => setCantidad(Number(e.target.value))} 
          style={{ width: '60px', marginRight: '10px' }}
        />
        <button onClick={handleAgregar}>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ProductoDetalle;
