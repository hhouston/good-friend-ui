import React from 'react'
import './styles.css'
import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login'
import { useHistory } from 'react-router-dom'

const Login = () => {
    const history = useHistory()
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
                    <form className="form-wrapper">
                        <div className="form">
                            <input
                                className="form-input"
                                type="email"
                                placeholder="Email Address"
                                aria-label="Email Address"
                            />
                        </div>
                        <div className="form">
                            <input
                                className="form-input"
                                type="password"
                                placeholder="Password"
                                aria-label="Password"
                            />
                        </div>
                        <div className="form-password-wrapper">
                            <a className="form-forgot-password" href="#">
                                Forget Password?
                            </a>
                            <button className="form-button" type="button">
                                Login
                            </button>
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
