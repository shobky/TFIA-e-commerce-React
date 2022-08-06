import React, { useState } from "react";
import Section2Img from "../assets/section2Img.png";
import Section3Img from "../assets/section3-img.webp";
import Section4Img from "../assets/section4-img.png";
import HomeImg from "../assets/HomeImg.png";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { BsShop } from "react-icons/bs";
import "../../styles/home.css";

const Home = ({ cart }) => {
  const [counter, setCounter] = useState(0);

  const upsideDown = () => {
    const home = document.getElementById("home");
    const btn = document.getElementById("btn");

    if (counter === 0) {
      home.classList.add("stranger_things");
      btn.classList.add("stranger_things");

      setCounter(counter + 1);
    } else {
      home.classList.remove("stranger_things");
      btn.classList.remove("stranger_things");


      setCounter(counter - 1);
    }
  };
  return (
    <div id="home" className="home-container">
      <Link className="nav__cart-open" to="/shop/cart">
        <FiShoppingCart size="35px" icon="shopping-bag" color="lightGrey" />
        <span className="cart-qty">{cart.total_items}</span>
      </Link>
      <Link className="nav__shop" to="/shop">
        <BsShop size="34px" color="lightGrey" />
      </Link>
      <section className="first">
        {window.innerWidth > 600 ? (
          <p className="name"> The Future Is Aesthetic</p>
        ) : (
          <div>
            <p className="name"> TFIA</p>
            <button id="btn" onClick={upsideDown} className="stranger_btn">
              {counter === 0 ? "stranger things ?" : "back ?"}
            </button>
          </div>
        )}

        <div className="body_container">
          <div className="body">
            <p className="text">
              Look at our summer collection{" "}
              <a href="./Shop" className="animation-txt">
                SHOP
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
