import React, { useState } from 'react'
import './styles.css'
import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login'
import { verifyGoogleToken, verifyFacebookToken } from './verify.js'
import { useHistory } from 'react-router-dom'
import { gql, useMutation } from '@apollo/client'
import { Button } from 'antd'
import axios from 'axios'

const formState = {
    email: '',
    password: ''
}

const Login = () => {
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
        const { email, password } = credentials
        e.preventDefault()
        setLoadingState(true)
        const backendUrl = process.env.NODE_ENV == 'production' ? 'https://api.thankyougift.io/login' : 'http://localhost:9000/login'

        axios
            .post(backendUrl, {
            // .post('http://localhost:9000/login', {
                email,
                password,
                type: 'email'
            })
            .then(
                ({ data }) => {
                    if (data.error) {
                        setFormErrors(data.error)
                        return
                    }
                    localStorage.setItem('token', data.token)
                    localStorage.setItem('expiresAt', data.expiresAt)
                    history.push('home')
                },
                (error) => {
                    console.log(error)
                }
            )
        // localStorage.setItem('token', response.token)
        setLoadingState(false)
    }

    return (
        <div className="login-container">
            <div className="login-wrapper">
                <div className="login">
                    <h3 className="login-greeting">Welcome back</h3>
                    <p className="login-caption">Login or create account</p>
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
                                value={credentials.password}
                            />
                        </div>
                        <div className="form-password-wrapper">
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

export default Login
