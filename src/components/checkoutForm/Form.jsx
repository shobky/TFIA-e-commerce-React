import React, { useState, useRef, useEffect } from "react";
import "../../styles/form.css";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

const CheckoutForm = ({ handleEmptyCart, cart, handleUserInfo }) => {
  let [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
  });

  useEffect(() => {
    handleUserInfo(userInfo);
  }, [userInfo]);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_jq3c2cm",
        "template_09t5jos",
        form.current,
        "MIKvidR_XPs1Mdf0l"
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
console.log(cart)
  return (
    <form id="form" className="checkout__form" ref={form} onSubmit={sendEmail}>
      <div className="form__container">
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
            {cart.line_items.map((item) => (
              <div>
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
            )) }
            ;
          </div>
        ) : (
          <p style={{ display: "none" }}>Not yet</p>
        )}
        <input
          required
          className="checkout__input form__container_input"
          placeholder="First name"
          key="firstName"
          name="reply_to"
          id="reply_to"
          onChange={(event) => setUserInfo({ firstName: event.target.value })}
        />

        <input
          required
          placeholder="Last name"
          className="checkout__input form__container_input"
          key="lastName"
          name="lastName"
          onChange={(event) => setUserInfo({ lastName: event.target.value })}
        />

        <input
          required
          placeholder="Phone number"
          className="checkout__input form__container_input"
          key="number"
          name="number"
          id="number"
          onChange={(event) => setUserInfo({ number: event.target.value })}
        />
        <input
          required
          placeholder="Email"
          className="checkout__input form__container_input"
          key="email"
          name="toEmail"
          id="toEmail"
          onChange={(event) => setUserInfo({ email: event.target.value })}
        />
        <div onClick={sendEmail}>
          {userInfo.email ? (
            <Link
              to={`/checkout/confirmation_${cart.id ? cart.id : cart.id}`}
              type="submit"
            >
              <button type="submit" className="checkout__btn-confirm">
                {" "}
                Continue
              </button>
            </Link>
          ) : (
            <button className="btn-disabled" disabled type="submit">
              Continue
            </button>
          )}
        </div>
      </div>
    </form>
  );
};

export default CheckoutForm;
