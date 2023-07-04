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

    const handleSubmit = async (type = "login", response = {}) => {
        // e.preventDefault()
        setLoadingState(true)
        let requestData, backendUrl;
        if (type === 'facebook') {
            requestData = {
                userID: response.userID,
                accessToken: response.accessToken
            }
            backendUrl =
                process.env.NODE_ENV == 'production'
                    ? 'https://api.thankyougift.io/facebook-login'
                    : 'http://localhost:9000/facebook-login'
        }
        else {
            requestData = {
                email: credentials.email,
                password: credentials.password,
                type: 'email'
            }
            backendUrl =
                process.env.NODE_ENV == 'production'
                    ? 'https://api.thankyougift.io/login'
                    : 'http://localhost:9000/login'
        }

        axios
            .post(backendUrl, requestData)
            .then(
                ({ data }) => {
                    if (data.error) {
                        setFormErrors(data.error)
                        return
                    }
                    localStorage.setItem('userId', data.userId)
                    localStorage.setItem('token', data.token)
                    localStorage.setItem('expiresAt', data.expiresAt)
                    history.push('dashboard')
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
                    <form className="form-wrapper" >
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
                                // htmlType="submit"
                                loading={loadingState}
                                onClick={handleSubmit}
                            >
                                Log in
                            </Button>
                        </div>
                    </form>
                </div>
                <FacebookLogin
                    appId="2177431552305726"
                    autoLoad={false}
                    fields="name,email,picture"
                    onClick={() => console.log('clicked')}
                    callback={(response) => { console.log('callback'); handleSubmit("facebook", response) }}
                    cssClass="my-facebook-button-class"
                />
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
