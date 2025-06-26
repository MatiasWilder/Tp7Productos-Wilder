import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Nav(){

  return(
        <div className="navbar">
          <div className="logo"></div>
           <ul className="nav-links">
              <Link to="./pages/Home">Home</Link>
              <Link to="./Pages/Productos">Productos</Link>
              <Link to="./Pages/Contacto">Contacto</Link>
              <Link to="./Pages/QuienesSomos">Quienes Somos</Link>
           </ul>
        </div>
  );

}