import React from 'react'
import { Typography } from 'antd'
import { PrimaryButton } from '../common'

import './styles.css'

const { Title } = Typography

const Shipping = () => (
    <div className="sustainable-shipping">
        <img
            src={require('../../images/sustainable-shipping.svg')}
            className="shipping-image"
        ></img>
        <div className="shipping-content">
            <Title
                type="secondary"
                level={2}
                className="subtitle"
                style={{ color: '#fff' }}
            >
                Sustainable Shipping
            </Title>
            <p className="shipping-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                porttitor vulputate sem vel facilisis. Vestibulum in porttitor
                ex, non ultrices purus. Curabitur et commodo nulla. Donec
                viverra gravida orci, sit amet molestie odio mattis a. Nulla
                vestibulum blandit metus eu maximus. Vestibulum ante ipsum
                primis in faucibus
            </p>
            <PrimaryButton>Learn More</PrimaryButton>
        </div>
    </div>
)

export default Shipping
