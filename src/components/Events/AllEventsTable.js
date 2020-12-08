import React, { useState } from 'react'
import './styles.css'
import { Modal, Input, Button, Typography } from 'antd'
import IconButton from '@material-ui/core/IconButton'
import Collapse from '@material-ui/core/Collapse'
import Footer from '../Footer'
import TableContainer from './TableContainer'
import { gql, useQuery, useMutation } from '@apollo/client'
import AddNewIcon from './AddNewIcon'

const GET_GIFTS = gql`
    query getFriendAndEvent($friendId: ID!, $eventId: ID!) {
        getFriendById(friendId: $friendId) {
            name
            interests
            age
            gender
        }
        getGiftsByEventId(eventId: $eventId) {
            id
            eventId
            userId
            name
            type
            url
            image
            price
            description
        }
    }
`

const UPDATE_USER = gql`
    mutation updateFriend($input: UpdateFriendInput!) {
        updateFriend(friend: $input)
    }
`
const ADD_GIFT_IDEA = gql`
    mutation addGift($input: GiftInput!) {
        addGift(gift: $input)
    }
`

const { Title } = Typography

const { TextArea } = Input

const PencilIcon = ({ stroke }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke={'#FFA800'}
        style={{
            backgroundColor: '#FFF4DD',
            height: '24px',
            width: '24px',
            padding: '4px',
            borderRadius: '24px',
            marginRight: '8px',
            flexShrink: '0'
        }}
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
        />
    </svg>
)

const EllipsisIcon = ({ stroke }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke={'#FFA800'}
        style={{
            backgroundColor: '#FFF4DD',
            height: '24px',
            width: '24px',
            padding: '4px',
            borderRadius: '24px',
            marginRight: '8px',
            flexShrink: '0'
        }}
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
        />
    </svg>
)

const PlusIcon = (props) => (
    <svg
        style={{
            backgroundColor: '#C6F6D5',
            height: '24px',
            width: '24px',
            padding: '4px',
            marginRight: '8px',
            borderRadius: '24px'
        }}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#68D391"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
        />
    </svg>
)

const ThumbsUpIcon = (props) => (
    <svg
        style={{
            backgroundColor: '#C6F6D5',
            height: '24px',
            width: '24px',
            padding: '4px',
            marginRight: '8px',
            borderRadius: '24px'
        }}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#68D391"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
        />
    </svg>
)

const ThumbsDownIcon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke={props.stroke}
        style={{
            backgroundColor: '#FED7D7',
            height: props.size,
            width: props.size,
            padding: '4px',
            borderRadius: '24px',
            marginRight: '8px',
            flexShrink: '0'
        }}
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"
        />
    </svg>
)

const CancelIcon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke={props.stroke}
        style={{
            backgroundColor: '#FED7D7',
            height: props.size,
            width: props.size,
            padding: '4px',
            borderRadius: '24px',
            marginRight: '8px',
            flexShrink: '0'
        }}
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
        />
    </svg>
)

const ArrowIcon = () => (
    <svg
        className="w-6 h-6"
        fill="none"
        stroke="#818CF8"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        style={{
            height: '14px',
            width: '14px'
        }}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
    </svg>
)

const OpenNoteFooter = ({ onClick, saveNote }) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                paddingTop: '16px'
            }}
        >
            <span
                onClick={saveNote}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 4px'
                }}
            >
                <PlusIcon size={'24px'} stroke={'#667EEA'} />
                <span>Add note</span>
            </span>
            <span
                onClick={onClick}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 4px'
                }}
            >
                <CancelIcon size={'24px'} stroke={'#F56565'} />
                <span>Cancel</span>
            </span>
        </div>
    )
}

const NotesColumn = ({ notes, friendId }) => {
    const [open, setOpen] = React.useState(false)
    const [state, updateState] = useState(notes)

    const [updateUser] = useMutation(UPDATE_USER, {})

    const updateNotes = (e) => {
        updateState(e.target.value)
    }

    const saveNote = async () => {
        setOpen(false)

        updateUser({
            variables: {
                input: {
                    id: friendId,
                    fields: {
                        interests: state
                    }
                }
            }
        })
    }
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '24px',
                maxWidth: '50%',
                width: '100%'
            }}
        >
            <div
                className="event-card"
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: '16px 16px 64px',
                    minWidth: '400px',
                    width: 'initial',
                    background: '#fff'
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%'
                    }}
                >
                    <span
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}
                    >
                        <h3
                            style={{
                                fontSize: '20px',
                                fontWeight: '700',
                                color: 'rgb(67, 56, 202)'
                            }}
                        >
                            Notes
                        </h3>
                        <span
                            onClick={() => setOpen(!open)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                color: 'rgb(113, 128, 150)'
                            }}
                        >
                            <PencilIcon />
                            Edit
                        </span>
                    </span>
                    {open ? (
                        <TextArea
                            style={{ color: '#555' }}
                            rows={8}
                            value={state}
                            onChange={updateNotes}
                        ></TextArea>
                    ) : (
                        <span style={{ color: '#555' }}>{state}</span>
                    )}
                    <Collapse in={open}>
                        <OpenNoteFooter
                            onClick={() => setOpen(false)}
                            saveNote={saveNote}
                        />
                    </Collapse>
                </div>
            </div>
        </div>
    )
}

