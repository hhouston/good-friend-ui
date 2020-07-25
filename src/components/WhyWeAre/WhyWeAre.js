import React, { Component } from "react";
import "./styles.css";
import FadeInSection from "../FadeInSection";
import { Typography } from "antd";
const { Title } = Typography;

class WhyWeAre extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { titleSize, isTablet, isMobile } = this.props;
    return (
      <FadeInSection direction="up">
        <div className="why-container">
          <div className="why-content">
            <Title
              type="primary"
              level={2}
              className="subtitle"
              style={{ fontSize: titleSize }}
            >
              Why We Are
            </Title>
            <p className="why-text">
              Building and maintaining relationships with loved ones is already
              hard and gift buying can be stressful. Pushing off Christmas
              shopping can lead a surge in price for popular items, not to
              mention the rush shipping fees. On top of that its also hard to
              keep track of what kids like these days. <br />
              Thats where our personal curator can help. Our team of
              professional gift givers will help ensure you pick out the best
              gift possible.
            </p>
          </div>
          {isTablet ? (
            <>
              <img
                src={require("../../images/why-section-transparent.png")}
                className="why-image"
              />
              <img
                src={require("../../images/why-section-blob.png")}
                className="why-image-transparent"
              />
            </>
          ) : (
            <img
              src={require("../../images/why-section.png")}
              className="why-image"
            />
          )}
        </div>
      </FadeInSection>
    );
  }
}

export default WhyWeAre;
