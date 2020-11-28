import React from 'react'
import { Typography } from 'antd'
import FadeInSection from '../FadeInSection'

import './styles.css'

const { Title } = Typography

const Correspondents = () => (
    <FadeInSection direction="up">
        <div className="correspondents">
            <div className="correspondents-content">
                <Title
                    type="secondary"
                    level={2}
                    className="subtitle"
                    style={{ color: '#2B137D' }}
                >
                    Correspondents and Niceties
                </Title>
                <p className="correspondents-paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc porttitor vulputate sem vel facilisis. Vestibulum in
                    porttitor ex, non ultrices purus. Curabitur et commodo
                    nulla. Donec viverra gravida orci, sit amet molestie odio
                    mattis a. Nulla vestibulum blandit metus eu maximus.
                    Vestibulum ante ipsum primis in faucibus
                </p>
            </div>
            <img
                src={require('../../images/correspondents.svg')}
                className="correspondents-image"
            ></img>
        </div>
    </FadeInSection>
)

export default Correspondents
