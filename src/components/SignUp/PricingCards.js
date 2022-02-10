import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Button } from 'antd'
import './styles.css'

const { Title } = Typography

const CheckIcon = () => (
    <svg
        className="pricing-icon"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#6B46C1"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
        />
    </svg>
)

const Arrow = () => (
    <svg
        className="arrow-icon"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#6a4ee1"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
    </svg>
)

const PricingCards = () => {
    return (
        <div className="pricing-container">
            <Title
                type="secondary"
                level={2}
                className="subtitle"
                style={{ fontSize: '38px' }}
            >
                Pricing
            </Title>
            <div className="pricing-component">
                <div className="event-card pricing-card">
                    <div className="pricing-header">
                        <h3 className="card-title-pricing">Basic</h3>
                        <p className="card-pricing-description">
                            Bunc id tincidunt duis faucibus urna adipiscing. Id
                            lorem diam.
                        </p>
                        <div class="price-text">
                            $19 <span class="month-span">/mo</span>
                        </div>
                    </div>
                    <div className="pricing-details">
                        <ul className="pricing-list">
                            <li className="pricing-list-item">
                                <CheckIcon />
                                <span>Lorem ipsum dolor sit amet</span>
                            </li>
                            <li className="pricing-list-item">
                                <CheckIcon />
                                <span>Lorem ipsum dolor sit amet</span>
                            </li>
                            <li className="pricing-list-item">
                                <CheckIcon />
                                <span>Lorem ipsum dolor sit amet</span>
                            </li>
                        </ul>
                        <Link to="#" className="price-button">
                            Select plan
                        </Link>
                    </div>
                </div>

                <div className="event-card pricing-card">
                    <div className="pricing-header">
                        <h3 className="card-title-pricing">VIP</h3>
                        <p className="card-pricing-description">
                            Bunc id tincidunt duis faucibus urna adipiscing. Id
                            lorem diam.
                        </p>
                        <div class="price-text">
                            $39 <span class="month-span">/mo</span>
                        </div>
                    </div>
                    <div className="pricing-details">
                        <ul className="pricing-list">
                            <li className="pricing-list-item">
                                <CheckIcon />
                                <span>Lorem ipsum dolor sit amet</span>
                            </li>
                            <li className="pricing-list-item">
                                <CheckIcon />
                                <span>Lorem ipsum dolor sit amet</span>
                            </li>
                            <li className="pricing-list-item">
                                <CheckIcon />
                                <span>Lorem ipsum dolor sit amet</span>
                            </li>
                            <li className="pricing-list-item">
                                <CheckIcon />
                                <span>Lorem ipsum dolor sit amet</span>
                            </li>
                        </ul>
                        <Link to="#" className="price-button">
                            Select plan
                        </Link>
                    </div>
                </div>

                <div className="event-card pricing-card">
                    <div className="pricing-header pricing-free">
                        <h3 className="card-title-pricing title-free">
                            First gift!
                        </h3>
                        <p className="card-pricing-description description-free">
                            Bunc id tincidunt duis faucibus urna adipiscing. Id
                            lorem diam.
                        </p>
                        <div class="price-text price-text-free">
                            $0 <span class="month-span">/mo</span>
                        </div>
                    </div>
                    <div className="pricing-details">
                        <ul className="pricing-list">
                            <li className="pricing-list-item">
                                <CheckIcon />
                                <span>Lorem ipsum dolor sit amet</span>
                            </li>
                            <li className="pricing-list-item">
                                <CheckIcon />
                                <span>Lorem ipsum dolor sit amet</span>
                            </li>
                            <li className="pricing-list-item">
                                <CheckIcon />
                                <span>Lorem ipsum dolor sit amet</span>
                            </li>
                        </ul>
                        <Link to="#" className="price-button button-free">
                            Select plan
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PricingCards
