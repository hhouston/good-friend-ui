import React, { Component, useState } from "react";
import "./NavBar.css";
import { MenuOutlined } from "@ant-design/icons";
import { Menu, Icon, Button, Typography, Drawer } from "antd";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { Text } = Typography;

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: "home",
      hover: false,
      isMobile: false,
      visible: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.toggleHover = this.toggleHover.bind(this);
    this.showDrawer = this.showDrawer.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    this.setState({ isMobile: window.innerWidth <= 768 });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize.bind(this));
  }

  handleClick(e) {
    this.setState({ current: e.key });
  }

  toggleHover() {
    this.setState({ hover: !this.state.hover });
  }

  showDrawer() {
    this.setState({ visible: true });
  }
  onClose() {
    this.setState({ visible: false });
  }

  render() {
    const { isMobile } = this.state;
    return (
      <div className="navbar-wrapper">
        {!isMobile ? (
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
        ) : (
          <>
            <MenuOutlined onClick={this.showDrawer} />
            <Drawer
              title="Basic Drawer"
              placement="right"
              closable={false}
              onClose={this.onClose}
              visible={this.state.visible}
              width="80%"
            >
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
            </Drawer>
          </>
        )}
      </div>
    );
  }
}

export default NavBar;
