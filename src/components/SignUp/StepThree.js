import React, { useState } from 'react'
import './styles.css'
import EventCard from './EventCard'
import StepLovedOne from './StepLovedOne'

import { Typography } from 'antd'

const { Title } = Typography

const StepThree = ({ isMobile, updateForm, ref }) => {
    const [selected, setSelected] = useState(null)
    const handleSelect = (title) => {
        if (title === selected) {
            setSelected(null)
        } else {
            setSelected(title)
        }
    }

    const cardSize = isMobile ? 'small' : 'default'
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}
            ref={ref}
        >
            <div className="cards-wrapper">
                <EventCard
                    key={'anniversary'}
                    title="Anniversary"
                    imgUrl={require('../../images/love.svg')}
                    handleSelect={handleSelect}
                    selected={selected}
                    size={cardSize}
                />
                <EventCard
                    key={'birthday'}
                    title="Birthday"
                    imgUrl={require('../../images/birthday.svg')}
                    handleSelect={handleSelect}
                    selected={selected}
                    size={cardSize}
                />
                <EventCard
                    key={'graduation'}
                    title="Graduation"
                    imgUrl={require('../../images/graduation.svg')}
                    handleSelect={handleSelect}
                    selected={selected}
                    size={cardSize}
                />
                <EventCard
                    key={'baby'}
                    title="Baby shower"
                    imgUrl={require('../../images/baby.svg')}
                    handleSelect={handleSelect}
                    selected={selected}
                    size={cardSize}
                />
                <EventCard
                    key={'mother'}
                    title="Mother's Day"
                    imgUrl={require('../../images/mother.svg')}
                    handleSelect={handleSelect}
                    selected={selected}
                    size={cardSize}
                />
                <EventCard
                    key={'father'}
                    title="Father's Day"
                    imgUrl={require('../../images/father.svg')}
                    handleSelect={handleSelect}
                    selected={selected}
                    size={cardSize}
                />
                <EventCard
                    key={'wedding'}
                    title="Wedding"
                    imgUrl={require('../../images/wedding.svg')}
                    handleSelect={handleSelect}
                    selected={selected}
                    size={cardSize}
                />
            </div>
        </div>
    )
}

export default React.forwardRef(StepThree)
