import React, { useState } from 'react'
import moment from 'moment'
import { Input, Typography, Select, Button, DatePicker } from 'antd'
import { typeMap } from '../../utils/constants'

const { Title } = Typography

const EventDetailsFormModal = ({
    formData,
    updateFormData,
    previousStep,
    setStep,
    step,
    setPreviousStep
}) => {
    const dateFormat = 'MM/DD/YYYY'

    const updateEntry = (e) => {
        updateFormData({
            ...formData,
            title: e.target.value
        })
    }

    const handleDateChange = (e) => {
        updateFormData((prevState) => ({
            ...prevState,
            date: e.valueOf().toString()
        }))
    }

    const handleEventButtonClick = (selectedType) => {
        updateFormData({
            ...formData,
            type: selectedType
        })
    }

    const prevStep = () => {
        setPreviousStep(step)
        setStep(previousStep)
    }

    const { type } = formData
    return (
        <div>
            <Title
                level={2}
                className="subtitle"
                style={{ textAlign: 'center' }}
            >
                Event details
            </Title>
            <div className="account-form">
                <div className="account-input-container">
                    <label className="account-form-label" htmlFor="name">
                        Name of event
                    </label>
                    <Input
                        name="title"
                        className="account-form-input"
                        type="text"
                        placeholder="Event name"
                        style={{ width: '300px' }}
                        aria-label="Title"
                        value={formData.title}
                        onChange={updateEntry}
                    />
                </div>
                <div className="account-input-container">
                    <label className="account-form-label" htmlFor="name">
                        Date of event
                    </label>
                    <DatePicker
                        size="large"
                        style={{ width: '300px' }}
                        format={dateFormat}
                        allowClear={false}
                        onChange={handleDateChange}
                    />
                </div>
            </div>
            <div style={{ padding: '24px 0' }}>
                {Object.entries(typeMap).map(([key, value]) => (
                    <Button
                        style={{
                            margin: '8px',
                            borderColor: key === type ? '#2b137d' : '#e2e8f0'
                        }}
                        onClick={() => handleEventButtonClick(key)}
                    >
                        {value}
                    </Button>
                ))}
            </div>
            <div style={{ display: 'flex' }}>
                <Button
                    size="large"
                    shape="round"
                    block
                    style={{ margin: '0 8px' }}
                    onClick={prevStep}
                >
                    Previous
                </Button>
                <Button
                    type="primary"
                    size="large"
                    shape="round"
                    block
                    style={{ margin: '0 8px' }}
                    disabled
                >
                    Next
                </Button>
            </div>
        </div>
    )
}

export default EventDetailsFormModal
