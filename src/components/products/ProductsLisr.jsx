import React from "react";
import PropTypes from "prop-types";
import ProductItem from "./ProductItem";
import "../../styles/products.css";

const ProductsList = ({ handleProduct, products, onAddToCart }) => {
  return (
    <div className="products" id="products">
      {products.map((product) => (
        <ProductItem
          handleProduct={handleProduct}
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

ProductsList.propTypes = {
  products: PropTypes.array,
};

export default ProductsList;
