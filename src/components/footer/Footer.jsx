import React from "react";
import "./footer.css";

//footer component that allows a user to subscribe to a newsletter
const Footer = () => {
  return (
    <div className="footer-main">
      <h3 className="footer-title">Save time, save money!</h3>
      <p className="footer-msg">Sign up and we'll send the best deals to you</p>
      <div className="form-box">
        <form className="footer-form">
          <input type="text" placeholder="Your email address" />
          <button type="button">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
