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
          <div className="form_progress">
            <div className="form_progress_green-ball form_progress_ball ">
              <BiCheck className="form_progress_green-ball_icon" />
            </div>
            <p className="form_progress_text">Shopping cart</p>
            <hr className="form_progress_line form_progress_line__active" />
            <div className="form_progress_white-ball form_progress_ball">2</div>
            <p className="form_progress_text">Checkout</p>
            <hr className="form_progress_line form_progress_line__inactive" />

            <div className="form_progress_gray-ball form_progress_ball">3</div>
            <p className="form_progress_text">Confirmation</p>
          </div>
          <div className="form">
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
