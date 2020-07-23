import React, { Component } from "react";
import "./Home.css";
import NavBar from "./NavBar";
import PersonalGifts from "./PersonalGifts/PersonalGifts";
import HowItWorks from "./HowItWorks/HowItWorks";
import { Typography, Form, Input, Button, Modal, Icon, Layout } from "antd";
import { ArrowDownOutlined } from "@ant-design/icons";

import gql from "graphql-tag";
import { withApollo } from "react-apollo";
const { Header, Content, Footer } = Layout;

const { Title, Text } = Typography;

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false,
      isMobile: false,
    };

    this.toggleHover = this.toggleHover.bind(this);
  }
  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    this.setState({ isMobile: window.innerWidth < 768 });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize.bind(this));
  }

  toggleHover() {
    this.setState({ hover: !this.state.hover });
  }

  render() {
    const { isMobile } = this.state;
    const titleSize = isMobile ? "32px" : "48px";
    return (
      <div className="app">
        <div className="header-section">
          <Header style={{ background: "transparent", textAlign: "end" }}>
            <NavBar />
          </Header>
          <div className="container">
            <div className="site-layout site-layout-subheader">
              <div>
                <div className="subheader">
                  <Title
                    type="primary"
                    className="title"
                    style={{ margin: "0", fontSize: titleSize }}
                  >
                    Spread The Love
                  </Title>
                  <p
                    style={{
                      fontSize: "16px",
                      color: "#53467E",
                      paddingBottom: "24px",
                    }}
                  >
                    The gift that keeps on giving
                  </p>
                  <Button
                    type="secondary"
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
                <div className="header-image-section">
                  <img src={require("../images/header-14.png")} />
                  <img src={require("../images/header-11.png")} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="subheader-separator">
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
        </div>

        <PersonalGifts />
        <HowItWorks />
      </div>
    );
  }
}

export default withApollo(Home);
