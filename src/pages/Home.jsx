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
    <div className="home-container">
      <h1 className="text-4xl">Bienvenido a TP Ventas</h1>
      <p className="text-xl">Explora nuestros productos destacados:</p>

      {loadingProductos ? (
        <div className="productos-destacados">
          <p className="text-xl">Cargando productos destacados...</p>
        </div>
      ) : errorProductos ? (
        <div className="productos-destacados">
          <p className="text-xl">{errorProductos}</p>
        </div>
      ) : (
        <div className="productos-destacados">
          {productosDestacados.map(producto => (
            <CardProducto key={producto.id} producto={producto} />
          ))}
        </div>
      )}
      <Carrousel></Carrousel>
    </div>
  );
}

export default Home;
