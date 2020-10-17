import React, { useState } from 'react'
import './styles.css'
import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login'
import { useHistory } from 'react-router-dom'
import { gql, useMutation } from '@apollo/client'
import { Button } from 'antd'
import axios from 'axios'

const formState = {
    email: '',
    password: '',
}

const Login = () => {
    const history = useHistory()
    const [credentials, updateUserForm] = useState(formState)
    const [formErrors, setFormErrors] = useState('')
    const [loadingState, setLoadingState] = useState(false)

    const updateForm = (e) => {
        updateUserForm({
            ...credentials,
            [e.target.name]: e.target.value.trim(),
        })
    }

    const handleSubmit = async (e) => {
      const { email, password } = credentials
        e.preventDefault()
        setLoadingState(true)
          axios.post('http://localhost:9000/login', {
            email: email,
            password: password
          })
          .then(({ data }) => {
            localStorage.setItem('token', data.token)
            localStorage.setItem('expiresAt', data.expiresAt)
            history.push('home')
          }, (error) => {
            console.log(error);
          });
            // localStorage.setItem('token', response.token)
            setLoadingState(false)
    }

    return (
        <div className="login-container">
            <div className="login-wrapper">
                <div className="login">
                    <h3 className="login-greeting">Welcome back</h3>
                    <p className="login-caption">Login or create account</p>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <FacebookLogin
                            appId="1066802667123134"
                            autoLoad={false}
                            fields="name,email,picture"
                            onClick={() => console.log('clicked')}
                            callback={(resp) => console.log(resp)}
                            cssClass="my-facebook-button-class"
                        />
                        <GoogleLogin
                            clientId="597333182306-go3i72bhh1jklcuigsfg30tm1h43rd8d.apps.googleusercontent.com"
                            buttonText="CONTINUE WITH GOOGLE"
                            onSuccess={(resp) => console.log(resp)}
                            onFailure={() => console.log('google success')}
                        />
                    </div>
                    <form className="form-wrapper" onSubmit={handleSubmit}>
                        {formErrors ? (
                            <p
                                style={{
                                    color: '#f56565',
                                    fontSize: '14px',
                                    margin: '0',
                                }}
                            >
                                Error logging you in
                            </p>
                        ) : null}
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
