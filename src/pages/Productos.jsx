import { useEffect, useState } from 'react';
import axios from 'axios';
import CardProducto from '../components/CardProducto';
import './Productos.css';

function Productos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then((res) => {
        setProductos(res.data.products);
        setError(null);
      })
  }, []);

  return (
    <div className="productos-container">
      <h1 className="productos-title">Todos los productos</h1>

      <div className="productos-grid">
        {productos.map(producto => (
          <CardProducto key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
}

export default Productos;
