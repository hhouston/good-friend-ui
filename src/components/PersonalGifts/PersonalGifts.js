import React from 'react'
import './styles.css'
import FadeInSection from '../FadeInSection'
import LazyLoad from 'react-lazyload';
import { Typography } from 'antd'
import EnvelopeCircled from '../../images/envelope-circled.png'
import CroppedBlob from '../../images/cropped-blob.png'
const { Title } = Typography

const PersonalGifts = ({ titleSize, contentRef }) => {
    return (
        <FadeInSection direction="up">
            <div ref={contentRef} className="personal-gifts-container">
                <LazyLoad>
                    <img
                        src={EnvelopeCircled}
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
                        src={CroppedBlob}
                        className="personal-gifts-blob"
                        alt=""
                    />
                </LazyLoad>
            </div>
        </FadeInSection>
    )
}

export default PersonalGifts
