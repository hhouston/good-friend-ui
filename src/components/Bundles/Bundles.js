import React from 'react'

import { Typography } from 'antd'
import './styles.css'
import { PrimaryButton } from '../common'
import FadeInSection from '../FadeInSection'

const { Title } = Typography

const Bundles = () => (
    <FadeInSection direction="up">
        <div className="bundles">
            <div className="bundles-content">
                <Title
                    type="secondary"
                    level={2}
                    className="subtitle"
                    style={{ color: '#2B137D' }}
                >
                    Bundle Gift Event
                </Title>
                <p className="bundles-paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc porttitor vulputate sem vel facilisis. Vestibulum in
                    porttitor ex, non ultrices purus. Curabitur et commodo
                    nulla. Donec viverra gravida orci, sit amet molestie odio
                    mattis a. Nulla vestibulum blandit metus eu maximus.
                    Vestibulum ante ipsum primis in faucibus
                </p>
                <PrimaryButton>Learn More</PrimaryButton>
            </div>
            <img
                src={require('../../images/bundles.svg')}
                className="bundles-image"
            />
        </div>
    </FadeInSection>
)

export default Bundles
