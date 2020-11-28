import React, { useState, useRef, useEffect } from 'react'
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

    const cardsRef = useRef(null)
    const formRef = useRef(null)

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
        <div
            style={{
                overflowY: 'scroll'
            }}
        >
            <Title className="subtitle" style={{ textAlign: 'center' }}>
                Details about loved one
            </Title>
            <div
                style={{
                    height: '40vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <div
                    className="new-event-pill"
                    onClick={() => scrollTo(cardsRef.current)}
                >
                    <PlusIcon />
                    <h3 className="add-new-event">Add a new event</h3>
                </div>
            </div>
            <div
                ref={cardsRef}
                style={{ height: '60vh' }}
                onClick={() => scrollTo(formRef.current)}
            >
                <StepThree />
            </div>
            <div ref={formRef} style={{ height: '40vh' }}>
                <StepLovedOne />
            </div>
        </div>
    )
}

export default StepEvent
