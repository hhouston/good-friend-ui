import React, { useState } from 'react'
import moment from 'moment'

import './styles.css'
import EventCard from './EventCard'
import StepLovedOne from './StepLovedOne'

import { Typography, DatePicker, Input, Button } from 'antd'
import { types } from '../../utils/constants'

const { Title } = Typography

const StepThree = ({
    isMobile,
    ref,
    scrollToNextSection,
    updateSignUpForm,
    signUpForm
}) => {
    const [selected, setSelected] = useState(null)

    const dateFormat = 'MM/DD/YYYY'

    const handleSelect = (title) => {
        if (title === selected) {
            setSelected(null)
        } else {
            setSelected(title)
            updateSignUpForm((prevState) => ({
                ...prevState,
                input: {
                    ...prevState.input,
                    type: title
                }
            }))
            scrollToNextSection()
        }
    }

    const handleDateChange = (e) => {
        updateSignUpForm((prevState) => ({
            ...prevState,
            input: {
                ...prevState.input,
                date: e.valueOf().toString()
            }
        }))
    }

    const updateEntry = (e) => {
        updateSignUpForm({
            ...signUpForm,
            input: {
                ...signUpForm.input,
                title: e.target.value
            }
        })
    }

    const cardSize = isMobile ? 'small' : 'default'
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '64px 0'
            }}
            ref={ref}
        >
            <Title level={2} className="subtitle">
                Event details
            </Title>
            <div className="event-form">
                <div className="account-input-container">
                    <label className="account-form-label" htmlFor="name">
                        Name of event
                    </label>
                    <Input
                        name="title"
                        className="account-form-input"
                        type="text"
                        placeholder="Event name"
                        style={{ width: '300px' }}
                        aria-label="Title"
                        value={signUpForm.input.title}
                        onChange={updateEntry}
                        // onBlur={handleBlur}
                        // required
                    />
                </div>
                <div className="account-input-container">
                    <label className="account-form-label" htmlFor="name">
                        Date of event
                    </label>
                    <DatePicker
                        defaultValue={moment()}
                        format={dateFormat}
                        allowClear={false}
                        size="large"
                        style={{ width: '300px' }}
                        onChange={handleDateChange}
                    />
                </div>
            </div>
            <div className="cards-wrapper">
                <EventCard
                    key={'anniversary'}
                    title={'ANNIVERSARY'}
                    imgUrl={require('../../images/love.svg')}
                    handleSelect={handleSelect}
                    selected={selected}
                    size={cardSize}
                />
                <EventCard
                    key={'birthday'}
                    title="BIRTHDAY"
                    imgUrl={require('../../images/birthday.svg')}
                    handleSelect={handleSelect}
                    selected={selected}
                    size={cardSize}
                />
                <EventCard
                    key={'graduation'}
                    title="GRADUATION"
                    imgUrl={require('../../images/graduation.svg')}
                    handleSelect={handleSelect}
                    selected={selected}
                    size={cardSize}
                />
                <EventCard
                    key={'baby'}
                    title="BABY_SHOWER"
                    imgUrl={require('../../images/baby.svg')}
                    handleSelect={handleSelect}
                    selected={selected}
                    size={cardSize}
                />
                <EventCard
                    key={'mother'}
                    title="MOTHERS_DAY"
                    imgUrl={require('../../images/mother.svg')}
                    handleSelect={handleSelect}
                    selected={selected}
                    size={cardSize}
                />
                <EventCard
                    key={'father'}
                    title="FATHERS_DAY"
                    imgUrl={require('../../images/father.svg')}
                    handleSelect={handleSelect}
                    selected={selected}
                    size={cardSize}
                />
                <EventCard
                    key={'wedding'}
                    title="WEDDING"
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
