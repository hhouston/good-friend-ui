import React, { useState } from 'react'
import './styles.css'
import { useHistory } from 'react-router-dom'
import { Button, Input } from 'antd'
import axios from 'axios'

const { TextArea } = Input

const formState = {
    email: '',
    message: ''
}

const Contact = () => {
    const history = useHistory()
    const [credentials, updateUserForm] = useState(formState)
    const [formErrors, setFormErrors] = useState(null)
    const [loadingState, setLoadingState] = useState(false)

    const updateForm = (e) => {
        updateUserForm({
            ...credentials,
            [e.target.name]: e.target.value.trim()
        })
    }

    const handleSubmit = async (e) => {
        const { email, message } = credentials
        e.preventDefault()
        setLoadingState(true)
        const backendUrl =
            process.env.NODE_ENV == 'production'
                ? 'https://api.thankyougift.io/contact'
                : 'http://localhost:9000/contact'

        axios
            .post(backendUrl, {
                email,
                message,
                type: 'email'
            })
            .then(
                ({ data }) => {
                    if (data.error) {
                        setFormErrors(data.error)
                        return
                    }
                },
                (error) => {
                    console.log(error)
                }
            )
        setLoadingState(false)
    }

    return (
        <div className="login-container">
            <div className="login-wrapper">
                <div className="login">
                    <h3 className="login-greeting">Welcome back</h3>
                    <p className="login-caption">Contact or create account</p>
                    <form className="form-wrapper" onSubmit={handleSubmit}>
                        {formErrors && (
                            <p
                                style={{
                                    color: '#f56565',
                                    fontSize: '14px',
                                    margin: '0'
                                }}
                            >
                                {formErrors}
                            </p>
                        )}
                        <div className="form">
                            <input
                                className="form-input"
                                type="email"
                                placeholder="Email Address"
                                aria-label="Email Address"
                                name="email"
                                onChange={updateForm}
                                value={credentials.email}
                            />
                        </div>
                        <div className="form">
                            <input
                                className="form-input"
                                type="password"
                                placeholder="Password"
                                aria-label="Password"
                                name="password"
                                onChange={updateForm}
                                value={credentials.message}
                            />
                        </div>
                        <div className="form-password-wrapper">
                          <div className="account-input-container">
                              <TextArea
                                  rows={4}
                                  placeholder="Hobbies, interests, dislikes, etc!"
                                  onChange={updateForm}
                              />
                          </div>
                            <a className="form-forgot-password" href="#">
                                Forget Password?
                            </a>
                            <Button
                                shape="round"
                                type="primary"
                                htmlType="submit"
                                loading={loadingState}
                            >
                                Log in
                            </Button>
                        </div>
                    </form>
                </div>
                <div className="form-account-wrapper">
                    <span className="">Don't have an account? </span>
                    <a href="/signup" className="form-register">
                        Register
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact
