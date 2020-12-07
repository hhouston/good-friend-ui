import React, { useState } from 'react'
import LovedOneFormModal from './LovedOneFormModal'
import EventDetailsFormModal from './EventDetailsFormModal'
import ChooseFriendFormModal from './ChooseFriendFormModal'
import { gql, useMutation, useQuery } from '@apollo/client'
import { ADD_EVENT, ADD_EVENT_WITH_FRIEND } from '../../mutations/createEvent'
import moment from 'moment'
import { Input, Typography, Select, Button, Modal } from 'antd'

const { Option } = Select

const { TextArea } = Input

const initialState = {
    name: '',
    age: null,
    gender: '',
    interests: ''
}

const FriendFormModal = ({
    isModalVisible,
    setIsModalVisible,
    userId,
    friendsMutation
}) => {
    console.log(friendsMutation)

    const [confirmLoading, setConfirmLoading] = useState(false)
    const [formData, updateFormData] = useState(initialState)

    const updateEntry = (e) => {
        const { value, type } = e.target
        updateFormData({
            ...formData,
            [e.target.name]: type === 'number' ? parseInt(value) : value
        })
    }

    const handleTextAreaChange = (e) => {
        updateFormData({
            ...formData,
            interests: e.target.value.trim()
        })
    }

    const handleSelectChange = (value) => {
        updateFormData({
            ...formData,
            gender: value
        })
    }
    const handleSubmit = async () => {
        formData.userId = userId
        const data = await friendsMutation({
            variables: { friend: formData }
        })
        updateFormData(initialState)
    }

    const handleOk = async () => {
        setConfirmLoading(true)
        await handleSubmit()
        setIsModalVisible(false)
        setConfirmLoading(false)
    }

    const handleCancel = () => {
        setIsModalVisible(false)
    }

    return (
        <Modal
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            width={800}
            confirmLoading={confirmLoading}
        >
            <form>
                <div className="account-form">
                    <div className="account-input-container">
                        <label className="account-form-label" htmlFor="name">
                            Name
                        </label>
                        <input
                            name="name"
                            className="account-form-input"
                            type="text"
                            placeholder="Name"
                            aria-label="name"
                            value={formData.name}
                            onChange={updateEntry}
                            required
                        />
                    </div>
                    <div className="account-input-container">
                        <label
                            className="account-form-label"
                            htmlFor="lastName"
                        >
                            Age
                        </label>
                        <input
                            name="age"
                            className="account-form-input"
                            type="number"
                            placeholder="Age"
                            aria-label="Age"
                            value={formData.age}
                            onChange={updateEntry}
                            required
                        />
                    </div>
                </div>
                <div className="account-input-container">
                    <label className="account-form-label" htmlFor="gender">
                        Gender
                    </label>
                    <Select
                        style={{ width: 200, borderRadius: '8px' }}
                        placeholder="Gender"
                        onChange={handleSelectChange}
                    >
                        <Option value="female">Female</Option>
                        <Option value="male">Male</Option>
                        <Option value="other">Prefer not to say</Option>
                    </Select>
                </div>
                <div className="account-input-container">
                    <TextArea
                        rows={4}
                        placeholder="Hobbies, interests, dislikes, etc!"
                        onChange={handleTextAreaChange}
                    />
                </div>
            </form>
        </Modal>
    )
}

export default FriendFormModal
