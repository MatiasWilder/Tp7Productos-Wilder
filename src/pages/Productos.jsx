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
      <div className="productos-container text-center py-8">
        <p className="text-xl text-gray-700">Cargando productos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="productos-container text-center py-8">
        <p className="text-xl text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="productos-container p-4">
      <h1 className="productos-title text-3xl font-bold mb-6 text-center">
        {idCategoria ? `Productos de ${idCategoria.charAt(0).toUpperCase() + idCategoria.slice(1)}` : 'Todos los Productos'}
      </h1>

      <div className="productos-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productos.map(producto => (
          <CardProducto key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
}

export default Productos;
