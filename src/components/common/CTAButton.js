import React, { Component } from "react";
import "./styles.css";
import { Button } from "antd";

const CTAButton = ({
  onClick,
  className,
  onMouseEnter,
  onMouseLeave,
  children,
}) => {
  return (
    <Button
      className={className}
      type="secondary"
      size="large"
      shape="round"
      style={{
        background: "linear-gradient(90deg,#FF3399 0,#FF3399, 76%,#D03AFD",
        color: "#fff",
        border: "none",
        width: "180px",
        height: "54px",
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </Button>
  );
};

export default CTAButton;
