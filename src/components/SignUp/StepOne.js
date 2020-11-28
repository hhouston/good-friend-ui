import React, { useState } from 'react'
import './styles.css'
import { UserOutlined } from '@ant-design/icons'

import {
    Form,
    Input,
    Button,
    Checkbox,
    Typography,
    DatePicker,
    InputNumber,
    Icon
} from 'antd'

const { Title } = Typography

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
}

const config = {
    rules: [{ type: 'object', required: true, message: 'Please select time!' }]
}

const dateFormat = 'MM/DD/YYYY'

const SignUp = ({ next, updateForm }) => {
    const [selectedTime, setSelectedTime] = useState(0)
    const onFinish = (values) => {
        console.log('Success:', values)
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo)
    }

    const onSubmit = () => {
        next()
    }
    const onChange = (e) => {
        if (e) {
            console.log(e.valueOf())
            updateForm('date', e.valueOf().toString())
        } else {
            setSelectedTime(null)
        }
        // e ? setSelectedTime(e.valueOf()) : setSelectedTime(null)
    }

    return (
        <div>
            <Title level={2} className="subtitle">
                Email and date of upcoming event
            </Title>
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item>
                    <Input
                        prefix={
                            <UserOutlined
                                style={{ color: 'rgba(0,0,0,.25)' }}
                            />
                        }
                        placeholder="Email"
                    />
                </Form.Item>
                <Form.Item name="date-picker" {...config}>
                    <DatePicker onChange={onChange} format={dateFormat} />
                </Form.Item>

                <Title level={2} className="subtitle subtitle-2">
                    Loved one
                </Title>
                <Form.Item>
                    <Input
                        prefix={
                            <UserOutlined
                                style={{ color: 'rgba(0,0,0,.25)' }}
                            />
                        }
                        placeholder="Name"
                    ></Input>
                </Form.Item>
                <Form.Item rules={[{ type: 'number', min: 0, max: 99 }]}>
                    <InputNumber placeholder="Age" />
                </Form.Item>
                <Form.Item>
                    <Input.TextArea
                        prefix={
                            <UserOutlined
                                style={{ color: 'rgba(0,0,0,.25)' }}
                            />
                        }
                        placeholder="Interests"
                        style={{ borderRadius: '8px' }}
                    />
                </Form.Item>
                <Button type="primary" onClick={onSubmit}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default SignUp
