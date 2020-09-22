import React, { useState, useEffect } from 'react'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import { PrimaryButton } from '../common'
import { useHistory } from 'react-router-dom'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'

const SignUp = (props) => {
    const [activeStep, setActiveStep] = React.useState(0)
    const [isMobile, setIsMobile] = useState(0)

    const history = useHistory()

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }

    const redirectHome = () => {
        history.push('/')
    }

    const resize = () => {
        setIsMobile(window.innerWidth < 768)
    }

    const steps = [
        {
            title: '',
            content: <StepOne next={handleNext} />,
        },
        {
            title: '',
            content: <StepTwo next={handleNext} />,
        },
        {
            title: '',
            content: <StepThree isMobile={isMobile} />,
        },
    ]

    useEffect(() => {
        resize()
        window.addEventListener('resize', resize)
        return () => window.removeEventListener('resize', resize)
    })

    return (
        <div className="sign-up-container">
            <div className="sign-up-wrapper">
                <div
                    className="logo-wrapper-form"
                    onClick={() => redirectHome()}
                >
                    <img
                        src={require('../../images/geometric-heart-logo.png')}
                        className="logo-image-form"
                        alt="thank you logo"
                    />

                    <span className="logo-text">THANK YOU.</span>
                </div>
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((step) => (
                        <Step key={step.title}>
                            <StepLabel>{step.title}</StepLabel>
                        </Step>
                    ))}
                </Stepper>

                <div className="steps-content">
                    <div className="form-wrapper">
                        {steps[activeStep].content}
                    </div>
                </div>
            </div>
            <div className="steps-action">
                {activeStep > 0 && (
                    <PrimaryButton
                        type="secondary"
                        style={{ margin: '0 8px' }}
                        onClick={() => handleBack()}
                    >
                        Previous
                    </PrimaryButton>
                )}
                {activeStep < steps.length - 1 && (
                    <PrimaryButton onClick={() => handleNext()}>
                        Skip
                    </PrimaryButton>
                )}
                {activeStep === steps.length - 1 && (
                    <PrimaryButton
                        onClick={() => console.log('Processing complete!')}
                    >
                        Done
                    </PrimaryButton>
                )}
            </div>
        </div>
    )
}

export default SignUp
