import React, { useState } from "react";
import CartItem from "../../components/cart/CartItem";
import PropTypes from "prop-types";
import "../../styles/shop.css";
import "../../styles/cart.css";
import { NavLink, Link } from "react-router-dom";
import { HiArrowSmLeft } from "react-icons/hi";

const Cart = ({ cart, onRemoveFromCart, onEmptyCart, onUpdateCartQty }) => {
  const handleEmptyCart = () => {
    onEmptyCart();
  };

  const renderEmptyMessage = () => {
    if (cart.total_unique_items > 0) {
      return;
    }
    return (
      <p className="cart__none">
        You have no items in your shopping cart, start adding some!
      </p>
    );
  };

  const renderItems = () =>
    cart.line_items
      ? cart.line_items.map((lineItem) => (
          <CartItem
            item={lineItem}
            onUpdateCartQty={onUpdateCartQty}
            onRemoveFromCart={onRemoveFromCart}
            key={lineItem.id}
            className="cart__inner"
          />
        ))
      : "hi";
  const renderTotal = () => {
    if (cart.total_unique_items > 0) {
      return (
        <div className="cart__total">
          <p className="cart__total-title">
            <span className="cart_total-text">Total: </span> {cart.subtotal.formatted_with_symbol}
          </p>
        </div>
      );
    }
  };

  const renderButtons = () => {
    if (cart.total_unique_items > 0) {
      return (
        <div className="cart__buttons">
          <button className="cart__btn-empty" onClick={handleEmptyCart}>
            empty cart
          </button>

          <NavLink className="cart__btn-checkout" to="/Checkout">
            checkout
          </NavLink>
        </div>
      );
    }
  };

  return (
    <div className="cart">
      <div style={{ display: "flex" }} className="cart_nav">
        <a href="/shop">
          <HiArrowSmLeft className="cart_nav_back-icon" />
        </a>
        <h4 className="cart__heading">Your Shopping Cart</h4>
      </div>
      {renderEmptyMessage()}
      <div className="cart_buttons">
        <div className="cart-items-only">{renderItems()}</div>
        <div className="total">{renderTotal()}</div>
        {renderButtons()}
      </div>
    </div>
  );
};

export default Cart;

Cart.propTypes = {
  cart: PropTypes.object,
  onUpdateCartQty: () => {},
  onRemoveFromCart: () => {},
  onEmptyCart: () => {},
  handleUpdateCartQty: PropTypes.func,
  history: PropTypes.object,
};
