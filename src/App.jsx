import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import QuienesSomos from './pages/QuienesSomos';
import Contacto from './pages/Contacto';
import Productos from './pages/Productos';
import Nav from './components/NavBar';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/QuienesSomos" element={<QuienesSomos />} />
        <Route path="/Productos" element={<Productos />} />
        <Route path="/Contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
