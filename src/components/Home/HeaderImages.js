import React from "react";

const HeaderImages = ({ isMobile }) => {
  return (
    <>
      {isMobile ? null : (
        <img
          src={require("../../images/ty-header.png")}
          className="hero-image"
        />
      )}
      {isMobile ? null : (
        <img
          src={require("../../images/purple-blob.png")}
          className="purple-blob"
        />
      )}
      <img
        src={require("../../images/floating-gift-icon.png")}
        className="floating-gift shake"
      />
    </>
  );
};

export default HeaderImages;
