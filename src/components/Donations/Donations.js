import React from 'react'
import './styles.css'
import FadeInSection from '../FadeInSection'
import { Typography } from 'antd'
const { Title } = Typography

const Donations = ({ titleSize }) => {
    return (
        <FadeInSection direction="up">
            <div className="donations-container">
                <img
                    src={require('../../images/donations-image.png')}
                    className="donations-image"
                    alt="donations section"
                />
                <div className="donations-content">
                    <Title
                        type="secondary"
                        level={2}
                        className="subtitle"
                        style={{ fontSize: titleSize }}
                    >
                        Donations
                    </Title>
                    <p className="donations-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc porttitor vulputate sem vel facilisis. Vestibulum
                        in porttitor ex, non ultrices purus. Curabitur et
                        commodo nulla. Donec viverra gravida orci, sit amet
                        molestie odio mattis a. Nulla vestibulum blandit metus
                        eu maximus. Vestibulum ante ipsum primis in faucibus
                    </p>
                    <img
                        src={require('../../images/cropped-blob.png')}
                        className="donations-blob"
                        alt=""
                    />
                </div>
            </div>
        </FadeInSection>
    )
}

export default Donations
