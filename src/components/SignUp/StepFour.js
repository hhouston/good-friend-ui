import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../../giftData.json'
import { Typography } from 'antd'

const { Title } = Typography

function StepFour() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    }

    return (
        <div>
            <Title level={2} className="subtitle">
                Your event has been saved!
            </Title>
            <p>A curator will reach out to you shortly.</p>
            <Lottie options={defaultOptions} height={400} width={400} />
        </div>
    )
}

export default StepFour
