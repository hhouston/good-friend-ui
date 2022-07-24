import React from 'react'
import { Typography, Button } from 'antd'
import './styles.css'
import classNames from 'classnames'

const { Title } = Typography

const PlusIcon = () => (
    <svg
        style={{
            width: '20px',
            height: '20px',
            borderRadius: '24px'
        }}
        stroke="#2b137d"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        ></path>
    </svg>
)

const ChooseFriendFormModal = ({
    data,
    loading,
    error,
    formData,
    updateFormData,
    step,
    setStep,
    previousStep,
    setPreviousStep,
    setIsAddingNewFriend
}) => {
    if (loading || error) {
        return null
    }

    const handlePersonClick = (val) => {
        if (formData.recipientIds.includes(val)) {
            updateFormData((prevState) => ({
                ...prevState,
                recipientIds: prevState.recipientIds.filter(
                    (recipientId) => recipientId !== val
                )
            }))
        } else {
            updateFormData((prevState) => ({
                ...prevState,
                recipientIds: [...prevState.recipientIds, val]
            }))
        }
    }

    const nextNextStep = () => {
        setPreviousStep(0)
        setIsAddingNewFriend(false)
        setStep((prevStep) => prevStep + 2)
    }

    const nextStep = () => {
        setPreviousStep(1)
        setStep((prevStep) => prevStep + 1)
    }

    return (
        <div>
            <Title level={2} className="subtitle">
                Choose your recipient
            </Title>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    padding: '16px 0'
                }}
            >
                <div
                    onClick={nextStep}
                    style={{
                        backgroundColor: '#EEF2FF',
                        minHeight: '100px',
                        minWidth: '100px',
                        borderRadius: '0.5em',
                        display: 'inline-flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '12px',
                        flexDirection: 'column'
                    }}
                >
                    <PlusIcon />
                    <span style={{ color: '#2b137d' }}>Add new friend</span>
                </div>
                {data.getFriendsByUserId.map((friend, idx) => (
                    <div
                        onClick={() => handlePersonClick(friend.id)}
                        key={idx}
                        className={classNames('people-card-small', {
                            'people-card-small-active': formData.recipientIds.includes(
                                friend.id
                            )
                        })}
                    >
                        <img
                            src={require('../../images/avatar_guy.png')}
                            className="people-card-img"
                        ></img>
                        <p
                            className="people-card-name"
                            style={{ color: '#2b137d' }}
                        >
                            {friend.name}
                        </p>
                    </div>
                ))}
            </div>
            <div style={{ display: 'flex' }}>
                <Button
                    size="large"
                    shape="round"
                    block
                    style={{ margin: '0 8px' }}
                    disabled
                >
                    Previous
                </Button>
                <Button
                    type="primary"
                    size="large"
                    shape="round"
                    block
                    onClick={nextNextStep}
                    style={{ margin: '0 8px' }}
                >
                    Next
                </Button>
            </div>
        </div>
    )
}

export default ChooseFriendFormModal
