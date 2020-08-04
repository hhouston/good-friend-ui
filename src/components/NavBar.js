import React, { Component, useState } from "react";
import "./NavBar.css";
import { MenuOutlined } from "@ant-design/icons";
import { Menu, Icon, Button, Typography, Drawer } from "antd";
import { PrimaryButton } from "./common";
import BlobImage from "../images/purple-blob.png";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { Text } = Typography;

const Navbar = ({ isMobile }) => {
  const [current, setCurrent] = useState(0);
  const [hover, setHover] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  const toggleHover = () => {
    setHover(!hover);
  };

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  if (!isMobile) {
    return (
      <div className="navbar-wrapper">
        <div className="logo-wrapper">
          <img
            src={require("../images/geometric-heart-logo.png")}
            className="logo-image"
          />

          <span className="logo">THANK YOU.</span>
        </div>
        <Menu
          className="navbar"
          onClick={handleClick}
          selectedKeys={[current]}
          mode="horizontal"
          theme="dark"
          style={{ borderBottom: "none", zIndex: "30" }}
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
            shape="round"
            size="medium"
            ghost={!hover}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
            style={{ border: "2px solid #fff" }}
          >
            Sign in
          </Button>
        </Menu>
      </div>
    );
  }
  return (
    <div className="mobile-header">
      <div className="mobile-logo-wrapper">
        <img
          src={require("../images/geometric-heart-logo.png")}
          className="logo-image"
        />
        <span className={visible ? "logo logo-open" : "logo"}>THANK YOU</span>
      </div>
      <MenuOutlined onClick={showDrawer} style={{ color: "#fff" }} />
      <Drawer
        title=" "
        onClose={onClose}
        visible={visible}
        width="100%"
        bodyStyle={{
          lineHeight: "3.5",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        headerStyle={{
          borderBottom: "none",
          backgroundImage: `url(${BlobImage})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right top",
        }}
      >
        <p>Pricing Page</p>
        <p>Packages</p>
        <p>About</p>
        <p>Careers</p>
        <PrimaryButton type="secondary">Sign In</PrimaryButton>
      </Drawer>
    </div>
  );
};

export default Navbar;
