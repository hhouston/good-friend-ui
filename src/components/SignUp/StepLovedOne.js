import React, { useState } from 'react'
import './styles.css'
import { UserOutlined } from '@ant-design/icons'

import { Input, Typography, Select, Form, InputNumber } from 'antd'
import { formatMs } from '@material-ui/core'
import { PrimaryButton } from '../common'

const { Title } = Typography

const { Option } = Select

const { TextArea } = Input

const StepLovedOne = ({
    ref,
    handleSubmit,
    handleBack,
    handleNext,
    formData,
    updateFormData
}) => {
    const [form] = Form.useForm()
    const updateEntry = (e) => {
        const { value, type } = e.target
        updateFormData({
            ...formData,
            friend: {
                ...formData.friend,
                [e.target.name]: type === 'number' ? parseInt(value) : value
            }
        })
    }

    const handleTextAreaChange = (e) => {
        updateFormData({
            ...formData,
            friend: {
                ...formData.friend,
                interests: e.target.value.trim()
            }
        })
    }

    const handleSelectChange = (value) => {
        updateFormData({
            ...formData,
            friend: {
                ...formData.friend,
                gender: value
            }
        })
    }

    const onValuesChange = (props) => {
        const [formKey, formValue] = Object.entries(props)[0]
        updateFormData({
            ...formData,
            friend: {
                ...formData.friend,
                [formKey]: formKey === 'age' ? parseInt(formValue) : formValue
            }
        })
    }

    return (
        <div style={{ width: '100%', padding: '64px 0' }} ref={ref}>
            <Title level={2} className="subtitle">
                Tell us about your loved one
            </Title>
            <Form
                form={form}
                className="account-form-wrapper"
                onValuesChange={onValuesChange}
            >
                <div className="account-form">
                    <div style={{ padding: '0 16px' }}>
                        <Form.Item
                            label={
                                <p className="account-form-label-required">
                                    First name
                                </p>
                            }
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Required'
                                }
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </div>

                    <div style={{ padding: '0 16px' }}>
                        <Form.Item
                            label={
                                <p className="account-form-label-required">
                                    Age
                                </p>
                            }
                            name="age"
                            rules={[
                                {
                                    required: true,
                                    message: 'Required'
                                }
                            ]}
                        >
                            <InputNumber />
                        </Form.Item>
                    </div>
                </div>
                <div style={{ padding: '0 16px' }}>
                    <Form.Item
                        name="gender"
                        label={
                            <p className="account-form-label-required">
                                Gender
                            </p>
                        }
                        rules={[{ required: true }]}
                    >
                        <Select
                            style={{
                                width: 200,
                                borderRadius: '8px',
                                padding: '8px'
                            }}
                            onChange={handleSelectChange}
                        >
                            <Option value="female">Female</Option>
                            <Option value="male">Male</Option>
                            <Option value="other">Prefer not to say</Option>
                        </Select>
                    </Form.Item>
                </div>

                <div style={{ padding: '0 16px' }}>
                    <Form.Item rules={[{ required: true }]}>
                        <TextArea
                            rows={8}
                            placeholder="Hobbies, interests, dislikes, etc!"
                            onChange={handleTextAreaChange}
                        />
                    </Form.Item>
                </div>
            </Form>
        </div>
    )
}

export default React.forwardRef(StepLovedOne)
