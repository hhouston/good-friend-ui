import React, { useState } from 'react'
import { Typography, Button, Form, Input } from 'antd'
import axios from 'axios'
import { EventBusy } from '@material-ui/icons'
import { formatError } from 'graphql'
import { PrimaryButton } from '../common'
import BundleCard from './BundleCard'

const { Title } = Typography

const initialForm = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
}

const bundleOptions = [
    {
        title: 'Upcoming event',
        imgUrl: require('../../images/trial-gift.png'),
        description: 'I need help finding the right gift for an occasion'
    },
    {
        title: 'Holiday shopping',
        imgUrl: require('../../images/christmas-card.png'),
        description: 'I need help finding gifts for Christmas'
    },
    {
        title: 'Gift bundles',
        imgUrl: require('../../images/expert-selection.png'),
        description: 'I need help finding a similar gift for many people'
    }
]

const SetupAccountSetup = ({ handleNext, updateSignUpForm }) => {
    const [form] = Form.useForm()
    const [selected, setSelected] = useState(null)
    const [errors, setErrors] = useState(null)

    const [formData, updateFormData] = useState(initialForm)
    const handleSelect = (index) => {
        if (index === selected) {
            setSelected(null)
        } else {
            setSelected(index)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        form.validateFields()
            .then((values) => {
                const backendUrl =
                    process.env.NODE_ENV == 'production'
                        ? 'https://api.thankyougift.io/signup'
                        : 'http://localhost:9000/signup'

                axios.post(backendUrl, formData).then((result) => {
                    if (result.data.error) {
                        setErrors(result.data.error)
                        return
                    } else {
                        const {
                            data: { userId, token, expiresAt }
                        } = result

                        localStorage.setItem('userId', userId)
                        localStorage.setItem('token', token)
                        localStorage.setItem('expiresAt', expiresAt)
                        updateSignUpForm((prevState) => ({
                            ...prevState,
                            input: {
                                ...prevState.input,
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
                <Title
                    className="subtitle"
                    style={{
                        textAlign: 'center',
                        fontSize: '36px',
                        marginBottom: '24px'
                    }}
                >
                    Basic info
                </Title>
                <Form
                    className="account-form-wrapper"
                    initialValues={formData}
                    onValuesChange={onValuesChange}
                    form={form}
                    style={{ marginTop: '0' }}
                >
                    {errors && (
                        <p
                            style={{
                                color: '#f56565',
                                fontSize: '14px',
                                margin: '0'
                            }}
                        >
                            {errors}
                        </p>
                    )}
                    <div className="account-form">
                        <div className="account-input-container">
                            <Form.Item
                                label={
                                    <p className="account-form-label-required">
                                        First name
                                    </p>
                                }
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
                            <Form.Item
                                label={
                                    <p className="account-form-label-required">
                                        Last name
                                    </p>
                                }
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
                            <Form.Item
                                label={
                                    <p className="account-form-label-required">
                                        Password
                                    </p>
                                }
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
                            <Form.Item
                                label={
                                    <p className="account-form-label-required">
                                        Email
                                    </p>
                                }
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
                <Title
                    className="subtitle"
                    style={{
                        textAlign: 'center',
                        fontSize: '28px',
                        marginBottom: '36px'
                    }}
                >
                    Tell us more about your gift-buying needs
                </Title>
                <div
                    style={{ display: 'flex', justifyContent: 'center' }}
                    className="bundle-cards-step-one-container"
                >
                    {bundleOptions.map((option, i) => (
                        <BundleCard
                            imgUrl={option.imgUrl}
                            title={option.title}
                            selected={selected}
                            handleSelect={handleSelect}
                            className="bundle-card"
                            description={option.description}
                        />
                    ))}
                </div>
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
