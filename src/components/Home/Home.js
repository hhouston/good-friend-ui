import React, { Component, useState, useEffect, useRef } from "react";
import "./styles.css";
import NavBar from "../NavBar";
import PersonalGifts from "../PersonalGifts";
import HowItWorks from "../HowItWorks";
import FeaturedItem from "../FeaturedItem";
import WhyWeAre from "../WhyWeAre";
import Donations from "../Donations";
import Footer from "../Footer";
import HeaderImages from "./HeaderImages";
import { Typography, Form, Input, Button, Modal, Icon, Layout } from "antd";
import { ArrowDownOutlined } from "@ant-design/icons";
import Typed from "react-typed";
import { useLazyQuery, gql } from "@apollo/client";
import { TYPED_STRINGS } from "../../utils/constants";
import { useHistory } from "react-router-dom";

const { Header, Content } = Layout;

const { Title, Text } = Typography;

export const GET_TEAMS = gql`
  query {
    getTeams {
      id
      name
    }
  }
`;

const Home = (props) => {
  const [hover, setHover] = useState(0);
  const [isTablet, setIsTablet] = useState(0);
  const [isMobile, setIsMobile] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const [contentInView, setContentInView] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);

  const history = useHistory();

  const [getTeams, { loading, data }] = useLazyQuery(GET_TEAMS, {
    onCompleted: () => console.log(data),
  });

  const applyNowClick = () => {
    getTeams();
    history.push("/signup");
  };

  const contentRef = useRef(null);

  const resize = () => {
    setIsTablet(window.innerWidth < 1012);
    setIsMobile(window.innerWidth < 768);
  };

  const findContentHeight = () => {
    const { top } = contentRef.current.getBoundingClientRect();
    const offset = top + scrollTop - 120;
    setContentHeight(offset);
  };

  useEffect(() => {
    resize();
    findContentHeight();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  });

  useEffect(() => {
    const { top } = contentRef.current.getBoundingClientRect();
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
      setContentInView(e.target.documentElement.scrollTop >= top);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  const toggleHover = () => {
    setHover(!hover);
  };

  const scrollToRef = (ref) => {
    window.scrollTo({ top: contentHeight, behavior: "smooth" });
  };

  const titleSize = isTablet ? "32px" : "54px";
  const titleTwoSize = isMobile ? "32px" : "38px";

  return (
    <div className="app">
      <div className="header-section">
        <Header style={{ background: "transparent", textAlign: "end" }}>
          <NavBar isMobile={isMobile} />
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
                  strings={TYPED_STRINGS}
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
              <HeaderImages isMobile={isMobile} isVisible={contentInView} />
            </div>
            <Button
              onClick={() => applyNowClick()}
              className="apply-now-button"
              type="secondary"
              shape="round"
              size="large"
              onMouseEnter={toggleHover}
              onMouseLeave={toggleHover}
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
          onClick={() => scrollToRef(contentRef)}
          ghost
          style={{
            boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
            color: "#2b137d",
          }}
        >
          <ArrowDownOutlined />
        </Button>
      </div>

      <PersonalGifts titleSize={titleTwoSize} contentRef={contentRef} />
      <HowItWorks titleSize={titleTwoSize} />
      <FeaturedItem titleSize={titleTwoSize} />
      <WhyWeAre
        titleSize={titleTwoSize}
        isMobile={isMobile}
        isTablet={isTablet}
      />
      <Donations titleSize={titleTwoSize} />
      <Footer titleSize={titleTwoSize} />
    </div>
  );
};

export default Home;
