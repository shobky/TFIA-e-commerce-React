import React from "react";
import "../../styles/confirmation.css";
import { BiCheck } from "react-icons/bi";
import { HiArrowSmLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import gif from "../assets/pablita-delivery.gif";

const Confirmation = ({ displayedMessage }) => {
  console.log(displayedMessage);
  return (
    <div className="comfirmation">
      <Link to="/shop">
        <HiArrowSmLeft />
      </Link>
      <div className="msg-container">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <BiCheck className="confirm_icon" />
        </div>
       <div style={{position:"relative", display:'flex', justifyContent:"center"}}>
       <h1 className="msg first-msg">SUCSESS !</h1>
        <img
          style={{
            backgrouColor: "transparent",
            position:"relative",
            bottom:"3px", 
            left:"10px",
            width: "70px",
          }}
          src={gif}
        />
       </div>

        <p style={{ color: "White" }} className="msg sub-msg">
          we sent you an email with the details to confirm your order. If you
          didn't recieve it check your spam folder !
        </p>
        <br />
      </div>
    </div>
  );
};

export default Confirmation;
// Confirmation.propTypes = {
//   inputs: PropTypes.object,
// };
