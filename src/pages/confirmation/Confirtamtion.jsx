import React from "react";
import "../../styles/confirmation.css";
import PropTypes from "prop-types";
import { HiArrowSmLeft } from "react-icons/hi";

const Confirmation = ({displayedMessage}) => {
  console.log(displayedMessage)
  return (
    <div className="comfirmation">
      <a href="/shop">
        <HiArrowSmLeft />
      </a>
      <div className="msg-container">
        <h1 className="msg first-msg">SUCSESS !</h1>
        <p style={{color:'White'}} className="msg sub-msg">
          if you didn't recieve an email soon check the spelling of your email, or check your spam folder
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
