import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductoDetalle = () => {
  const { idProducto } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${idProducto}`)
      .then(res => setProducto(res.data))
      .catch(err => console.error("Error cargando detalle", err));
  }, [idProducto]);

  if (!producto) return <p>Cargando producto...</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{producto.title}</h1>
      <img src={producto.image} alt={producto.title} style={{ width: '200px', marginBottom: '1rem' }} />
      <p><strong>Precio:</strong> ${producto.price}</p>
      <p><strong>Categoría:</strong> {producto.category}</p>
      <p>{producto.description}</p>
    </div>
  );
};

export default ProductoDetalle;
