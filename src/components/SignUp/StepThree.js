import React, { useState } from 'react'
import './styles.css'
import EventCard from './EventCard'

import { Typography } from 'antd'

const { Title } = Typography

const StepThree = ({ isMobile }) => {
    const [selected, setSelected] = useState(null)
    const handleSelect = (title) => {
        if (title === selected) {
            setSelected(null)
        } else setSelected(title)
    }

    const cardSize = isMobile ? 'small' : 'default'
    return (
        <>
            <Title level={2} className="subtitle">
                Select the type of your event
            </Title>
            <div className="cards-wrapper">
                <EventCard
                    title="Anniversary"
                    imgUrl={require('../../images/love.svg')}
                    onClick={() => handleSelect('Anniversary')}
                    selected={selected}
                    size={cardSize}
                />
                <EventCard
                    title="Birthday"
                    imgUrl={require('../../images/birthday.svg')}
                    onClick={() => handleSelect('Birthday')}
                    selected={selected}
                    size={cardSize}
                />
                <EventCard
                    title="Graduation"
                    imgUrl={require('../../images/graduation.svg')}
                    onClick={() => handleSelect('Graduation')}
                    selected={selected}
                    size={cardSize}
                />
                <EventCard
                    title="Baby shower"
                    imgUrl={require('../../images/baby.svg')}
                    onClick={() => handleSelect('Baby shower')}
                    selected={selected}
                    size={cardSize}
                />
                <EventCard
                    title="Mother's Day"
                    imgUrl={require('../../images/mother.svg')}
                    onClick={() => handleSelect("Mother's Day")}
                    selected={selected}
                    size={cardSize}
                />
                <EventCard
                    title="Father's Day"
                    imgUrl={require('../../images/father.svg')}
                    onClick={() => handleSelect("Father's Day")}
                    selected={selected}
                    size={cardSize}
                />
                <EventCard
                    title="Wedding"
                    imgUrl={require('../../images/wedding.svg')}
                    onClick={() => handleSelect('Wedding')}
                    selected={selected}
                    size={cardSize}
                />
            </div>
        </>
    )
}

export default StepThree
