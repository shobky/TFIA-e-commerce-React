import { useEffect } from "react";
import Order from "./Order";
import { Link } from "react-router-dom";

const Orders = ({ cart }) => {
  return (
    <div className="orders-contain">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "25px",
        }}
      >
        <Link to="/shop" className="order_button">
          Continue Shopping
        </Link>
      </div>
      {cart.total_unique_items ? (
        <div className="order_details">
          <p className="order_details_total-items order_details_item">
            Total items
            <span className="order_details-total-items-number ">
              x{cart.total_items}
            </span>
          </p>
          <p className="order_details_total-items order_details_item">
            Total unique items
            <span className="order_details-total-items-number ">
              x{cart.total_unique_items}
            </span>
          </p>
          <p className="order_details_sub-total order_details_item">
            Total price
            <span className="order_details-sub-total-price">
              {cart.subtotal.raw}{" "}
              <span style={{ fontSize: "15px", fontWeight: "1" }}>EGP</span>
            </span>
          </p>
          <p className="order_details_deposit order_details_item">
            Deposit
            <span className="order_details-sub-total-price">
              {cart.subtotal.raw / 10}{" "}
              <span style={{ fontSize: "15px", fontWeight: "1" }}>EGP</span>
            </span>
          </p>
          <p className="order_details_deposit order_details_item">
            After deposit
            <span className="order_details-sub-total-price">
              {cart.subtotal.raw - cart.subtotal.raw / 10}
              <span style={{ fontSize: "15px", fontWeight: "1" }}>EGP</span>
            </span>
          </p>
          <p
            style={{
              marginLeft: "25px",
              fontFamily: "sansSerief",
              paddingTop: "2px",
            }}
          >
            {" "}
            you can screenshot your recipt.
          </p>
        </div>
      ) : (
        ""
      )}
      <hr
        className="phone-hr"
        style={{
          width: "90vw",
          marginLeft: "5vw",
          marginBottom: "15px",
        }}
      />
      <div className="order-summary">
        {cart.line_items ? (
          cart.line_items.map((lineItem) => (
            <div key={lineItem.id}>
              <Order
                item={lineItem}
                key={lineItem.id}
                className="cart__inner"
              />
            </div>
          ))
        ) : (
          <p
            style={{
              color: "gray",
              fontSize: "25px",
              textAlign: "center",
              marginTop: "200px",
            }}
          >
            Fetching Your Order
          </p>
        )}
      </div>
    </div>
  );
};
export default Orders;
