// src/pages/Home.jsx
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
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Explora nuestros productos destacados:</p>

      {loadingProductos ? (
        <p>Cargando productos destacados...</p>
      ) : errorProductos ? (
        <p>{errorProductos}</p>
      ) : (
        <div className="card-container">
          {productosDestacados.map(producto => (
            <div className="card" key={producto.id}>
              <img src={producto.image} alt={producto.title} />
              <h3>{producto.title}</h3>
              <p><strong>${producto.price}</strong></p>
              <p className="card-category">{producto.category}</p>
              <button>Ver más</button>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}

export default Home;
