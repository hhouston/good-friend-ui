import React from 'react'
import { Typography } from 'antd'
import { PrimaryButton } from '../common'

import './styles.css'

const { Title } = Typography

const Experts = ({ titleSize, isTablet, isMobile }) => {
    return (
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc porttitor vulputate sem vel facilisis. Vestibulum
                        in porttitor ex, non ultrices purus. Curabitur et
                        commodo nulla. Donec viverra gravida orci, sit amet
                        molestie odio mattis a. Nulla vestibulum blandit metus
                        eu maximus. Vestibulum ante ipsum primis in faucibus
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
    )
}

export default Experts
