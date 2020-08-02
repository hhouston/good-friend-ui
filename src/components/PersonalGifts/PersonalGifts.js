import React, { Component } from "react";
import "./styles.css";
import FadeInSection from "../FadeInSection";
import { Typography } from "antd";
const { Title } = Typography;

const PersonalGifts = ({ titleSize, contentRef }) => {
  return (
    <FadeInSection direction="up">
      <div ref={contentRef} className="personal-gifts-container">
        <img
          src={require("../../images/envelope-circled.png")}
          className="personal-gifts-image"
        />
        <div className="personal-gifts-content">
          <Title
            type="secondary"
            level={2}
            className="subtitle"
            style={{ fontSize: titleSize }}
          >
            Personal Gifts
          </Title>
          <p className="personal-gifts-text">
            Keeping a strong connection with your loved ones is important. Our
            personal gift curators will help pick out (and deliver) the perfect
            present for any occasion.
          </p>
          <p className="personal-gifts-subtext">
            Will ensure you never show up empty handed
          </p>
        </div>
        <img
          src={require("../../images/cropped-blob.png")}
          className="personal-gifts-blob"
        />
      </div>
    </FadeInSection>
  );
};

export default PersonalGifts;
