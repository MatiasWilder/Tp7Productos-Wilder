import { useEffect, useState } from 'react';
import axios from 'axios';
import './CardProducto.css';

function CardProducto() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products?limit=8')
      .then((res) => {
        setProductos(res.data.products);
        setError(null);
      })
  }, []);

  return (
    <div className="card-container">

      {productos.map(producto => (
        <div className="card" key={producto.id}>
          <img src={producto.thumbnail} alt={producto.title} />
          <h3>{producto.title}</h3>
          <p><strong>${producto.price}</strong></p>
          <p className="card-category">{producto.category}</p>
          <button>Ver más</button>
        </div>
      ))}
    </div>
  );
}

export default CardProducto;