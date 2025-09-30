import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Carrito = () => {
  const { cartItems, removeFromCart, clearCart, getTotal } = useContext(CartContext);

  return (
    <div className="container my-5">
      <h2 className="mb-4">🛒 Carrito de Compras</h2>

      {cartItems.length === 0 ? (
        <div className="text-center">
          <p>Tu carrito está vacío.</p>
          <Link to="/productos" className="btn btn-primary">
            Ver productos
          </Link>
        </div>
      ) : (
        <>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio unitario</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>${item.price}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price * item.quantity}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="d-flex justify-content-between align-items-center mt-4">
            <h4>Total: ${getTotal()}</h4>
            <div>
              <button className="btn btn-outline-danger me-2" onClick={clearCart}>
                Vaciar carrito
              </button>
              <button className="btn btn-success">
                Finalizar compra
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Carrito;
