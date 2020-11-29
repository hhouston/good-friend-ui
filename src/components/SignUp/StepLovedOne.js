import React, { useState } from 'react'
import './styles.css'
import { UserOutlined } from '@ant-design/icons'

import { Input, Button, Typography, Select } from 'antd'

const { Title } = Typography

const { Option } = Select

const { TextArea } = Input

const initialState = {
    name: '',
    age: '',
    gender: '',
    interests: ''
}

const StepLovedOne = ({ ref }) => {
    const [formData, updateFormData] = useState(initialState)

    const updateEntry = (e) => {
        console.log(e)
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const handleSelect = (value) => {
        updateFormData({
            ...formData,
            gender: value
        })
    }

    return (
        <div style={{ width: '100%' }} ref={ref}>
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
                            type="text"
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
                    >
                        <Option value="female">Female</Option>
                        <Option value="male">Male</Option>
                        <Option value="non-binary">Non-binary</Option>
                        <Option value="other">Prefer not to say</Option>
                    </Select>
                </div>
                <div className="account-input-container">
                    <TextArea
                        rows={8}
                        placeholder="Hobbies, interests, dislikes, etc!"
                    />
                </div>
            </form>
        </div>
    )
}

export default React.forwardRef(StepLovedOne)
