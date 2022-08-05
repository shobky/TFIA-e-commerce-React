import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Home from "./pages/home/Home";
import "./global.css";
import Shop from "./pages/shop/Shop";
import Checkout from "./pages/checkout/Checkout";
import { useEffect, useState } from "react";
import commerce from "./lib/commerce";
import Confirmation from "./pages/confirmation/Confirtamtion";
import Cart from "./pages/cart/Cart";
import Product from "./pages/product/Product";
import Error from "./pages/Error";

const App = () => {
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState({});
  const [myUser, setMyUser] = useState({});
  const [shopProducts, setShopProducts] = useState([]);

  const fetchSingleProducts = () => {
    commerce.products.list().then((products) => {
      setShopProducts(products.data);
    });
  };

  useEffect(() => {
    fetchSingleProducts();
    fetchCategories();
    fetchCart();
  }, []);

  const fetchCategories = () => {
    commerce.categories
      .list()
      .then((categories) => {
        setCategories(categories.data);
      })
      .catch((error) => {
        console.log("error fetching categories", error);
      });
  };

  const fetchCart = () => {
    commerce.cart
      .retrieve()
      .then((cart) => {
        setCart(cart);
      })
      .catch((error) => {
        console.log("errorr fetching cart", error);
      });
  };

  const handleAddToCart = (productId, quantity) => {
    commerce.cart
      .add(productId, quantity)
      .then((item) => {
        setCart(item.cart);
        // console.log('item added');
      })
      .catch((error) => {
        console.error("error adding ot cart", error);
      });
  };
  const handleRemoveFromCart = (lineItemId) => {
    commerce.cart
      .remove(lineItemId)
      .then((resp) => {
        setCart(resp.cart);
      })
      .catch((error) => {
        console.error(
          "There was an error removing the item from the cart",
          error
        );
      });
  };

  const handleUpdateCartQty = (lineItemId, quantity) => {
    commerce.cart
      .update(lineItemId, { quantity })
      .then((resp) => {
        setCart(resp.cart);
      })
      .catch((error) => {
        console.log("error updaing cart items", error);
      });
  };

  const handleEmptyCart = () => {
    commerce.cart
      .empty()
      .then((resp) => {
        setCart(resp.cart);
      })
      .catch((error) => {
        console.error("There was an error emptying the cart", error);
      });
  };

  const handleUserInfo = (inputs) => {
    setMyUser({
      firstName: inputs.firstName,
      lastName: inputs.lastName,
      email: inputs.email,
      phoneNumber: inputs.phoneNumber,
    });
  };

  return (
    <BrowserRouter>
      <Navigation cart={cart} />
      <div>
        <Routes>
          <Route path="/" element={<Home cart={cart} />} />
          <Route
            path="shop"
            element={
              <Shop
                handleAddToCart={handleAddToCart}
                cart={cart}
                categories={categories}
              />
            }
          />
          {cart.total_items ? (
            <Route
              path="checkout"
              element={
                <Checkout
                  handleEmptyCart={handleEmptyCart}
                  handleUserInfo={handleUserInfo}
                  cart={cart}
                  fetchCart={fetchCart}
                />
              }
            />
          ) : (
            "no"
          )}
          <Route
            path={`/checkout/confirmation_${cart.id}`}
            element={
              <Confirmation myUser={myUser} cart={cart} fetchCart={fetchCart} />
            }
          />
          <Route
            path="/shop/cart"
            element={
              <Cart
                cart={cart}
                onRemoveFromCart={handleRemoveFromCart}
                onUpdateCartQty={handleUpdateCartQty}
                onEmptyCart={handleEmptyCart}
              />
            }
          />
          {/* <Route
            path={`/shop/product`}
            element={
              <Product handleAddToCart={handleAddToCart} product={product} />
            }
          /> */}
          {shopProducts.map((shopProduct) => (
            <Route
              key={shopProduct.id}
              path={`/shop/product_details_${shopProduct.id}`}
              element={
                <Product
                  onRemoveFromCart={handleRemoveFromCart}
                  shopProducts={shopProducts}
                  cart={cart}
                  shopProduct={shopProduct}
                  onAddToCart={handleAddToCart}
                />
              }
            />
          ))}
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
