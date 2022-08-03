import React from "react";
import PropTypes from "prop-types";
import "../../styles/products.css";
import { Link } from "react-router-dom";

const ProductItem = ({ product, onAddToCart, handleProduct }) => {
  const handleAddToCart = () => {
    onAddToCart(product.id, 1);
  };

  const goToDetails = () => {
    const selectedProduct = {
      image: product.assets,
      name: product.name,
      price: product.price.raw,
      description: product.description,
      route: product.id,
    };
    handleProduct(selectedProduct);
  };

  return (
    <div className="product__card">
      <Link to="product">
        <img
          onClick={goToDetails}
          className="product__image"
          src={
            product.image
              ? product.image.url
              : "data:image/jpeg;base64,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"
          }
          alt={product.name}
        />
      </Link>
      <div className="product__info">
        <h4 className="product__name">{product.name}</h4>
        <p className="product__description">
          {product.description.replace(/<[^>]+>/gm, "")}
        </p>
        <div className="product__details">
          <p className="product__price">
            {product.price.raw}{" "}
            <span style={{ fontSize: "15px", fontWeight: "1" }}>EGP</span>
          </p>
        </div>
        <button
          id="cart-btn"
          name="Add to cart"
          className="cart-btn"
          onClick={handleAddToCart}
        >
          Get Item
        </button>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object,
};

export default ProductItem;
