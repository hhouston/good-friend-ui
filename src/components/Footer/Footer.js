import React from 'react'
import { useHistory } from 'react-router-dom'
import './styles.css'
import { Typography } from 'antd'
const { Title } = Typography

const Footer = () => {
  const history = useHistory()

    return (
        <div className="footer-container">
            <div className="footer-section">
                <Title type="primary" level={3} className="subtitle">
                    Socials
                </Title>
                <p className="footer-text">Facebook</p>
                <p className="footer-text">Instagram</p>
                <p className="footer-text">Linked In</p>
                <p className="footer-text">Twitter</p>
            </div>
            <div className="footer-section">
                <Title type="primary" level={3} className="subtitle">
                    Company
                </Title>
                <p className="footer-text">Conditions</p>
                <p onClick={() => history.push('login')} className="footer-text">Login</p>
                <p onClick={() => history.push('signup')} className="footer-text">Sign Up</p>
                <p onClick={() => history.push('affiliate')} className="footer-text">Affiliate Partnerships</p>
            </div>
            <div className="footer-section">
                <Title type="primary" level={3} className="subtitle">
                    Quick Links
                </Title>
                <p onClick={() => history.push('home')} className="footer-text">Home</p>
                <p onClick={() => history.push('about')} className="footer-text">About us</p>
                <p onClick={() => history.push('blog')} className="footer-text">Blog</p>
            </div>
            <div className="footer-section">
                <Title type="primary" level={3} className="subtitle">
                    Contact
                </Title>
                <p className="footer-text">support@thankyougift.io</p>
            </div>
        </div>
    )
}

export default Footer
