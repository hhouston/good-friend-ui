import React, { useState } from 'react'
import './styles.css'

import { UserOutlined } from '@ant-design/icons'

import { Input, Typography, Select, Button } from 'antd'
import { formatMs } from '@material-ui/core'
import { PrimaryButton } from '../common'
import { set } from 'lodash'

const { Title } = Typography

const { Option } = Select

const { TextArea } = Input

const LovedOneFormModal = ({
    setPreviousStep,
    setStep,
    step,
    previousStep,
    friendsFormData,
    updateFriendsFormData,
    setIsAddingNewFriend
}) => {
    const updateEntry = (e) => {
        const { value, type } = e.target
        updateFriendsFormData({
            ...friendsFormData,
            [e.target.name]: type === 'number' ? parseInt(value) : value
        })
    }

    const handleTextAreaChange = (e) => {
        updateFriendsFormData({
            ...friendsFormData,
            interests: e.target.value.trim()
        })
    }

    const handleSelectChange = (value) => {
        updateFriendsFormData({
            ...friendsFormData,
            gender: value
        })
    }

    const prevStep = () => {
        setPreviousStep(step)
        setStep((prevStep) => prevStep - 1)
    }

    const nextStep = () => {
        setPreviousStep(step)
        setIsAddingNewFriend(true)
        setStep((prevStep) => prevStep + 1)
    }

    return (
        <div>
            <Title
                level={2}
                className="subtitle"
                style={{ textAlign: 'center' }}
            >
                Some basic details about your loved one
            </Title>
            <form>
                <div className="account-form">
                    <div className="account-input-container">
                        <label className="account-form-label" htmlFor="name">
                            Name
                        </label>
                        <input
                            name="name"
                            className="account-form-input"
                            type="text"
                            placeholder="Name"
                            aria-label="name"
                            value={friendsFormData.name}
                            onChange={updateEntry}
                            required
                        />
                    </div>
                    <div className="account-input-container">
                        <label
                            className="account-form-label"
                            htmlFor="lastName"
                        >
                            Age
                        </label>
                        <input
                            name="age"
                            className="account-form-input"
                            type="number"
                            placeholder="Age"
                            aria-label="Age"
                            value={friendsFormData.age}
                            onChange={updateEntry}
                            required
                        />
                    </div>
                </div>
                <div className="account-input-container">
                    <label className="account-form-label" htmlFor="gender">
                        Gender
                    </label>
                    <Select
                        style={{ width: 200, borderRadius: '8px' }}
                        placeholder="Gender"
                        onChange={handleSelectChange}
                    >
                        <Option value="female">Female</Option>
                        <Option value="male">Male</Option>
                        <Option value="other">Prefer not to say</Option>
                    </Select>
                </div>
                <div className="account-input-container">
                    <TextArea
                        rows={8}
                        placeholder="Hobbies, interests, dislikes, etc!"
                        onChange={handleTextAreaChange}
                    />
                </div>
            </form>
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
                    onClick={nextStep}
                    style={{ margin: '0 8px' }}
                >
                    Next
                </Button>
            </div>
        </div>
    )
}

export default React.forwardRef(LovedOneFormModal)
