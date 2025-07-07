import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logo from '../assets/logo.png';

export default function NavBar() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/categories')
      .then(res => setCategorias(res.data))
      .catch(err => console.error("Error cargando categorías", err));
  }, []);

  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo TP Ventas" className="logo-img" />
        </Link>
      </div>
      <ul className="nav-links">
        <Link to="/">Home</Link>
        <div className="dropdown">
          <span>Productos ▾</span>
          <div className="dropdown-content">
            <Link to="/productos">Ver todos</Link>
            {categorias.map((cat) => (
              <Link key={cat} to={`/productos/categoria/${cat}`}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </Link>
            ))}
          </div>
        </div>
        <Link to="/quienessomos">Quienes Somos</Link>
        <Link to="/contacto">Contacto</Link>
      </ul>
    </div>
  );
}
