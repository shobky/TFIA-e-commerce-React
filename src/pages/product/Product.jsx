import React, { useEffect, useState } from "react";
import "../../styles/product_details.css";
import { HiArrowSmLeft } from "react-icons/hi";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

const Product = ({ shopProduct, cart, onAddToCart }) => {
  const [added, setAdded] = useState("Add to cart");
  const handleAddToCart = () => {
    onAddToCart(shopProduct.id, 1);
    setAdded("In cart");
  };
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    if (currentIndex === shopProduct.assets.length - 1) {
      return setCurrentIndex(0);
    }
    return setCurrentIndex(currentIndex + 1);
  };
  const prev = () => {
    if (currentIndex === 0) {
      return setCurrentIndex(shopProduct.assets.length - 1);
    }
    return setCurrentIndex(currentIndex - 1);
  };
  const infiniteCarousel = () => {
    if (shopProduct.assets.length > 1) {
      if (currentIndex === shopProduct.assets.length - 1) {
        return setCurrentIndex(0);
      }
      return setCurrentIndex(currentIndex + 1);
    } else {
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      infiniteCarousel();
    }, 3000);
    return () => clearInterval(interval);
  });
  return (
    <div className="product_details_contain">
      <Link className="nav__cart-open" to="/shop/cart">
        <FiShoppingCart size="35px" icon="shopping-bag" color="lightGrey" />
        <span className="cart-qty">{cart.total_items}</span>
      </Link>
      <div style={{ display: "flex" }} className="cart_nav">
        <Link to="/shop">
          <HiArrowSmLeft className="cart_nav_back-icon" />
        </Link>
        <h4 className="cart__heading">The Future Is Aesthetic</h4>
      </div>
      <div className="inner_content">
        <div className="photos">
          <div className="caruousel-button-container">
            <button className="caruousel-button prev" onClick={prev}>
              {shopProduct.assets.length > 1 ? (
                <BsFillArrowLeftCircleFill />
              ) : (
                ""
              )}
            </button>

            <div className="carousel-container">
              {shopProduct.assets
                ? shopProduct.assets.map((image, index) => {
                    return (
                      <img
                        className="carousel-item"
                        style={{
                          transform: `translate(-${currentIndex * 100}%)`,
                        }}
                        key={index}
                        src={image.url}
                      />
                    );
                  })
                : ""}
            </div>
            <button className="caruousel-button next" onClick={next}>
              {shopProduct.assets.length > 1 ? (
                <BsFillArrowRightCircleFill />
              ) : (
                ""
              )}
            </button>
          </div>
        </div>
        <div className="details-text">
          <p className="details_name">{shopProduct.name} </p>
          <p className="details__description">
            {shopProduct.description.replace(/<[^>]+>/gm, "")}
          </p>
          <p className="details_price">{shopProduct.price.raw} EGP</p>
          <button
            id="cart-btn-in_in-produt"
            name="Add-to-cart"
            className="cart-btn"
            style={{ backgroundColor: "white", color: "black" }}
            onClick={handleAddToCart}
          >
            {added}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;

{
}
