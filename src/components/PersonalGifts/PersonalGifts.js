import React from 'react'
import './styles.css'
import FadeInSection from '../FadeInSection'
import { Typography } from 'antd'
const { Title } = Typography

const PersonalGifts = ({ titleSize, contentRef }) => {
    return (
        <FadeInSection direction="up">
            <div ref={contentRef} className="personal-gifts-container">
                <img
                    src={require('../../images/envelope-circled.png')}
                    className="personal-gifts-image"
                    alt=""
                />
                <div className="personal-gifts-content">
                    <Title
                        type="secondary"
                        level={2}
                        className="subtitle"
                        style={{ fontSize: titleSize }}
                    >
                        Personal Gifts
                    </Title>
                    <p className="personal-gifts-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc porttitor vulputate sem vel facilisis. Vestibulum
                        in porttitor ex, non ultrices purus. Curabitur et
                        commodo nulla. Donec viverra gravida orci, sit amet
                        molestie odio mattis a. Nulla vestibulum blandit metus
                        eu maximus. Vestibulum ante ipsum primis in faucibus
                    </p>
                    <p className="personal-gifts-subtext">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
                <img
                    src={require('../../images/cropped-blob.png')}
                    className="personal-gifts-blob"
                    alt=""
                />
            </div>
        </FadeInSection>
    )
}

export default PersonalGifts
