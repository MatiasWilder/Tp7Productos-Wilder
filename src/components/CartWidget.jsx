import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

const CartWidget = () => {
  const { cartItems, removeFromCart, clearCart, getTotal } = useContext(CartContext);
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: "fixed", bottom: 20, right: 20, zIndex: 1000 }}>
      <button
        className="btn btn-warning rounded-circle shadow"
        style={{ width: "60px", height: "60px", fontSize: "1.5rem" }}
        onClick={() => setOpen(!open)}
      >
        🛒
        <span className="badge bg-danger rounded-pill position-absolute top-0 start-100 translate-middle">
          {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        </span>
      </button>

      {open && (
        <div
          style={{
            position: "absolute",
            bottom: "70px",
            right: "0",
            background: "#fff",
            padding: "1rem",
            border: "1px solid #ccc",
            borderRadius: "8px",
            width: "300px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
          }}
        >
          <h5>Carrito</h5>
          {cartItems.length === 0 ? (
            <p>El carrito está vacío</p>
          ) : (
            <>
              <ul className="list-unstyled">
                {cartItems.map((item) => (
                  <li key={item.id} className="d-flex justify-content-between align-items-center mb-2">
                    <span>{item.title} x {item.quantity}</span>
                    <span>${item.price * item.quantity}</span>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => removeFromCart(item.id)}
                    >
                      ❌
                    </button>
                  </li>
                ))}
              </ul>
              <p><b>Total:</b> ${getTotal()}</p>
              <div className="d-flex justify-content-between">
                <button className="btn btn-sm btn-outline-danger" onClick={clearCart}>
                  Vaciar
                </button>
                <Link className="btn btn-sm btn-primary" to="/carrito" onClick={() => setOpen(false)}>
                  Ir al carrito
                </Link>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );


  CartWidget.propTypes ={


  }
};

export default CartWidget;
