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
                  style={{ fontSize: "72px", margin: "0" }}
                >
                  Spread The Love
                </Title>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#5E5E5E",
                    paddingBottom: "24px",
                  }}
                >
                  The gift that keeps on giving
                </p>
                <Button
                  type="primary"
                  shape="round"
                  size="large"
                  onMouseEnter={this.toggleHover}
                  onMouseLeave={this.toggleHover}
                  style={{
                    backgroundColor: "#FF3399",
                    color: "#fff",
                    borderColor: "#FF3399",
                  }}
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

export default withApollo(Home);
