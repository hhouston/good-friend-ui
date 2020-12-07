import React, { useState } from 'react'
import { Steps, Divider, Modal, Button } from 'antd'
import LovedOneFormModal from './LovedOneFormModal'
import EventDetailsFormModal from './EventDetailsFormModal'
import ChooseFriendFormModal from './ChooseFriendFormModal'
import { gql, useMutation, useQuery } from '@apollo/client'
import { ADD_EVENT, ADD_EVENT_WITH_FRIEND } from '../../mutations/createEvent'
import moment from 'moment'

const { Step } = Steps

const GET_FRIENDS = gql`
    query getFriendsByUserId($userId: ID!) {
        getFriendsByUserId(userId: $userId) {
            id
            name
            interests
            age
            gender
        }
    }
`

const EventFormModal = ({ isModalVisible, setIsModalVisible, userId }) => {
    const initialState = {
        type: '',
        date: null,
        status: 'NEW',
        title: '',
        recipientIds: [],
        userId: userId
    }
    const initialFriendState = {
        name: '',
        age: null,
        gender: '',
        interests: ''
    }

    const [formData, updateFormData] = useState(initialState)
    const [isAddingNewFriend, setIsAddingNewFriend] = useState(false)
    const [friendsFormData, updateFriendsFormData] = useState(
        initialFriendState
    )
    const [confirmLoading, setConfirmLoading] = useState(false)
    const [previousStep, setPreviousStep] = useState(0)

    const [addEvent, addEventResponse] = useMutation(ADD_EVENT)
    const [addEventWithFriend, addEventWithFriendResponse] = useMutation(
        ADD_EVENT_WITH_FRIEND
    )

    const friendsResponse = useQuery(GET_FRIENDS, {
        variables: { userId }
    })

    const [step, setStep] = useState(0)

    const handleSubmit = async () => {
        let data
        if (isAddingNewFriend) {
            data = await addEventWithFriend({
                variables: { input: formData, friends: [friendsFormData] }
            })
        } else {
            data = await addEvent({
                variables: { event: formData }
            })
        }
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

    const modalSteps = {
        0: (
            <ChooseFriendFormModal
                {...friendsResponse}
                formData={formData}
                updateFormData={updateFormData}
                previousStep={previousStep}
                setPreviousStep={setPreviousStep}
                step={step}
                setStep={setStep}
                setIsAddingNewFriend={setIsAddingNewFriend}
            />
        ),
        1: (
            <LovedOneFormModal
                friendsFormData={friendsFormData}
                updateFormData={updateFormData}
                step={step}
                setStep={setStep}
                setPreviousStep={setPreviousStep}
                previousStep={previousStep}
                updateFriendsFormData={updateFriendsFormData}
                setIsAddingNewFriend={setIsAddingNewFriend}
            />
        ),
        2: (
            <EventDetailsFormModal
                formData={formData}
                updateFormData={updateFormData}
                previousStep={previousStep}
                setStep={setStep}
                setPreviousStep={setPreviousStep}
                step={step}
            />
        )
    }

    return (
        <Modal
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            okButtonProps={{ disabled: step < 2 }}
            width={800}
            confirmLoading={confirmLoading}
        >
            <EventFormModal />
            <Steps progressDot current={step} size="small">
                <Step />
                <Step />
                <Step />
            </Steps>
            <div style={{ padding: '24px 16px' }}>{modalSteps[step]}</div>
        </Modal>
    )
}

export default EventFormModal
