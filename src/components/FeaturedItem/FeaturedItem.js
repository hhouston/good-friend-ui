import React from 'react'
import './styles.css'
import FadeInSection from '../FadeInSection'
import { Typography } from 'antd'
const { Title } = Typography

const FeaturedItem = ({ titleSize }) => {
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc porttitor vulputate sem vel facilisis. Vestibulum
                        in porttitor ex, non ultrices purus.
                    </p>
                </div>
                <img
                    src={require('../../images/featured-item.png')}
                    className="featured-item-image"
                    alt=""
                />
                <img
                    src={require('../../images/blob-2.png')}
                    className="blob-image-2"
                    alt=""
                />
            </div>
        </FadeInSection>
    )
}

export default FeaturedItem
