import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import QuienesSomos from './pages/QuienesSomos';
import Contacto from './pages/Contacto';
import Productos from './pages/Productos';
import ProductoDetalle from './pages/ProductoDetalle';
import Carrito from './pages/Carrito';

import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="quienessomos" element={<QuienesSomos />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="productos" element={<Productos />} />
        <Route path="productos/categoria/:idCategoria" element={<Productos />} />
        <Route path="productos/:idProducto" element={<ProductoDetalle />} />
        <Route path="carrito" element={<Carrito />} />
      </Route>
    </Routes>
  );
}

export default App;


