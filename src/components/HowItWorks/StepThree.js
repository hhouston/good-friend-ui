import React, { Component } from "react";
import "./styles.css";
import FadeInSection from "../FadeInSection";
import { PrimaryButton } from "../common";

const StepThree = (props) => {
  return (
    <FadeInSection direction="right">
      <div className="step-container">
        <div className="step-one-section">
          <div className="step-content step-content-left">
            <PrimaryButton>Step 03</PrimaryButton>
            <p className="step-text">
              Your personal curator will handle the rest.
            </p>
          </div>
          <img
            src={require("../../images/step-three.png")}
            className="step-image step-image-right"
          />
        </div>
      </div>
    </FadeInSection>
  );
};

export default StepThree;
