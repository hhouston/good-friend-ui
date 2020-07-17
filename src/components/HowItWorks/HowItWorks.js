import React, { Component } from "react";
import "./styles.css";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
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
      <div className="how-it-works-container">
        <Title type="secondary" level={2} className="subtitle">
          How It Works
        </Title>
        <StepOne />
        <StepTwo />
        <StepThree />
      </div>
    );
  }
}

export default HowItWorks;
