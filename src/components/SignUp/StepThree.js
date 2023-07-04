import React, { useState } from 'react'
import moment from 'moment'

import './styles.css'
import EventCard from './EventCard'
import StepLovedOne from './StepLovedOne'

import { Typography, DatePicker, Input, Button, Form } from 'antd'
import { types } from '../../utils/constants'
import { validate } from 'graphql'

const { Title } = Typography

const StepThree = ({
    isMobile,
    ref,
    scrollToNextSection,
    updateSignUpForm,
    signUpForm,
    form
}) => {
    const [noOfEvents, setNoOfEvents] = useState([Math.random()]);
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

    const handleDateChange = (e, i) => {
        signUpForm.input[i] = {
            ...signUpForm.input[i],
            date: e.valueOf().toString()
        }
        updateSignUpForm({
            ...signUpForm,
        })
        /* updateSignUpForm({
            ...signUpForm,
            input: {
                ...signUpForm.input,
                date: e.valueOf().toString()
            }
        }) */
    }

    const updateEntry = (e) => {
        if (e.target.name === 'title') {
            signUpForm.input[e.target.id] = {
                ...signUpForm.input[e.target.id],
                [e.target.name]: e.target.value
            }
            updateSignUpForm({
                ...signUpForm,
            })
        }
        else {
            updateSignUpForm({
                ...signUpForm,
                input: {
                    ...signUpForm.input,
                    [e.target.name]: e.target.value
                }
            })
        }
    }

    const onValuesChange = (props) => {
        const [formKey, formValue] = Object.entries(props)[0]
        updateSignUpForm({
            ...signUpForm,
            input: {
                ...signUpForm.input,
                [formKey]: formValue
            }
        })
    }

    const addMoreEvent = () => {
        signUpForm.input[noOfEvents.length] = {
            userId: null,
            type: 'OTHER',
            date: moment.now().valueOf().toString(),
            status: 'NEW',
            title: ''
        }
        updateSignUpForm({
            ...signUpForm,
        })
        setNoOfEvents([...noOfEvents, Math.random()]);
    }

    const handleRemoveEvent = (key) => {
        let array = noOfEvents;
        const index = array.indexOf(key);
        if (index > -1) {
            array.splice(index, 1); // 2nd parameter means remove one item only
        }
        setNoOfEvents(array);
        console.log('noOfEvents', noOfEvents);
        alert(key)
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
            <p className="signup-step-paragraph">
                Add the different events you're shopping for, along with some
                basic details about each person
            </p>
            <Form
                className="event-form"
                form={form}
                onValuesChange={onValuesChange}
                style={{ display: 'inline-flex', flexWrap: 'wrap' }}
            >
                {noOfEvents.map((i, key) => {
                    return <>
                        <div className="event-card1" style={{ width: '100%', marginBottom: '10px', border: '1px solid #e2e8f0', borderRadius: '10px' }}>
                            {/* {key !== 0 ? <Button onClick={() => handleRemoveEvent(i)}>Remove</Button> : ''} */}
                            <div className="account-input-container">
                                <Form.Item
                                    label={
                                        <p className="account-form-label-required">
                                            Name of event
                                        </p>
                                    }
                                    rules={[{ required: true }]}
                                >
                                    <input
                                        className="form-input"
                                        type="text"
                                        name="title"
                                        id={key}
                                        onChange={updateEntry}
                                        value={signUpForm.input[key].title}
                                    />
                                </Form.Item>
                            </div>
                            <div className="account-input-container">
                                <Form.Item
                                    label={
                                        <p className="account-form-label-required">
                                            Date of event
                                        </p>
                                    }
                                >
                                    <DatePicker
                                        defaultValue={moment()}
                                        format={dateFormat}
                                        allowClear={false}
                                        size="large"
                                        style={{ width: '300px' }}
                                        onChange={(e) => handleDateChange(e, key)}
                                    />
                                </Form.Item>
                            </div>
                        </div>
                    </>
                })}
                <div style={{ width: '100%', textAlign: 'right' }}>
                    <Button onClick={addMoreEvent}>Add More Event</Button>
                </div>
            </Form>
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
