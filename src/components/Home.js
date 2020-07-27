import React, { Component } from "react";
import "./Home.css";
import NavBar from "./NavBar";
import PersonalGifts from "./PersonalGifts/PersonalGifts";
import HowItWorks from "./HowItWorks/HowItWorks";
import FeaturedItem from "./FeaturedItem/FeaturedItem";
import WhyWeAre from "./WhyWeAre/WhyWeAre";
import { Typography, Form, Input, Button, Modal, Icon, Layout } from "antd";
import { ArrowDownOutlined } from "@ant-design/icons";
import { ApolloConsumer } from "react-apollo";
import Typed from "react-typed";

import gql from "graphql-tag";
import { withApollo } from "react-apollo";
const { Header, Content, Footer } = Layout;

const { Title, Text } = Typography;

export const GET_TEAMS = gql`
  query {
    getTeams {
      id
      name
    }
  }
`;

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false,
      isMobile: false,
      isTablet: false,
    };

    this.toggleHover = this.toggleHover.bind(this);
  }
  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    this.setState({
      isMobile: window.innerWidth < 768,
      isTablet: window.innerWidth < 1012,
    });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize.bind(this));
  }

  toggleHover() {
    this.setState({ hover: !this.state.hover });
  }

  render() {
    const { isMobile, isTablet } = this.state;
    const titleSize = isTablet ? "32px" : "54px";
    const titleTwoSize = isMobile ? "32px" : "38px";
    return (
      <ApolloConsumer>
        {(client) => (
          <div className="app">
            <div className="header-section">
              <Header style={{ background: "transparent", textAlign: "end" }}>
                <NavBar />
              </Header>
              <div className="container">
                <div className="site-layout site-layout-subheader">
                  <div className="main-section">
                    <div className="subheader">
                      <Title
                        type="primary"
                        className="title"
                        style={{
                          margin: "0",
                          fontSize: titleSize,
                          color: isMobile ? "#fff" : "inherit",
                        }}
                      >
                        Your personal gift curator for
                      </Title>
                      <Typed
                        classname="title-typing"
                        strings={[
                          "birthdays",
                          "anniversaries",
                          "Christmas",
                          "graduation",
                          "flowers",
                          "chocolates",
                        ]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop
                        backDelay={1000}
                        style={{
                          fontSize: titleSize,
                          borderBottom: "8px solid #FF3399",
                          color: isMobile ? "#fff" : "inherit",
                        }}
                      ></Typed>
                    </div>
                    {isMobile ? null : (
                      <img
                        src={require("../images/ty-header.png")}
                        className="hero-image"
                      />
                    )}
                    {isMobile ? (
                      <img
                        src={require("../images/responsive-header-image.png")}
                        className="responsive-purple-blob"
                      />
                    ) : (
                      <img
                        src={require("../images/purple-blob.png")}
                        className="purple-blob"
                      />
                    )}
                    <img
                      src={require("../images/floating-gift-icon.png")}
                      className="floating-gift"
                    />
                  </div>
                  <Button
                    onClick={async () => {
                      const data = await client.query({
                        query: GET_TEAMS,
                      });
                      console.log(data);
                    }}
                    className="apply-now-button"
                    type="secondary"
                    shape="round"
                    size="large"
                    onMouseEnter={this.toggleHover}
                    onMouseLeave={this.toggleHover}
                    style={{
                      background:
                        "linear-gradient(90deg,#FF3399 0,#FF3399, 76%,#D03AFD",
                      color: "#fff",
                      border: "none",
                      width: "180px",
                      height: "54px",
                    }}
                  >
                    Apply Now
                  </Button>
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

            <PersonalGifts titleSize={titleTwoSize} />
            <HowItWorks titleSize={titleTwoSize} />
            <FeaturedItem titleSize={titleTwoSize} />
            <WhyWeAre
              titleSize={titleTwoSize}
              isMobile={isMobile}
              isTablet={isTablet}
            />
          </div>
        )}
      </ApolloConsumer>
    );
  }
}

export default withApollo(Home);
