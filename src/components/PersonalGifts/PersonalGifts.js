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
                        Keeping a strong connection with your loved ones is
                        important. Go the extra mile to show your love with our
                        unique tailored gifts. Our personal gift curators will
                        suggest suitable gift ideas and deliver the perfect gift
                        for any occasion at the perfect time.
                    </p>
                    <p className="personal-gifts-subtext">
                        Will ensure you never show up empty handed
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
