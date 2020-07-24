import React, { Component } from "react";
import "./styles.css";
import FadeInSection from "../FadeInSection";
import { Typography } from "antd";
const { Title } = Typography;

class FeaturedItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { titleSize } = this.props;
    return (
      <FadeInSection direction="up">
        <div className="featured-item-container">
          <div className="featured-item-content">
            <Title
              type="secondary"
              level={2}
              className="subtitle"
              style={{ fontSize: titleSize }}
            >
              Featured Item
            </Title>
            <p className="featured-item-text">
              Excited about the next gen gaming consoles? How about the new
              iPhone? Apply for our featured gift service and we will handle
              everything from the preorder to waiting outside of the Best Buy
              (or Apple) store to make sure you get the first batch of devices.
            </p>
          </div>
          <img
            src={require("../../images/featured-item.png")}
            className="featured-item-image"
          />
          <img
            src={require("../../images/blob-2.png")}
            className="blob-image-2"
          />
        </div>
      </FadeInSection>
    );
  }
}

export default FeaturedItem;
