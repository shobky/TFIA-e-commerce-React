import { useEffect, useState } from "react";
import commerce from "../../lib/commerce";
import ProductsList from "../../components/products/ProductsLisr";
import "../../styles/shop.css";
import "../../styles/cart.css";
import "../../styles/categories.css";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

const Shop = ({ categories, handleAddToCart, cart, onSearchInput }) => {
  const [slug, setSlug] = useState();
  const [products, setProducts] = useState([]);

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
        <FiShoppingCart size="35px" icon="shopping-bag" color="lightGrey" />
        <span className="cart-qty">{cart.total_items}</span>
      </Link>

      <div className="shop_container">
        <div className="categories">
            <h1>categories</h1>
          <div className="category-list">
            <p
              onClick={() => setSlug() & fetchProducts()}
              className="category_name"
            >
              All{" "}
              <span
                style={{
                  fontSize: ".7rem",
                  color: "lightGray",
                  position: "relative",
                  bottom: "2px",
                }}
              >
                douple click to open
              </span>
            </p>

            {categories.map((category) =>
              category.products ? (
                <li
                  style={{ cursor: "pointer" }}
                  key={category.slug}
                  className="category_name"
                  onClick={() => setSlug(category.slug) & fetchProducts()}
                >
                  {category.slug}
                </li>
              ) : (
                ""
              )
            )}
          </div>
        </div>
        <div className="products-container">
          <ProductsList onAddToCart={handleAddToCart} products={products} />
        </div>
      </div>
    </div>
  );
};
export default Shop;
