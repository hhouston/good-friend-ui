import React, { useState } from 'react'
import { Typography } from 'antd'

const { Title } = Typography

const initialForm = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    address: ''
}

const SetupAccountSetup = () => {
    const [formData, updateFormData] = useState(initialForm)
    const [errors, setErrors] = React.useState({})

    const [touched, setTouched] = React.useState({})

    const nameValidation = (fieldName, fieldValue) => {
        if (fieldValue.trim() === '') {
            return `${fieldName} is required`
        }
        if (/[^a-zA-Z -]/.test(fieldValue)) {
            return 'Invalid characters'
        }
        return null
    }
    const emailValidation = (email) => {
        if (
            /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
                email
            )
        ) {
            return null
        }
        if (email.trim() === '') {
            return 'Email is required'
        }
        return 'Please enter a valid email'
    }

    const validate = {
        firstName: (name) => nameValidation('firstName', name),
        lastName: (name) => nameValidation('lastName', name),
        email: emailValidation
    }

    const updateEntry = (e) => {
        console.log(e)
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
        setTouched({
            ...touched,
            [e.target.name]: true
        })
    }
    const handleBlur = (evt) => {
        const { name, value } = evt.target

        // remove whatever error was there previously
        const { [name]: removedError, ...rest } = errors

        // check for a new error
        const error = validate[name](value)

        // // validate the field if the value has been touched
        setErrors({
            ...rest,
            ...(error && { [name]: touched[name] && error })
        })
    }
    return (
        <div className="my-account">
            <Title className="subtitle" style={{ textAlign: 'center' }}>
                Let's get some basic info
            </Title>
            <form className="account-form-wrapper">
                <div className="account-form">
                    <div className="account-input-container">
                        <label
                            className="account-form-label"
                            htmlFor="firstName"
                        >
                            First name
                        </label>
                        <input
                            name="firstName"
                            className="account-form-input"
                            type="text"
                            placeholder="First name"
                            aria-label="First name"
                            value={formData.firstName}
                            onChange={updateEntry}
                            onBlur={handleBlur}
                            required
                        />
                    </div>
                    <div className="account-input-container">
                        <label
                            className="account-form-label"
                            htmlFor="lastName"
                        >
                            Last name
                        </label>
                        <input
                            name="lastName"
                            className="account-form-input"
                            type="text"
                            placeholder="Last name"
                            aria-label="Last name"
                            value={formData.lastName}
                            onChange={updateEntry}
                            onBlur={handleBlur}
                            required
                        />
                    </div>
                </div>
                <div className="account-form">
                    <div className="account-input-container">
                        <label className="account-form-label" for="password">
                            Password
                        </label>
                        <input
                            name="password"
                            className="account-form-input"
                            type="password"
                            placeholder="password"
                            aria-label="password"
                            value={formData.password}
                            onChange={updateEntry}
                        />
                    </div>
                    <div className="account-input-container">
                        <label className="account-form-label" for="email">
                            Email
                        </label>
                        <input
                            name="email"
                            className="account-form-input"
                            type="email"
                            placeholder="email"
                            aria-label="Email"
                            value={formData.email}
                            onChange={updateEntry}
                            onBlur={handleBlur}
                        />
                    </div>
                </div>
                <div className="account-form">
                    <div className="account-input-container">
                        <label className="account-form-label" htmlFor="address">
                            Home address
                        </label>
                        <input
                            name="address"
                            className="account-form-input"
                            type="text"
                            placeholder="Address"
                            aria-label="Address"
                            value={formData.address}
                            onChange={updateEntry}
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SetupAccountSetup
