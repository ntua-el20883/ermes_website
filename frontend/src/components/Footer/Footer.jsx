import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            At Ermes, we believe that technology should empower, not limit. Our
            journey began with five passionate Electrical and Computer
            Engineering students who shared a vision: to create laptops that
            could keep up with their demanding academic and professional needs.
            Frustrated by the lack of ultra-fast, portable devices in the
            market, they set out to build their own solutions. 
          </p>
          <p>
            What started as a small project has grown into a company 
            dedicated to redefining speed and portability.
            Today, Ermes designs cutting-edge laptops and
            desktops for professionals, gamers, and creators, delivering
            seamless performance to keep you ahead of the curve.
            We innovate with you in mind, blending sleek design,
            powerful technology, and a commitment to excellence in every product.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+0-131-313-1313</li>
            <li>ermesntua@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-coypright">
        Copyright © 2024 Ermes.com - All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
