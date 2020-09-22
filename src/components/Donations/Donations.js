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
                        Thank You makes it easy to support causes important to
                        you. Select an organization and with each gift you send,
                        Thank You will match proceeds up to $1 (Donations will
                        be kept anon)
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
