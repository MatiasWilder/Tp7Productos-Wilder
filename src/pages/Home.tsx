import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardProducto from '../components/CardProducto';
import Carrousel from '../components/CarrouselHome';

function Home() {
  const [productosDestacados, setProductosDestacados] = useState([]);
  const [loadingProductos, setLoadingProductos] = useState(true);
  const [errorProductos, setErrorProductos] = useState(null);

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
    <div className="home-container" style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>Bienvenido a TP Ventas</h1>

      <Carrousel />

      <p style={{ fontSize: '1.2rem', margin: '2rem 0 1rem' }}>Explora nuestros productos destacados:</p>

      {loadingProductos ? (
        <p>Cargando productos destacados...</p>
      ) : errorProductos ? (
        <p>{errorProductos}</p>
      ) : (
        <div className="card-container">
          {productosDestacados.map(producto => (
            <CardProducto key={producto.id} producto={producto} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
