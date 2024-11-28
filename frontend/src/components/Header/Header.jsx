import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Header.css";

const Header = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleButtonClick = () => {
    navigate("/products"); // Redirect to the Products page
  };

  return (
    <div className="header">
      <div className="header-contents">
        <h2>Discover the power of Ermes!</h2>
        <p>
          Experience lightning-fast performance and ultra-lightweight designs
          with our cutting-edge laptops and desktops. Crafted for speed and
          portability, Ermes products deliver seamless performance to keep you
          ahead of the curve, whether for work or play.
        </p>
        <button onClick={handleButtonClick}>View Our Products</button>
      </div>
    </div>
  );
};

export default Header;
