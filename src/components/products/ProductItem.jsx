import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../styles/products.css";
import { Link } from "react-router-dom";
import anImg from "../../pages/assets/favicon.ico";

const ProductItem = ({ product, onAddToCart }) => {
  const [addItem, setAddItem] = useState("add item");
  const handleAddToCart = () => {
    onAddToCart(product.id, 1);
    setAddItem("in cart");
  };
  return (
    <div className="product__card">
      <Link to={`product_details_${product.id}`}>
        <img
          className="product__image"
          src={product.image ? product.image.url : anImg}
          alt={product.name}
        />
      </Link>
      <div className="product__info">
        <h4 className="product__name">
          {product.name ? product.name : "not availabe"}
        </h4>
       
        <div className="product__details">
          <p className="product__price">
            {product.price.raw ? product.price.raw : "not availabe"}{" "}
            <span style={{ fontSize: "15px", fontWeight: "1" }}>EGP</span>
          </p>
        </div>
        <button
          id="cart-btn"
          name="Add to cart"
          className="cart-btn"
          onClick={handleAddToCart}
        >
          {addItem}
        </button>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object,
};

export default ProductItem;
