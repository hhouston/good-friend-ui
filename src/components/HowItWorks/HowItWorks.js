import React from 'react'
import './styles.css'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import { Typography } from 'antd'
const { Title } = Typography

const HowItWorks = ({ titleSize }) => {
    return (
        <div className="how-it-works-container">
            <Title
                type="secondary"
                level={2}
                className="subtitle"
                style={{ fontSize: titleSize }}
            >
                How It Works
            </Title>
            <StepOne />
            <StepTwo />
            <StepThree />
        </div>
    )
}

export default HowItWorks
