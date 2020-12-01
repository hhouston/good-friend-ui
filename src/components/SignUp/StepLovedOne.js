import React, { useState } from 'react'
import './styles.css'
import { UserOutlined } from '@ant-design/icons'

import { Input, Typography, Select } from 'antd'
import { formatMs } from '@material-ui/core'
import { PrimaryButton } from '../common'

const { Title } = Typography

const { Option } = Select

const { TextArea } = Input

const initialState = {
    name: '',
    age: null,
    gender: '',
    interests: ''
}

const StepLovedOne = ({
    ref,
    addFriendToForm,
    handleSubmit,
    handleBack,
    handleNext
}) => {
    const [formData, updateFormData] = useState(initialState)

    const updateEntry = (e) => {
        const { value, type } = e.target
        updateFormData({
            ...formData,
            [e.target.name]: type === 'number' ? parseInt(value) : value
        })
    }

    const handleTextAreaChange = (e) => {
        updateFormData({
            ...formData,
            interests: e.target.value.trim()
        })
    }

    const handleSelectChange = (value) => {
        updateFormData({
            ...formData,
            gender: value
        })
    }

    const saveFriend = () => {
        addFriendToForm(formData)
    }

    return (
        <div style={{ width: '100%', padding: '64px 0' }} ref={ref}>
            <Title level={2} className="subtitle">
                Some basic details about your loved one
            </Title>
            <form className="account-form-wrapper">
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
                            value={formData.name}
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
                            value={formData.age}
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
            <PrimaryButton onClick={saveFriend}>Save</PrimaryButton>
        </div>
    )
}

export default React.forwardRef(StepLovedOne)
