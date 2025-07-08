import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CardProducto from '../components/CardProducto';
import './Productos.css';

function Productos() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { idCategoria } = useParams();

  useEffect(() => {
    setLoading(true);
    setError(null);

    let apiUrl = 'https://fakestoreapi.com/products';

    if (idCategoria) {
      apiUrl = `https://fakestoreapi.com/products/category/${idCategoria}`;
    }

    axios.get(apiUrl)
      .then((res) => {
        setProductos(res.data);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        console.error('Error al cargar los productos:', err);
        setError('Ocurrió un error al cargar los productos. Por favor, inténtalo de nuevo más tarde.');
        setLoading(false);
      });
  }, [idCategoria]);

  if (loading) {
    return (
      <div className="productos-container">
        <p className="text-xl">Cargando productos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="productos-container">
        <p className="text-xl">{error}</p>
      </div>
    );
  }

  return (
    <div className="productos-container">
      <h1 className="productos-title">
        {idCategoria ? `Productos de ${idCategoria.charAt(0).toUpperCase() + idCategoria.slice(1)}` : 'Todos los Productos'}
      </h1>

      <div className="productos-grid">
        {productos.map(producto => (
          <CardProducto key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
}

export default Productos;
