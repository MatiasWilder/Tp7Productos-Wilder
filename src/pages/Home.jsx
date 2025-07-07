import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardProducto from '../components/CardProducto';

function Home() {
  const [productosDestacados, setProductosDestacados] = useState([]);
  const [loadingProductos, setLoadingProductos] = useState(true);
  const [errorProductos, setErrorProductos] = useState(null);

  // Efecto para cargar productos destacados
  useEffect(() => {
    setLoadingProductos(true);
    setErrorProductos(null);
    axios.get('https://fakestoreapi.com/products?limit=4')
      .then(res => {
        setProductosDestacados(res.data);
        setLoadingProductos(false);
      })
      .catch(err => {
        console.error('Error al cargar productos destacados:', err);
        setErrorProductos('No se pudieron cargar los productos destacados.');
        setLoadingProductos(false);
      });
  }, []);

  return (
    <div className="home-container p-4">
      <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">Bienvenido a TP Ventas</h1>
      <p className="text-xl text-center mb-8 text-gray-600">Explora nuestros productos destacados:</p>

      {/* Sección de productos destacados */}
      {loadingProductos ? (
        <div className="productos-destacados-grid text-center py-8">
          <p className="text-xl text-gray-700">Cargando productos destacados...</p>
        </div>
      ) : errorProductos ? (
        <div className="productos-destacados-grid text-center py-8">
          <p className="text-xl text-red-600">{errorProductos}</p>
        </div>
      ) : (
        <div className="productos-destacados-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {productosDestacados.map(producto => (
            <CardProducto key={producto.id} producto={producto} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
