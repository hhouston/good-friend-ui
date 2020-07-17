import React, { Component } from "react";
import "./Home.css";
import NavBar from "./NavBar";
import PersonalGifts from "./PersonalGifts/PersonalGifts";
import HowItWorks from "./HowItWorks/HowItWorks";
import { Typography, Form, Input, Button, Modal, Icon, Layout } from "antd";
import { ArrowDownOutlined, ShopOutlined } from "@ant-design/icons";

import gql from "graphql-tag";
import { withApollo } from "react-apollo";
const { Header, Content, Footer } = Layout;

const { Title, Text } = Typography;

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false,
    };

    this.toggleHover = this.toggleHover.bind(this);
  }

  toggleHover() {
    this.setState({ hover: !this.state.hover });
  }

  render() {
    return (
      <div className="app">
        <Header style={{ background: "transparent" }}>
          <NavBar />
        </Header>
        <div className="container">
          <div className="site-layout site-layout-subheader">
            <div>
              <div className="subheader">
                <Title
                  type="primary"
                  className="title"
                  style={{ fontSize: "72px" }}
                >
                  Spread The Love
                </Title>
                <Button
                  type="primary"
                  shape="round"
                  size="large"
                  ghost={!this.state.hover}
                  onMouseEnter={this.toggleHover}
                  onMouseLeave={this.toggleHover}
                  style={{ height: "0", padding: "24px 36px", lineHeight: "0" }}
                >
                  Apply Now
                </Button>
              </div>
              <img
                src={require("../images/ty-header.png")}
                className="subheader-image"
              />
            </div>
          </div>
          <Content className="site-layout">
            <Button
              type="secondary"
              shape="circle"
              size="large"
              ghost
              style={{
                boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
                color: "#2b137d",
              }}
            >
              <ArrowDownOutlined />
            </Button>
            <Text className="thank-you-app-text">thank you.~</Text>
          </Content>
        </div>

        <PersonalGifts />
        <HowItWorks />
      </div>
    );
  }
}

// <div class="cart-item giftIconAdded"></div>
// <img
//   src={require("../images/gift.svg")}
//   className="giftIcon shake jump"
// />

export default withApollo(Home);
