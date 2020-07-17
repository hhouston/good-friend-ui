import React, { Component } from "react";
import "./styles.css";
import StepTwo from "./StepTwo";
import { Menu, Icon, Button, Typography } from "antd";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { Text, Title } = Typography;

class HowItWorks extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="step-container">
        <div className="step-one-section">
          <div className="step-content">
            <Button
              shape="round"
              style={{
                backgroundColor: "#FF3399",
                color: "#fff",
                borderColor: "#FF3399",
              }}
            >
              Step 01
            </Button>
            <p
              style={{ fontSize: "14px", color: "#7A7A7A", paddingTop: "16px" }}
            >
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
    );
  }
}

export default HowItWorks;
