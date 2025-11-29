// src/shapes/productShape.js
import PropTypes from "prop-types";

const productShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.string,
  image: PropTypes.string,
});

export default productShape;
