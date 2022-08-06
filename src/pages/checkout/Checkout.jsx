import React, { useEffect, useState } from "react";
import "../../styles/checkout.css";
import Form from "../../components/checkoutForm/Form";
import Orders from "../../components/summary/Orders";
import { HiShoppingCart } from "react-icons/hi";
import { BiCheck } from "react-icons/bi";

const Checkout = ({
  handleEmptyCart,
  order,
  isConfirmed,
  cart,
  handleUserInfo,
}) => {
  return (
    <div className="checkout">
      <h1 className="page-header">The Future Is Aesthetic</h1>
      <div className="line-div">
        <hr className="checkout-line"></hr>
      </div>
      <div className="flex">
        <div className="formm">
          <div className="summary-for-mobile">
            <div className="summary_header-section">
              <HiShoppingCart className="summary_cart-icon" />
              <h2 className="summary_heading"> Your Order</h2>
            </div>
            <Orders  cart={cart} />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button className="phone-button">
                <a href="#form">Buy</a>
              </button>
            </div>
          </div>
          <div className="form" id="form">
            <Form
              handleEmptyCart={handleEmptyCart}
              order={order}
              isConfirmed={isConfirmed}
              handleUserInfo={handleUserInfo}
              cart={cart}
            />
          </div>
        </div>

        <div className="summary">
          <div className="summary_header-section">
            <HiShoppingCart className="summary_cart-icon" />
            <h2 className="summary_heading"> Your Order</h2>
          </div>
          <Orders cart={cart} />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
