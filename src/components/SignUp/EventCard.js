import React from 'react'
import './styles.css'
import classNames from 'classnames'

import { Typography } from 'antd'

const { Title } = Typography

const CheckIcon = () => (
    <svg
        className="signup-active-icon"
        style={{ position: 'absolute', top: '0', right: '0' }}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#fff"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
        />
    </svg>
)

const EventCard = ({
    imgUrl,
    title,
    selected,
    handleSelect,
    className = ''
}) => {
    return (
        <div
            className={classNames(
                'event-card',
                {
                    'event-card-active': selected === title
                },
                className
            )}
            onClick={() => handleSelect(title)}
        >
            {selected === title && <CheckIcon />}
            <img className="card-image" src={imgUrl} />
            <h3 className={classNames('card-title', className)}>{title}</h3>
        </div>
    )
}

export default EventCard
