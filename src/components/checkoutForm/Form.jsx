import React, { useState, useRef, useEffect } from "react";
import "../../styles/form.css";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ handleEmptyCart, cart, handleUserInfo }) => {
  let [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    note: "",
  });

  const navigate = useNavigate();
  useEffect(() => {
    handleUserInfo(userInfo);
  }, [userInfo]);

  const form = useRef();

  const sendEmail = (e) => {
    navigate(`/checkout/confirmation_${cart.id ? cart.id : cart.id}`);
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sv7fhvv",
        "template_fvroov6",
        form.current,
        "iEVTv6ISG3Ik7V7Ps"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    handleEmptyCart();
  };
  return (
    <form id="form" className="checkout__form" ref={form} onSubmit={sendEmail}>
      <h1 className="form-before-inputs">Checkout</h1>
      <div className="form__container">
        {/* user information sent by email */}
        {cart.subtotal ? (
          <div>
            <input
              style={{ display: "none" }}
              id="deposit"
              name="deposit"
              value={cart.subtotal.raw / 10}
              onChange={() => ""}
            />
            <input
              style={{ display: "none" }}
              id="total_price"
              name="total_price"
              value={cart.subtotal.raw}
              onChange={() => ""}
            />
            <input
              style={{ display: "none" }}
              id="total_items"
              name="total_items"
              value={cart.total_items}
              onChange={() => ""}
            />
            <input
              style={{ display: "none" }}
              id="after_depo"
              name="after_depo"
              value={cart.subtotal.raw - cart.subtotal.raw / 10}
              onChange={() => ""}
            />
            {cart.line_items.map((item) => (
              <div key={item.id}>
                <input
                  style={{ display: "none" }}
                  name="products"
                  value={`x${item.quantity} ${item.name} for ${item.price.formatted_with_code}`}
                  onChange={() => ""}
                />
                <input
                  style={{ display: "none" }}
                  name="products_id"
                  value={`${item.id} `}
                  onChange={() => ""}
                />
                <input
                  style={{ display: "none" }}
                  name="image"
                  value={`${item.image} `}
                  onChange={() => ""}
                />
              </div>
            ))}
          </div>
        ) : (
          <p style={{ display: "none" }}>Not yet</p>
        )}
        <input
          maxLength="30"
          required
          type="text"
          className="checkout__input form__container_input"
          placeholder="First name"
          key="firstName"
          name="reply_to"
          id="reply_to"
          onChange={(event) => setUserInfo({ firstName: event.target.value })}
        />

        <input
          maxLength="30"
          required
          type="text"
          placeholder="Last name"
          className="checkout__input form__container_input"
          key="lastName"
          name="lastName"
          onChange={(event) => setUserInfo({ lastName: event.target.value })}
        />

        <input
          maxLength="30"
          required
          type="tel"
          placeholder="Phone number"
          className="checkout__input form__container_input"
          key="number"
          name="number"
          id="number"
          onChange={(event) => setUserInfo({ number: event.target.value })}
        />
        <input
          maxLength="40"
          required
          type="email"
          placeholder="Email  (important to confirm order)"
          className="checkout__input form__container_input "
          key="email"
          name="toEmail"
          id="toEmail"
          onChange={(event) => setUserInfo({ email: event.target.value })}
        />
        <textarea
          maxLength="250"
          wrap="hard"
          type="text"
          placeholder="Notes 250 words max (optional)"
          className="checkout__input form__container_input note"
          key="note"
          name="note"
          id="note"
          onChange={(event) => setUserInfo({ note: event.target.value })}
          cols="25"
          rows="50"
        ></textarea>

        <button className="checkout__btn-confirm" type="submit">
          Place Order
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
