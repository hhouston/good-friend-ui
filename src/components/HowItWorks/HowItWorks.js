import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import './styles.css'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import { Typography, Button } from 'antd'
const { Title } = Typography


const HowItWorks = ({ titleSize }) => {
  const initialState = {
      hover: false,
      scrollTop: 0,
      contentInView: false,
      contentHeight: 0,
      imageLoaded: 0
  }


  const [state, updateState] = useState(initialState)
    const history = useHistory()

    const applyNowClick = () => {
      history.push('/signup')
    }

    const toggleHover = () => {
        updateState({ ...state, hover: !state.hover })
    }

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
            <Button
                onClick={() => applyNowClick()}
                className="apply-now-button"
                type="secondary"
                shape="round"
                size="large"
                onMouseEnter={toggleHover}
                onMouseLeave={toggleHover}
                style={{
                    background:
                        'linear-gradient(90deg,#FF3399 0,#FF3399, 76%,#D03AFD',
                    color: '#fff',
                    border: 'none',
                    width: '180px',
                    height: '54px'
                }}
            >
                Get started
            </Button>
        </div>
    )
}

export default HowItWorks
