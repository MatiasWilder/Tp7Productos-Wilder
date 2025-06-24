import React from 'react';
import {Link} from 'react-router-dom';

const Navbar=()=>{
    return (    
                <div className='NavBar'>
                    <div className='stocks'>
                        <Link to="/"></Link>
                    </div>
                    <div className='Home'>
                        <Link to="./pages/Home">Home</Link>
                </div>
                    <div className='Productos'>
                        <Link to="./Pages/Productos">Productos</Link>
                    </div>
                    <div className='Contacto'>
                        <Link to="./Pages/Contacto">Contacto</Link>
                    </div>
                    <div className='Quienes somos'>
                        <Link to="./Pages/QuienesSomos">Quienes Somos</Link>
                    </div>
                </div>
                
    )

}

export default Navbar;