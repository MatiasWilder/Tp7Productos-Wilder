import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import QuienesSomos from './pages/QuienesSomos';
import Contacto from './pages/Contacto';
import Productos from './pages/Productos';
import ProductoDetalle from './pages/ProductoDetalle';

import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <BrowserRouter basename="/Tp7Productos-Wilder">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="quienessomos" element={<QuienesSomos />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="productos" element={<Productos />} />
          <Route path="productos/categoria/:idCategoria" element={<Productos />} />
          <Route path="productos/:idProducto" element={<ProductoDetalle />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

