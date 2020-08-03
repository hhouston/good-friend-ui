import React, { useState, useEffect } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import { PrimaryButton } from "../common";
import { useHistory } from "react-router-dom";

import { Steps, Button, message } from "antd";

const { Step } = Steps;

const SignUp = (props) => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(0);

  const steps = [
    {
      title: "",
      content: <StepOne />,
    },
    {
      title: "",
      content: <StepTwo />,
    },
    {
      title: "",
      content: <StepThree isMobile={isMobile} />,
    },
  ];

  const history = useHistory();

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const redirectHome = () => {
    history.push("/");
  };

  const resize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  });

  return (
    <div className="sign-up-container">
      <div className="logo-wrapper-form" onClick={() => redirectHome()}>
        <img
          src={require("../../images/geometric-heart-logo.png")}
          className="logo-image-form"
        />

        <span className="logo-text">THANK YOU.</span>
      </div>
      <Steps current={current} direction="horizontal" size="small">
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">
        <div className="form-wrapper">{steps[current].content}</div>
      </div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <PrimaryButton onClick={() => next()}>Next</PrimaryButton>
        )}
        {current === steps.length - 1 && (
          <PrimaryButton
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </PrimaryButton>
        )}
        {current > 0 && (
          <PrimaryButton
            type="secondary"
            style={{ margin: "0 8px" }}
            onClick={() => prev()}
          >
            Previous
          </PrimaryButton>
        )}
      </div>
    </div>
  );
};

export default SignUp;
