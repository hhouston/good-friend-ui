import React, { Component } from "react";
import "./styles.css";
import FadeInSection from "../FadeInSection";

import { Button } from "antd";

class HowItWorks extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FadeInSection direction="right">
        <div className="step-container">
          <div className="step-one-section">
            <div className="step-content step-content-left">
              <Button
                shape="round"
                style={{
                  backgroundColor: "#FF3399",
                  color: "#fff",
                  borderColor: "#FF3399",
                }}
              >
                Step 03
              </Button>
              <p
                style={{
                  fontSize: "14px",
                  color: "#7A7A7A",
                  paddingTop: "16px",
                }}
              >
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
  }
}

export default HowItWorks;
