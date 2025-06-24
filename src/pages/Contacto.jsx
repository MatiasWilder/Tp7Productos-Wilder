import {react} from 'react'

function Contacto(){
    
    return(
        <div>
        <h1>Contáctanos</h1>
        <a>Nombre</a>
        <input type = "text">Ingresa tu nombre</input>
        <a>Apellido</a>
        <input>Ingresa tu apellido</input>
        <a>Email</a>
        <input type="email">Ingresa tu Email</input>
        <a>Número de teléfono</a>
        <input type="tel">Ingresa tu número de teléfono</input>
        </div>
    )
}

export default Contacto;