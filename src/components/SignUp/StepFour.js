import React, { useEffect } from 'react'
import Lottie from 'react-lottie'
import animationData from '../../giftData.json'
import { Typography } from 'antd'
import { useHistory } from 'react-router-dom'

const { Title } = Typography

function StepFour() {
    const history = useHistory()
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    useEffect(() => {
        setTimeout(() => {
            history.push('/dashboard')
        }, 1500)
    })

    return (
        <div>
            <Title level={2} className="subtitle">
                Your event has been saved!
            </Title>
            <p style={{ color: '#656565' }}>
                A curator will reach out to you shortly.
            </p>
            <Lottie options={defaultOptions} height={400} width={400} />
        </div>
    )
}

export default StepFour
