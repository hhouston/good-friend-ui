import React, { useState } from 'react'
import './styles.css'
import {
    Table,
    Tag,
    Badge,
    Menu,
    Dropdown,
    Space,
    Avatar,
    Input,
    Button,
    Typography
} from 'antd'
import IconButton from '@material-ui/core/IconButton'
import Collapse from '@material-ui/core/Collapse'
import Footer from '../Footer'
import TableContainer from './TableContainer'
import { gql, useQuery } from '@apollo/client'

const GET_GIFTS = gql`
    query Gifts($eventId: ID!) {
        getGiftsByEventId(eventId: $eventId) {
            name
            description
            price
            currency
            url
            image
        }
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

const OpenNoteFooter = ({ onClick }) => {
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
                onClick={onClick}
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

const NotesColumn = () => {
    const [open, setOpen] = React.useState(false)
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                maxWidth: '40%',
                padding: '24px'
            }}
        >
            <div
                className="event-card"
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
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
                                color: 'rgb(108, 94, 211)'
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
                            autoSize
                            value={
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                            }
                        ></TextArea>
                    ) : (
                        <span style={{ color: '#555' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.
                        </span>
                    )}
                    <Collapse in={open}>
                        <OpenNoteFooter onClick={() => setOpen(false)} />
                    </Collapse>
                </div>
            </div>
        </div>
    )
}

const GiftIdeasColumn = ({ gifts }) => {
    console.log(gifts)
    if (!gifts.length) {
        return (
            <div
                className="event-card event-card-link"
                style={{
                    padding: '0',
                    flexDirection: 'row',

                    overflow: 'hidden'
                }}
            >
                <img
                    src={require('../../images/project.svg')}
                    style={{
                        height: '260px',
                        width: '260px',
                        objectFit: 'cover',
                        objectPosition: 'center'
                    }}
                ></img>
                <span
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '24px',
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        minWidth: '500px'
                    }}
                >
                    <h3
                        style={{
                            fontWeight: '700',
                            fontSize: '20px',
                            color: '#1a202c'
                        }}
                    >
                        No gifts yet!
                    </h3>
                    <span
                        style={{
                            color: '#718096',
                            fontSize: '14px',
                            lineHeight: '20px'
                        }}
                    >
                        Add some now
                    </span>
                </span>
            </div>
        )
    }

    const GiftComponent = () =>
        gifts.map(({ name, description, price, currency, url, image }) => (
            <a href={url}>
                <div
                    className="event-card event-card-link"
                    style={{
                        padding: '0',
                        flexDirection: 'row',

                        overflow: 'hidden'
                    }}
                >
                    <img
                        src={image}
                        style={{
                            height: '260px',
                            width: '260px',
                            objectFit: 'cover',
                            objectPosition: 'center'
                        }}
                    ></img>
                    <span
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            padding: '24px',
                            width: '100%'
                        }}
                    >
                        <h3
                            style={{
                                fontWeight: '700',
                                fontSize: '20px',
                                color: '#1a202c'
                            }}
                        >
                            {name}
                        </h3>
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
                        <div className="gifts-response-container">
                            <div className="gift-response-item">
                                <ThumbsUpIcon
                                    size={'24px'}
                                    stroke={'#667EEA'}
                                />
                                <span>Approve</span>
                            </div>
                            <div className="gift-response-item">
                                <EllipsisIcon />
                                <span>Maybe</span>
                            </div>
                            <div className="gift-response-item">
                                <ThumbsDownIcon
                                    size={'24px'}
                                    stroke={'#F56565'}
                                />
                                <span>Reject</span>
                            </div>
                        </div>
                    </span>
                </div>
            </a>
        ))
    return (
        <div>
            <h3
                style={{
                    fontSize: '20px',
                    fontWeight: '700',
                    color: 'rgb(108, 94, 211)'
                }}
            >
                Gift ideas
            </h3>
            <GiftComponent />
        </div>
    )
}

const columns = [
    {
        title: 'Gift ideas',
        dataIndex: 'gifts',
        key: 'gifts',
        render: (text, record, index) => {
            return <GiftIdeasColumn eventId={record.id} />
        }
    }
]

const AllEventsTable = ({ data: { id } }) => {
    const response = useQuery(GET_GIFTS, {
        variables: { eventId: id }
    })
    if (response.loading) return 'loading'
    if (response.error) return <p>{response.error}</p>
    const { getGiftsByEventId } = response.data
    if (!getGiftsByEventId) {
        return null
    }
    return (
        <div className="events-container">
            <NotesColumn />
            <div>
                <GiftIdeasColumn gifts={response.data.getGiftsByEventId} />
            </div>
        </div>
    )
}

export default AllEventsTable
