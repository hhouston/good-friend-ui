import React from 'react'
import './styles.css'
import classNames from 'classnames'

import { Typography } from 'antd'

const { Title } = Typography

const EventCard = ({ imgUrl, title, onClick, selected, size }) => {
    return (
        <div
            className={classNames('event-card', {
                'event-card-active': selected === title,
            })}
            onClick={onClick}
        >
            <span className="card-image-container">
                <img className="card-image" src={imgUrl} />
            </span>
            <h3 className="card-title">{title}</h3>
        </div>
    )
}

export default EventCard
