import React, { Component } from "react";
import "./styles.css";
import { Button } from "antd";

const PrimaryButton = ({ onClick, className, children }) => {
  return (
    <Button
      shape="round"
      style={{
        backgroundColor: "#FF3399",
        color: "#fff",
        borderColor: "#FF3399",
      }}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
