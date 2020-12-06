import React from 'react'
import './styles.css'
import { Typography } from 'antd'
const { Title } = Typography

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-section">
                <Title type="primary" level={3} className="subtitle">
                    About us
                </Title>
                <p className="footer-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the
                </p>
            </div>
            <div className="footer-section">
                <Title type="primary" level={3} className="subtitle">
                    Company
                </Title>
                <p className="footer-text">Conditions</p>
                <p className="footer-text">Login</p>
                <p className="footer-text">Services</p>
                <p className="footer-text">Terms & Rules</p>
            </div>
            <div className="footer-section">
                <Title type="primary" level={3} className="subtitle">
                    Quick Links
                </Title>
                <p className="footer-text">Home</p>
                <p className="footer-text">About us</p>
                <p className="footer-text">Services</p>
                <p className="footer-text">How it works</p>
            </div>
            <div className="footer-section">
                <Title type="primary" level={3} className="subtitle">
                    Contact
                </Title>
                <p className="footer-text">support@thankyougift.io</p>
                <p className="footer-text">Strasse PLZ ORT Land</p>
            </div>
        </div>
    )
}

export default Footer
