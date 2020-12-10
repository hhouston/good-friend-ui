import React, { useState, useRef } from 'react'
import { map, pipe, pick } from 'ramda'
import StepThree from './StepThree'
import StepLovedOne from './StepLovedOne'
import { Typography, Button } from 'antd'
import { gql, useMutation } from '@apollo/client'

import { ADD_EVENT_WITH_FRIEND } from '../../mutations/createEvent'

const { Title } = Typography

const PlusIcon = (props) => (
    <svg
        style={{
            width: '20px',
            height: '20px',
            borderRadius: '24px',
            backgroundColor: 'rgb(255, 51, 153)'
        }}
        stroke="#fff"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        ></path>
    </svg>
)

const StepEvent = ({
    handleBack,
    handleNext,
    userId,
    signUpForm,
    updateSignUpForm
}) => {
    const [addEvent, { data }] = useMutation(ADD_EVENT_WITH_FRIEND)

    const eventFormRef = useRef(null)
    const eventCardsRef = useRef(null)

    const getDimensions = (ele) => {
        const { height } = ele.getBoundingClientRect()
        const offsetTop = ele.offsetTop
        const offsetBottom = offsetTop + height

        return {
            height,
            offsetTop,
            offsetBottom
        }
    }

    const scrollTo = (ele) => {
        ele.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }

    const handleSubmit = async () => {
        const { input, friend } = signUpForm
        const data = await addEvent({
            variables: { input, friends: [friend] }
        })
        handleNext()
    }

    return (
        <div className="step-event">
            <div>
                <div ref={eventFormRef}>
                    <StepThree
                        signUpForm={signUpForm}
                        updateSignUpForm={updateSignUpForm}
                        scrollToNextSection={() =>
                            scrollTo(eventCardsRef.current)
                        }
                    />
                </div>
                <div ref={eventCardsRef}>
                    <StepLovedOne
                        formData={signUpForm}
                        updateFormData={updateSignUpForm}
                        handleSubmit={handleSubmit}
                        handleBack={handleBack}
                        handleNext={handleNext}
                    />
                </div>
            </div>
            <div className="signup-buttons">
                <Button
                    shape="round"
                    type="secondary"
                    size="large"
                    onClick={handleBack}
                    className="bundle-card-button"
                >
                    Previous
                </Button>
                <Button
                    shape="round"
                    type="primary"
                    size="large"
                    className="bundle-card-button"
                    onClick={handleSubmit}
                    disabled={!signUpForm.friend.name && !signUpForm.friend.age}
                >
                    Next
                </Button>
            </div>
        </div>
    )
}

export default StepEvent
