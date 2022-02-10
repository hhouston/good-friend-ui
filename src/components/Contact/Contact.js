import React, { useState } from 'react'
import './styles.css'
import NavBar from '../NavBar'
import UserNavBar from '../UserNavBar'

import { useHistory, Link } from 'react-router-dom'
import { useIsMobile } from '../../hooks/window-resize'

import { Button, Input, Layout } from 'antd'
import axios from 'axios'

const { Header } = Layout
const { TextArea } = Input

const formState = {
    email: '',
    message: ''
}

const Contact = () => {
    const isLoggedIn = !!localStorage.getItem('token')
    const isMobile = useIsMobile()

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
      <div className="header-section">
          <Header style={{  background: 'transparent', textAlign: 'end' }}>
              {isLoggedIn ? (
                  <UserNavBar isMobile={isMobile} isHome={false} />
              ) : (
                  <NavBar isMobile={isMobile} isHome={false} />
              )}
          </Header>
        <div className="login-container">
            <div className="login-wrapper">
                <div className="login">
                    <h3 className="login-greeting">Have a problem or a question ?</h3>
                    <p className="login-caption">We would love to here it! Leave details below.</p>
                    <form className="form-wrapper" style={{paddingTop: '0'}} onSubmit={handleSubmit}>
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
                        <div className="form-password-wrapper">
                          <div className="account-input-container">
                              <TextArea
                                  rows={4}
                                  placeholder="I can't find my account information - help!"
                                  onChange={updateForm}
                              />
                          </div>
                        </div>
                        <Button
                          shape="round"
                          type="primary"
                          htmlType="submit"
                          loading={loadingState}
                          >
                          Send
                        </Button>
                    </form>
                </div>
                <div className="form-account-wrapper">
                    <span className="">Don't have an account? </span>
                    <Link to="/signup" className="form-register">
                        Register
                    </Link>
                </div>
            </div>
        </div>
      </div>
    )
}

export default Contact
