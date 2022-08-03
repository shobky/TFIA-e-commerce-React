import React from "react";
import Section2Img from "../assets/section2Img.png";
import Section3Img from "../assets/section3-img.webp";
import Section4Img from "../assets/section4-img.png";
import HomeImg from "../assets/HomeImg.png";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import "../../styles/home.css";

const Home = ({ cart }) => {
  return (
    <div className="home-container">
      <Link className="nav__cart-open" to="/shop/cart">
        <FiShoppingCart size="35px" icon="shopping-bag" color="lightGrey" />
        <span className="cart-qty">{cart.total_items}</span>
      </Link>
      <section className="first">
        {window.innerWidth > 600 ? (
          <p className="name"> The Future Is Aesthetic</p>
        ) : (
          <p className="name"> TFIA</p>
        )}

        <div className="body_container">
          <div className="body">
            <p className="text">
              Look at our summer collection{" "}
              <a href="./Shop" className="animation-txt">
                here
              </a>
            </p>
            <img src={HomeImg} alt="model" className="home-photo" />
          </div>
        </div>
      </section>
      <section className="second">
        <p className="text">PICK YOUR STYLE!</p>
        <img className="section2-img" src={Section2Img} alt="" />
      </section>
      <section className="third">
        <div className="container">
          <div className="white-side">
            <p className="text">Sick of your style?</p>
            <img src={Section3Img} className="section3-img" alt="" />
          </div>
          <div className="dark-side">
            <a className="second-text" href="./Shop">
              Change It
            </a>
          </div>
        </div>
      </section>
      <section className="forth">
        <div className="container">
          <p className="text">Visit Shop and add to your cart</p>
          <p className="second-text">DON'T MISS OUR OFFERS</p>
          <img src={Section4Img} className="section4-img" alt="" />
        </div>
      </section>
    </div>
  );
};

export default Home;
