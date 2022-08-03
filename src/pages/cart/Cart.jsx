import React, { useState } from "react";
import CartItem from "../../components/cart/CartItem";
import PropTypes from "prop-types";
import "../../styles/shop.css";
import "../../styles/cart.css";
import { NavLink, Link } from "react-router-dom";
import { HiArrowSmLeft } from "react-icons/hi";
import { BsFillCartXFill } from "react-icons/bs";

import empty from "../assets/emptyCart.png";

const Cart = ({ cart, onRemoveFromCart, onEmptyCart, onUpdateCartQty }) => {
  const handleEmptyCart = () => {
    onEmptyCart();
  };

  const renderEmptyMessage = () => {
    if (cart.total_unique_items > 0) {
      return;
    }
    return (
      <div className="cart__none">
        <img className="empty-cart-icon" src={empty} />
        <p>
          Cart is empty, <Link to="/shop">Add products!</Link>
        </p>
      </div>
    );
  };

  const renderItems = () => (
    <div className="over-flow-add">
      {cart.line_items
        ? cart.line_items.map((lineItem) => (
            <CartItem
              item={lineItem}
              onUpdateCartQty={onUpdateCartQty}
              onRemoveFromCart={onRemoveFromCart}
              key={lineItem.id}
              className="cart__inner"
            />
          ))
        : "hi"}
    </div>
  );

  const renderTotal = () => {
    if (cart.total_unique_items > 0) {
      return (
        <div className="cart__total">
          <p className="cart__total-title">
            <span className="cart_total-text">Total: </span>{" "}
            {cart.subtotal.formatted_with_symbol}
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
       <Link className="nav__cart-open" to="/shop">
        <BsFillCartXFill size="35px" icon="shopping-bag" color="lightGrey" />
        <span className="cart-qty" >{cart.total_items}</span>
      </Link>
      <div style={{ display: "flex" }} className="cart_nav">
        <Link to="/shop">
          <HiArrowSmLeft className="cart_nav_back-icon" />
        </Link>
        <h4 className="cart__heading"> Shopping Cart</h4>
      </div>
      {renderEmptyMessage()}
      <div className="cart_buttons">
        <div id="cart-items-only" className="cart-items-only">
          {renderItems()}
        </div>
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
