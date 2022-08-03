import { useEffect, useState } from "react";
import commerce from "../../lib/commerce";
import ProductsList from "../../components/products/ProductsLisr";
import "../../styles/shop.css";
import "../../styles/cart.css";
import "../../styles/categories.css";
import { HiShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";

const Shop = ({ categories, handleAddToCart, cart, handleProduct }) => {
  const [slug, setSlug] = useState();
  const [products, setProducts] = useState([]);
  console.log(products)

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    commerce.products
      .list({ category_slug: slug })
      .then((products) => {
        setProducts(products.data);
      })
      .catch((error) => {
        console.log("There was an error fetching the products", error);
      });
  };
  return (
    <div className="shop-page">
      <Link className="nav__cart-open" to="/shop/cart">
        <HiShoppingCart size="35px" icon="shopping-bag" color="lightGrey" />
        <span className="cart-qty">{cart.total_items}</span>
      </Link>

      {/* <CartIcon
        className="cart-nav"
        cart={cart}
        onUpdateCartQty={handleUpdateCartQty}
        onRemoveFromCart={handleRemoveFromCart}
        onEmptyCart={handleEmptyCart}
      /> */}
      <div className="shop_container">
        <div className="categories">
          <h1>categories</h1>
          <p
            onClick={() => setSlug() & fetchProducts()}
            className="category_name"
          >
            All
          </p>

          {categories.map((category) => (
            <li
              style={{ cursor: "pointer" }}
              key={category.slug}
              className="category_name"
              onClick={() =>
                category.products
                  ? setSlug(category.slug) & fetchProducts()
                  : window.alert(`sorry, category doesn't exist`)
              }
            >
              {category.slug}
            </li>
          ))}
        </div>
        <div className="products-container">
          <ProductsList handleProduct={handleProduct} onAddToCart={handleAddToCart} products={products} />
        </div>
      </div>
    </div>
  );
};
export default Shop;
