import React, { useState } from 'react'
import { Typography, Button, Form, Input } from 'antd'
import axios from 'axios'
import { EventBusy } from '@material-ui/icons'
import { formatError } from 'graphql'

const { Title } = Typography

const initialForm = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
}

const SetupAccountSetup = ({ handleNext, updateSignUpForm }) => {
    const [form] = Form.useForm()

    const [formData, updateFormData] = useState(initialForm)

    const handleSubmit = async (e) => {
        e.preventDefault()

        form.validateFields()
            .then((values) => {
                const backendUrl =
                    process.env.NODE_ENV == 'production'
                        ? 'https://api.thankyougift.io/signup'
                        : 'http://localhost:9000/signup'

                axios.post(backendUrl, formData).then((result) => {
                    if (!result.data.error) {
                        const {
                            data: { userId, token, expiresAt }
                        } = result

                        localStorage.setItem('userId', userId)
                        localStorage.setItem('token', token)
                        localStorage.setItem('expiresAt', expiresAt)
                        updateSignUpForm((prevState) => ({
                            ...prevState,
                            input: {
                                userId: userId
                            }
                        }))
                        handleNext()
                    }
                })
            })
            .catch((errorInfo) => {
                console.log(errorInfo)
            })
    }

    const onValuesChange = (props) => {
        const [formKey, formValue] = Object.entries(props)[0]
        updateFormData({
            ...formData,
            [formKey]: formValue
        })
    }

    return (
        <div className="outer-div">
            <div className="my-account">
                <Title className="subtitle" style={{ textAlign: 'center' }}>
                    Let's get some basic info
                </Title>
                <Form
                    className="account-form-wrapper"
                    initialValues={formData}
                    onValuesChange={onValuesChange}
                    form={form}
                >
                    <div className="account-form">
                        <div className="account-input-container">
                            <label
                                className="account-form-label"
                                htmlFor="firstName"
                            >
                                First name
                            </label>
                            <Form.Item
                                style={{ padding: '8px' }}
                                name="firstName"
                                rules={[
                                    {
                                        required: true,
                                        message: 'First name is required'
                                    }
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </div>
                        <div className="account-input-container">
                            <label
                                className="account-form-label"
                                htmlFor="lastName"
                            >
                                Last name
                            </label>
                            <Form.Item
                                style={{ padding: '8px' }}
                                name="lastName"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Last name is required'
                                    }
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </div>
                    </div>
                    <div className="account-form">
                        <div className="account-input-container">
                            <label
                                className="account-form-label"
                                for="password"
                            >
                                Password
                            </label>
                            <Form.Item
                                style={{ padding: '8px' }}
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please create a password'
                                    }
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>
                        </div>
                        <div className="account-input-container">
                            <label className="account-form-label" for="email">
                                Email
                            </label>
                            <Form.Item
                                style={{ padding: '8px' }}
                                name="email"
                                type="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Email is required'
                                    },
                                    { type: 'email' }
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </div>
                    </div>
                </Form>
            </div>
            <Button
                shape="round"
                type="primary"
                size="large"
                className="bundle-card-button"
                onClick={handleSubmit}
                htmlType="submit"
            >
                Next
            </Button>
        </div>
    )
}

export default SetupAccountSetup
