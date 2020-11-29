import React, { useState, useRef } from 'react'
import StepThree from './StepThree'
import StepLovedOne from './StepLovedOne'
import { Typography } from 'antd'

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

const StepEvent = () => {
    const [step, setStep] = useState(1)
    const [events, updateEvents] = useState([])

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

    return (
        <div className="step-event">
            <Title className="subtitle" style={{ margin: '0' }}>
                Loved ones
            </Title>
            <p className="signup-step-paragraph">
                Add the different events you're shopping for, along with some
                basic details about each person
            </p>
            <div>
                <div className="all-events-add">
                    <div
                        className="new-event-pill"
                        onClick={() => scrollTo(eventFormRef.current)}
                    >
                        <PlusIcon />
                        <h3 className="add-new-event">Add a new event</h3>
                    </div>
                </div>

                <div
                    ref={eventFormRef}
                    onClick={() => scrollTo(eventCardsRef.current)}
                >
                    <StepThree />
                </div>
                <div ref={eventCardsRef}>
                    <StepLovedOne />
                </div>
            </div>
        </div>
    )
}

export default StepEvent
