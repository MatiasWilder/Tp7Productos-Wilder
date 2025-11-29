// src/shapes/cartItemShape.js
import PropTypes from "prop-types";
import productShape from "./productShape";

const cartItemShape = PropTypes.shape({
  ...productShape.propTypes, // ❗ No funciona así, así que repetimos valores
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.string,
  image: PropTypes.string,
  quantity: PropTypes.number.isRequired,
});

export default cartItemShape;
