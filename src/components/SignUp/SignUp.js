import React, { useState, useEffect } from 'react'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import StepFour from './StepFour'
import { PrimaryButton } from '../common'
import { useHistory } from 'react-router-dom'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import { useMutation } from '@apollo/client'
import { gql } from '@apollo/client'

export const CREATE_EVENT = gql`
    mutation createEvent($event: EventInput!) {
        createEvent(event: $event)
    }
`

const initialFormData = {
    date: null,
    type: null,
    userId: 2,
    status: 'NEW',
}
const SignUp = (props) => {
    const [activeStep, setActiveStep] = React.useState(0)
    const [isMobile, setIsMobile] = useState(0)
    const [formData, updateFormData] = useState(initialFormData)

    const [addEvent, { data }] = useMutation(CREATE_EVENT)

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

    const updateForm = (field, value) => {
        updateFormData({
            ...formData,
            [field]: value,
        })
        console.log(formData)
    }

    const addNewEvent = () => {
        const data = addEvent({
            variables: { event: formData },
        })
        console.log(data)
    }

    const steps = [
        {
            key: 1,
            title: '',
            content: <StepOne next={handleNext} updateForm={updateForm} />,
        },
        {
            key: 2,
            title: '',
            content: (
                <StepTwo
                    isMobile={isMobile}
                    next={handleNext}
                    updateForm={updateForm}
                />
            ),
        },
        {
            key: 3,
            title: '',
            content: <StepThree isMobile={isMobile} updateForm={updateForm} />,
        },
        {
            key: 4,
            title: '',
            content: <StepFour />,
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
                    {steps.map((index, step) => (
                        <Step key={index}>
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
                    <PrimaryButton onClick={() => addNewEvent()}>
                        Done
                    </PrimaryButton>
                )}
            </div>
        </div>
    )
}

export default SignUp
