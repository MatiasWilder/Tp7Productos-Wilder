import React from 'react';

function Contacto() {
  return (
    <div>
      <h1>Contáctanos</h1>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
        <label>
          Nombre:
          <input type="text" placeholder="Ingresa tu nombre" required />
        </label>
        <label>
          Apellido:
          <input type="text" placeholder="Ingresa tu apellido" required />
        </label>
        <label>
          Email:
          <input type="email" placeholder="Ingresa tu email" required />
        </label>
        <label>
          Número de teléfono:
          <input type="tel" placeholder="Ingresa tu número" />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contacto;
