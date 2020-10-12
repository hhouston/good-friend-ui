import React, { useState } from 'react'
import './styles.css'
import EventCard from './EventCard'

import { Typography } from 'antd'

const { Title } = Typography

const StepThree = ({ isMobile, updateForm }) => {
    const [selected, setSelected] = useState(null)
    const handleSelect = (title) => {
        if (title === selected) {
            setSelected(null)
        } else {
            updateForm('type', title)
        }
    }

    console.log(selected)

    const cardSize = isMobile ? 'small' : 'default'
    return (
        <>
            <Title level={2} className="subtitle">
                Select the type of your event
            </Title>
            <div className="cards-wrapper">
                <EventCard
                    key={'anniversary'}
                    title="Anniversary"
                    imgUrl={require('../../images/love.svg')}
                    onClick={() => handleSelect('ANNIVERSARY')}
                    selected={selected}
                    size={cardSize}
                />
                <EventCard
                    key={'birthday'}
                    title="Birthday"
                    imgUrl={require('../../images/birthday.svg')}
                    onClick={() => handleSelect('BIRTHDAY')}
                    selected={selected}
                    size={cardSize}
                />
                <EventCard
                    key={'graduation'}
                    title="Graduation"
                    imgUrl={require('../../images/graduation.svg')}
                    onClick={() => handleSelect('GRADUATION')}
                    selected={selected}
                    size={cardSize}
                />
                <EventCard
                    key={'baby'}
                    title="Baby shower"
                    imgUrl={require('../../images/baby.svg')}
                    onClick={() => handleSelect('BABY_SHOWER')}
                    selected={selected}
                    size={cardSize}
                />
                <EventCard
                    key={'mother'}
                    title="Mother's Day"
                    imgUrl={require('../../images/mother.svg')}
                    onClick={() => handleSelect('MOTHERS_DAY')}
                    selected={selected}
                    size={cardSize}
                />
                <EventCard
                    key={'father'}
                    title="Father's Day"
                    imgUrl={require('../../images/father.svg')}
                    onClick={() => handleSelect('FATHERS_DAY')}
                    selected={selected}
                    size={cardSize}
                />
                <EventCard
                    key={'wedding'}
                    title="Wedding"
                    imgUrl={require('../../images/wedding.svg')}
                    onClick={() => handleSelect('WEDDING')}
                    selected={selected}
                    size={cardSize}
                />
            </div>
        </>
    )
}

export default StepThree
