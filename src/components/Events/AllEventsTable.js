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
} from 'antd'
import IconButton from '@material-ui/core/IconButton'
import Collapse from '@material-ui/core/Collapse'
import Footer from '../Footer'

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
            flexShrink: '0',
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

const PlusIcon = (props) => (
    <svg
        style={{
            backgroundColor: '#C6F6D5',
            height: '24px',
            width: '24px',
            padding: '4px',
            marginRight: '8px',
            borderRadius: '24px',
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
            flexShrink: '0',
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
                paddingTop: '16px',
            }}
        >
            <span
                onClick={onClick}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 4px',
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
                    padding: '0 4px',
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
            }}
        >
            <div
                className="event-card"
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                    }}
                >
                    <span
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}
                    >
                        <h3
                            style={{
                                fontSize: '20px',
                                fontWeight: '700',
                                color: 'rgb(108, 94, 211)',
                            }}
                        >
                            Notes
                        </h3>
                        <span
                            onClick={() => setOpen(!open)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                color: 'rgb(113, 128, 150)',
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

const GiftIdeasColumn = () => {
    return (
        <div>
            <div
                className="event-card"
                style={{
                    padding: '0',
                    flexDirection: 'row',
                    maxWidth: 'initial',
                    overflow: 'hidden',
                }}
            >
                <img
                    src={require('../../images/robes.jpg')}
                    style={{
                        maxWidth: '55%',
                        height: '260px',
                    }}
                ></img>
                <span
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '24px',
                    }}
                >
                    <span
                        style={{
                            color: '#a0aec0',
                            textTransform: 'uppercase',
                            letterSpacing: '.1em',
                        }}
                    >
                        Brand name
                    </span>
                    <h3
                        style={{
                            fontWeight: '700',
                            fontSize: '20px',
                            color: '#1a202c',
                        }}
                    >
                        Robes set
                    </h3>
                    <span
                        style={{
                            color: '#718096',
                            fontSize: '14px',
                            maxWidth: '350px',
                            lineHeight: '20px',
                        }}
                    >
                        New set bathrobes embroidered with any name in your
                        choice in multiple colors
                    </span>
                    <span
                        style={{
                            color: '#6C5ED3',
                            fontWeight: '700',
                            fontSize: '18px',
                        }}
                    >
                        $59.00
                    </span>
                </span>
            </div>
            <div
                className="event-card"
                style={{
                    padding: '0',
                    flexDirection: 'row',
                    maxWidth: 'initial',
                    overflow: 'hidden',
                }}
            >
                <img
                    src={require('../../images/robes.jpg')}
                    style={{
                        maxWidth: '55%',
                        height: '260px',
                    }}
                ></img>
                <span
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '24px',
                    }}
                >
                    <span
                        style={{
                            color: '#a0aec0',
                            textTransform: 'uppercase',
                            letterSpacing: '.1em',
                        }}
                    >
                        Brand name
                    </span>
                    <h3
                        style={{
                            fontWeight: '700',
                            fontSize: '20px',
                            color: '#1a202c',
                        }}
                    >
                        Robes set
                    </h3>
                    <span
                        style={{
                            color: '#718096',
                            fontSize: '14px',
                            maxWidth: '350px',
                            lineHeight: '20px',
                        }}
                    >
                        New set bathrobes embroidered with any name in your
                        choice in multiple colors
                    </span>
                    <span
                        style={{
                            color: '#6C5ED3',
                            fontWeight: '700',
                            fontSize: '18px',
                        }}
                    >
                        $59.00
                    </span>
                </span>
            </div>
        </div>
    )
}

const columns = [
    {
        title: 'Notes',
        dataIndex: 'notes',
        key: 'notes',
        width: '40%',
        className: 'notes-column',
    },
    {
        title: 'Gift ideas',
        dataIndex: 'gifts',
        key: 'gifts',
    },
]

const AllEventsTable = () => {
    const data = [
        {
            notes: <NotesColumn />,
            gifts: <GiftIdeasColumn />,
        },
    ]
    return (
        <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            expandable={false}
            style={{ paddingTop: '80px' }}
        />
    )
}

export default AllEventsTable
