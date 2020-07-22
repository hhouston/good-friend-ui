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
      <FadeInSection direction="left">
        <div className="step-container">
          <div className="step-one-section">
            <img
              src={require("../../images/step-two.png")}
              className="step-image step-image-left"
            />
            <div className="step-content">
              <Button
                shape="round"
                style={{
                  backgroundColor: "#FF3399",
                  color: "#fff",
                  float: "right",
                  borderColor: "#FF3399",
                }}
              >
                Step 02
              </Button>
              <p
                style={{
                  fontSize: "14px",
                  color: "#7A7A7A",
                  paddingTop: "16px",
                  float: "right",
                  textAlign: "end",
                }}
              >
                Select the type of event (birthday, anniversary, graduation,
                etc) the date your gift price range any info you'd like use to
                have on the recipient and your personal curator will handle the
                rest
              </p>
            </div>
          </div>
        </div>
      </FadeInSection>
    );
  }
}

export default HowItWorks;