const GiftIcon = () => (
    <svg
        className="w-6 h-6"
        fill="none"
        stroke="rgb(102, 126, 234)"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        style={{
            background: '#E0E7FF',
            borderRadius: '50%',
            height: '32px',
            width: '32px',
            padding: '4px',
            marginRight: '8px'
        }}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
        />
    </svg>
)

const GiftComponent = ({ gifts, eventId, addGiftIdea }) => {
    const [confirmLoading, setConfirmLoading] = useState(false)
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [formData, updateFormData] = useState({
        name: '',
        url: '',
        eventId
    })

    const openModal = () => {
        setIsModalVisible(true)
    }

    const handleSubmit = async () => {
        await addGiftIdea({
            variables: { input: formData }
        })
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

    const updateEntry = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <div>
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
                                <label
                                    className="account-form-label"
                                    htmlFor="name"
                                >
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
                                    htmlFor="url"
                                >
                                    Link to item
                                </label>
                                <input
                                    name="url"
                                    className="account-form-input"
                                    type="text"
                                    placeholder="Url"
                                    aria-label="Url"
                                    value={formData.url}
                                    onChange={updateEntry}
                                    required
                                />
                            </div>
                        </div>
                    </form>
                </Modal>
                <div
                    onClick={openModal}
                    style={{
                        display: 'flex',
                        background: '#EEF2FF',
                        borderRadius: '8px',
                        color: '#4338CA',
                        padding: '16px',
                        alignItems: 'center',
                        maxWidth: '200px',
                        marginBottom: '16px'
                    }}
                >
                    <AddNewIcon
                        color="#fff"
                        style={{
                            width: '24px',
                            height: '24px',
                            marginRight: '4px',
                            background: '#4338CA',
                            borderRadius: '6px',
                            border: '1px solid #A5B4FC',
                            padding: '2px'
                        }}
                    />
                    <p
                        style={{
                            margin: '0',
                            fontSize: '15px',
                            marginLeft: '8px',
                            fontWeight: '500'
                        }}
                    >
                        Add gift idea
                    </p>
                </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {gifts.map((gift) => (
                    <GiftIdeaItem {...gift} />
                ))}
            </div>
        </div>
    )
}

const GiftIdeaItem = ({ name, description, price, currency, url, image }) => {
    if (image) {
        return (
            <div className="present-idea">
                <div className="present-idea-image-wrapper">
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <img className="present-idea-img" src={image}></img>
                    </a>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '24px',
                        width: '100%'
                    }}
                >
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <span
                            style={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    paddingBottom: '24px'
                                }}
                            >
                                <h3
                                    style={{
                                        fontWeight: '700',
                                        fontSize: '20px',
                                        color: '#1a202c',
                                        margin: '0'
                                    }}
                                >
                                    {name}
                                </h3>
                                <Button
                                    style={{
                                        color: 'rgb(108, 94, 211)',
                                        backgroundColor: '#EEF2FF',
                                        border: 'none',
                                        fontWeight: '600',
                                        fontSize: '14px'
                                    }}
                                >
                                    Curated
                                </Button>
                            </div>
                            <span
                                style={{
                                    color: '#718096',
                                    fontSize: '14px',
                                    lineHeight: '20px'
                                }}
                            >
                                {description}
                            </span>
                            <span
                                style={{
                                    color: '#6C5ED3',
                                    fontWeight: '700',
                                    fontSize: '18px'
                                }}
                            >
                                ${price}
                            </span>
                        </span>
                    </a>
                    <div className="gifts-response-container">
                        <div className="gift-response-item">
                            <ThumbsUpIcon size={'24px'} stroke={'#667EEA'} />
                            <span>Approve</span>
                        </div>
                        <div className="gift-response-item">
                            <EllipsisIcon />
                            <span>Maybe</span>
                        </div>
                        <div className="gift-response-item">
                            <ThumbsDownIcon size={'24px'} stroke={'#F56565'} />
                            <span>Reject</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div
            className="event-card"
            style={{ background: '#fff', flexShrink: '0' }}
        >
            <a href={url}>
                <GiftIcon />
                <div>
                    <p>{name}</p>
                    <span
                        style={{
                            color: '#818CF8',
                            fontSize: '14px',
                            fontWeight: '500'
                        }}
                    >
                        {'Added by you'}
                    </span>
                </div>
                <ArrowIcon />
            </a>
        </div>
    )
}

const AllEventsTable = (props) => {
    const friendId = props.data.recipientIds[0]
    const eventId = props.data.id

    const { loading, error, data } = useQuery(GET_GIFTS, {
        variables: { friendId: friendId, eventId: eventId }
    })

    const [addGiftIdea] = useMutation(ADD_GIFT_IDEA, {
        refetchQueries: [
            {
                query: GET_GIFTS,
                variables: { friendId: friendId, eventId: eventId }
            }
        ],
        awaitRefetchQueries: true
    })

    if (loading) return 'loading'
    if (error) return <p>{error}</p>

    const notes = data.getFriendById.interests

    const gifts = data.getGiftsByEventId
    console.log(gifts)
    const sortedGifts = gifts
        .slice()
        .sort((a, b) => (!!a.image && !b.image ? -1 : 1))
    return (
        <div style={{ display: 'flex' }}>
            <NotesColumn notes={notes} friendId={friendId} />
            <div style={{ maxWidth: '50%', width: '100%', padding: '24px' }}>
                <GiftComponent
                    gifts={sortedGifts}
                    eventId={eventId}
                    addGiftIdea={addGiftIdea}
                />
            </div>
        </div>
    )
}

export default AllEventsTable
