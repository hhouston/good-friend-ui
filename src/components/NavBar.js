import React, { Component } from "react";
import "./NavBar.css";
import { Menu, Icon, Button, Typography } from "antd";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { Text } = Typography;

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: "home",
      hover: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.toggleHover = this.toggleHover.bind(this);
  }

  handleClick(e) {
    this.setState({ current: e.key });
  }

  toggleHover() {
    this.setState({ hover: !this.state.hover });
  }

  render() {
    return (
      <div className="navbar-wrapper">
        <Menu
          className="navbar"
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
          style={{ borderBottom: "none" }}
        >
          <Menu.Item className="navbar-item" key="pricing">
            Pricing Page
          </Menu.Item>
          <Menu.Item className="navbar-item" key="about">
            About
          </Menu.Item>
          <Menu.Item className="navbar-item" key="careers">
            Careers
          </Menu.Item>
          <Button
            type="primary"
            shape="round"
            size="medium"
            ghost={!this.state.hover}
            onMouseEnter={this.toggleHover}
            onMouseLeave={this.toggleHover}
          >
            Logout
          </Button>
        </Menu>
      </div>
    );
  }
}

export default NavBar;
