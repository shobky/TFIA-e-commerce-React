// import React, { useState } from "react";
// import Cart from "../../components/cart/Cart";
// import PropTypes from "prop-types";
// import "../../styles/shop.css";
// import "../../styles/cart.css";
// import { HiShoppingCart } from "react-icons/hi";

// const CartIcon = ({
//   cart,
//   onUpdateCartQty,
//   onRemoveFromCart,
//   onEmptyCart,
// }) => {
//   const [isCartVisible, setCartVisible] = useState(false);

//   return (
//     <div className="nav">
//       <div className="nav__cart" onClick={() => setCartVisible(!isCartVisible)}>
//         {!isCartVisible ? (
//           <button className="nav__cart-open">
//             <HiShoppingCart size="35px" icon="shopping-bag" color="lightGrey" />
//             {cart !== null ? (
//               <span className="cart-qty">{cart.total_items}</span>
//             ) : (
//               ""
//             )}
//           </button>
//         ) : (
//           <button className="nav__cart-close">
//             <p className="close-cart">X</p>
//           </button>
//         )}
//       </div>
//       {isCartVisible && (
//         <div className="cart-container">
//           <Cart
//             cart={cart}
//             onUpdateCartQty={onUpdateCartQty}
//             onRemoveFromCart={onRemoveFromCart}
//             onEmptyCart={onEmptyCart}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default CartIcon;

// CartIcon.propTypes = {
//   cart: PropTypes.object,
//   onUpdateCartQty: PropTypes.func,
//   onRemoveFromCart: PropTypes.func,
//   onEmptyCart: PropTypes.func,
// };
