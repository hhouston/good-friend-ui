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
                        What We Are
                    </Title>
                    <p className="personal-gifts-text">
                        Keeping a strong connection with your loved ones is
                        important. Handling the holiday panic or knowing what to
                        buy someone can be stressful. Our personal gift curators
                        are experts in a variety of areas and will suggest
                        suitable gifts for your loved one for any occasion -
                        completely free!
                    </p>
                    <p className="personal-gifts-subtext">
                        Never forget a special occasion or overpay for gifts
                        again.
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
