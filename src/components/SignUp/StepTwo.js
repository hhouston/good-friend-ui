import React, { useState } from 'react'
import './styles.css'

import { Form, DatePicker, Button, Typography } from 'antd'
const { Title } = Typography

const CheckIcon = () => (
    <svg
        className="pricing-icon"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
        />
    </svg>
)

const StepTwo = ({ next }) => {
    return (
        <div className="pricing-container">
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
                    <a
                        href="#"
                        onClick={next}
                        className="price-button button-free"
                    >
                        Select plan
                    </a>
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
                </div>
            </div>
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
                    <a href="#" onClick={next} className="price-button">
                        Select plan
                    </a>
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
                    <a href="#" onClick={next} className="price-button">
                        Select plan
                    </a>
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
                </div>
            </div>
        </div>
    )
}

export default StepTwo
