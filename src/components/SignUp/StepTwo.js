import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { gql } from '@apollo/client'

import { Form, DatePicker, Button, Typography } from 'antd'
const { Title } = Typography

export const CREATE_EVENT = gql`
    mutation createEvent($event: EventInput!) {
        createEvent(event: $event)
    }
`

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
    },
}
const config = {
    rules: [{ type: 'object', required: true, message: 'Please select time!' }],
}

const dateFormat = 'MM/DD/YYYY'

const StepTwo = ({ next }) => {
    const [selectedTime, setSelectedTime] = useState(0)

    const [addEvent, { data }] = useMutation(CREATE_EVENT)

    const addNewEvent = () => {
        const data = addEvent({
            variables: { event: { date: selectedTime.toString() } },
        })
        console.log(data)
    }

    const onChange = (e) => {
        e ? setSelectedTime(e.valueOf()) : setSelectedTime(null)
    }
    const onSubmit = () => {
        next()
        // addNewEvent({ variables: { event: selectedTime } });
    }

    return (
        <>
            <Title level={2} className="subtitle">
                Select the date of your upcoming event
            </Title>
            <Form name="time_related_controls" {...formItemLayout}>
                <Form.Item name="date-picker" {...config}>
                    <DatePicker onChange={onChange} format={dateFormat} />
                </Form.Item>
                <Button type="primary" onClick={onSubmit}>
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default StepTwo
