import React from 'react'
import './styles.css'
import FadeInSection from '../FadeInSection'
import { Typography } from 'antd'
const { Title } = Typography

const WhyWeAre = ({ titleSize, isTablet, isMobile }) => {
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
                        Building and maintaining relationships with loved ones
                        is already hard and gift buying can be stressful.
                        Pushing off Christmas shopping can lead to a surge in
                        price for popular items, not to mention the rush
                        shipping fees. On top of that, it’s also hard to keep
                        track of what kids like these days. That’s where our
                        personal gift curators can help. Our team of Experts
                        will help ensure you pick out the best gift possible so
                        you never show up empty-handed.
                    </p>
                    <p className="why-text" style={{ fontWeight: '600' }}>
                        Be patient with us, we're just getting started. If you
                        see and report a bug, we'll send you an item from our
                        first batch of swag.
                    </p>
                </div>
                {isTablet ? (
                    <>
                        <img
                            src={require('../../images/why-section-transparent.png')}
                            className="why-image"
                            alt=""
                        />
                        <img
                            src={require('../../images/why-section-blob.png')}
                            className="why-image-transparent"
                            alt=""
                        />
                    </>
                ) : (
                    <img
                        src={require('../../images/why-section.png')}
                        className="why-image"
                        alt=""
                    />
                )}
            </div>
        </FadeInSection>
    )
}

export default WhyWeAre
