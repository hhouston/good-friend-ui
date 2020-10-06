import Lottie from 'react-lottie'
import * as animationData from '../../utils/giftData.json'
import React, { useState } from 'react'
import './styles.css'

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
    },
}

const Complete = ({ isMobile, onFormChange }) => {
    return (
        <div>
            <Lottie options={defaultOptions} />
        </div>
    )
}

export default Complete
