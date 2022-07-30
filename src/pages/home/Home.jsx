import React from "react";
import Section2Img from "../assets/section2Img.png";
import Section3Img from "../assets/section3-img.webp";
import Section4Img from "../assets/section4-img.png";
import HomeImg from "../assets/HomeImg.png";
import "../../styles/home.css";

const Home = () => {
 
  return (
    <div className="home-container">
      <section className="first">
        <p className="name"> THE FUTURE IS AESTHETIC</p>

        <div className="body">
          <p className="text">Look at our summer collection <a href="./Shop" className="animation-txt">here</a></p>
          <img src={HomeImg} alt="model" className="home-photo" />
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
           <a className="second-text" href="./Shop" >Change It</a>
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
