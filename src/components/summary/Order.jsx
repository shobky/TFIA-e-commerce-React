const Order = ({ item }) => {
  return (
    <div className="order-item">
      <img src={item.image?.url} alt={item.name} className="order-item-image" />
      <div className="order-item-details">
        <h4 className="order-item-name">
          {item.quantity} x {item.name}
        </h4>
        <p className="order-item-price">
          {item.price.raw * item.quantity}
          <span style={{ fontSize: "15px", fontWeight: "1" }}>EGP</span>
        </p>
      </div>
    </div>
  );
};
export default Order;
