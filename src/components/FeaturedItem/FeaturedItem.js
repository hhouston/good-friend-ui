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
                      Excited about the release of the new gaming consoles
                      or iPhone, but worried about trouble that goes into
                      getting the item first? Apply for our featured gift service
                      and we will handle everything from the preorder to
                      waiting outside of Best Buy (or Apple) store to make
                      sure you get your hands on the first batch!
                    </p>
                </div>
                <img
                    src={require('../../images/featured-items@2x.png')}
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
