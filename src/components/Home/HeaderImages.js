import React from "react";
import HeaderImage from "../../images/thank-you-header.png";
import HeaderImage2 from "../../images/thank-you-header@2x.png";

const HeaderImages = ({ isMobile }) => {
  return (
    <>
      {
        <img
          src={HeaderImage}
          srcSet={`${HeaderImage} 1x, ${HeaderImage2} 2x`}
          className={"hero-image"}
        />
      }
      {
        <img
          src={require("../../images/purple-blob.png")}
          className="purple-blob"
        />
      }
      <img
        src={require("../../images/floating-gift-icon.png")}
        className="floating-gift shake"
      />
    </>
  );
};

export default HeaderImages;
