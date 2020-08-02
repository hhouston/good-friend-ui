import React, { Component } from "react";
import "./styles.css";
import FadeInSection from "../FadeInSection";
import { PrimaryButton } from "../common";

const StepOne = (props) => {
  return (
    <FadeInSection direction="right">
      <div className="step-container">
        <div className="step-one-section">
          <div className="step-content">
            <PrimaryButton>Step 01</PrimaryButton>
            <p className="step-text">
              Select a package that fits your needs and we will pair you up with
              the curator that can best fulfill your needs
            </p>
          </div>
          <img
            src={require("../../images/step-one.png")}
            className="step-image step-image-right"
          />
        </div>
      </div>
    </FadeInSection>
  );
};

export default StepOne;
