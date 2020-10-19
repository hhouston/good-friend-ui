import React from 'react'

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
    Layout,
} from 'antd'

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import IconButton from '@material-ui/core/IconButton'
import { typeMap } from '../../utils/constants'
import './styles.css'
import { HeartOutlined, ContainerOutlined } from '@ant-design/icons'
import moment from 'moment'
import { typeFromAST } from 'graphql'
import AllEventsTable from './AllEventsTable'
const { Header, Content, Footer, Sider } = Layout

const { TextArea } = Input

const BirthdayIcon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke={props.stroke}
        className={props.className}
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
        />
    </svg>
)

const GraduationIcon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke={props.stroke}
    >
        <path fill="none" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path
            fill="none"
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
        />
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
        />
    </svg>
)

const GiftIcon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke={props.stroke}
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
        />
    </svg>
)

const Loved = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
            }}
        >
            <img
                className="loved-one-image"
                src={require('../../images/user_profile.png')}
            ></img>
            <div className="loved-one-content">
                <p className="loved-one-name">Bronwyn</p>
                <p className="loved-one-age">28</p>
            </div>
        </div>
    )
}

const CalendarDate = ({ date, type }) => {
    const event = typeMap[type]
    const day = moment.unix(date / 1000).format('DD')
    const month = moment.unix(date / 1000).format('MMM')
    const year = moment.unix(date / 1000).format('YYYY')
    let colors
    if (type === 'GRADUATION') {
        colors = {
            primary: '#E0F3F4',
            secondary: '#469696',
            image: <GraduationIcon stroke={'#469696'} />,
        }
    } else if (type === 'BIRTHDAY') {
        colors = {
            primary: '#FFF2F0',
            secondary: '#FF3825',
            image: <BirthdayIcon stroke="#FF3825" />,
        }
    } else {
        colors = {
            primary: '#FED6ED',
            secondary: '#C93E8C',
            image: <GiftIcon stroke="#C93E8C" />,
        }
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="event-calendar">
                <div
                    className="calendar"
                    style={{
                        backgroundColor: colors['primary'],
                        position: 'relative',
                    }}
                >
                    <span
                        style={{
                            content: '',
                            position: 'absolute',
                            top: '100%',
                            left: '9px',
                            right: '9px',
                            height: '7px',
                            borderRadius: ' 0 0 10px 10px',
                            backgroundColor: colors['primary'],
                            opacity: '50%',
                        }}
                    ></span>
                    <p
                        style={{ color: colors['secondary'] }}
                        className="calendar-month"
                    >
                        {month}
                    </p>
                    <p
                        style={{ color: colors['secondary'] }}
                        className="calendar-day"
                    >
                        {day}
                    </p>
                </div>
                <div className="icon-wrapper">
                    <p
                        style={{
                            fontSize: '16px',
                            fontWeight: '500',
                            margin: '0',
                        }}
                    >
                        {event}
                    </p>
                    <Avatar
                        style={{ backgroundColor: colors['primary'] }}
                        icon={colors['image']}
                        size={'small'}
                    />
                </div>
            </div>
        </div>
    )
}

const GiftIdea = () => {
    return (
        <div className="gifts-container">
            <div className="gift-idea-wrapper">
                <p
                    style={{
                        fontSize: '14px',
                        margin: '0',
                        color: '#667eea',
                        fontWeight: '500',
                    }}
                >
                    Titlelist clubs
                </p>
                <div className="gift-idea">
                    <p
                        style={{
                            color: '#404346',
                            margin: '0',
                            fontSize: '16px',
                            fontWeight: '600',
                        }}
                    >
                        $129.00
                    </p>
                </div>
                <div className="gift-idea">
                    <Button
                        className="gift-idea-icon"
                        shape="circle"
                        size={18}
                        style={{
                            boxShadow:
                                '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06',
                            border: 'none',
                        }}
                    />
                    <a style={{ color: '#718096' }}>See more</a>
                </div>
            </div>
            <div className="gift-idea-wrapper">
                <p
                    style={{
                        fontSize: '14px',
                        margin: '0',
                        color: '#667eea',
                        fontWeight: '500',
                    }}
                >
                    Golf bag
                </p>
                <div className="gift-idea">
                    <p
                        style={{
                            color: '#404346',
                            margin: '0',
                            fontSize: '16px',
                            fontWeight: '600',
                        }}
                    >
                        $110.00
                    </p>
                </div>
                <div className="gift-idea">
                    <Button
                        className="gift-idea-icon"
                        shape="circle"
                        size={18}
                        style={{
                            boxShadow:
                                '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06',
                            border: 'none',
                        }}
                    />
                    <a style={{ color: '#718096' }}>See more</a>
                </div>
            </div>
        </div>
    )
}

const columns = [
    {
        title: 'Event',
        dataIndex: 'calendar',
        key: 'calendar',
        render: (text, record) => (
            <CalendarDate date={record.date} type={record.type} />
        ),
    },
    {
        title: 'Loved one',
        dataIndex: 'loved',
        key: 'loved',
        render: (text, record) => <Loved />,
    },
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
        render: (text) => moment.unix(text / 1000).format('DD MMM YYYY'),
    },

    {
        title: 'Status',
        key: 'tags',
        render: () => <Tag color={'volcano'}>New</Tag>,
    },
    {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render: () => (
            <Space size="middle">
                <a style={{ color: '#1890ff', fontSize: '14px' }}>
                    Request curator
                </a>
                <a style={{ color: '#1890ff', fontSize: '14px' }}>Edit</a>
            </Space>
        ),
    },
]

const TableContainer = ({ data }) => {
    const expandedRowRender = (props) => {
        return <AllEventsTable data={props} />
    }
    return (
        <>
            <Table
                pagination={false}
                style={{
                    color: '#405693',
                    boxShadow:
                        '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                    borderRadius: '12px',
                    margin: '0 auto',
                    marginTop: '40px',
                }}
                columns={columns}
                expandable={{
                    expandedRowRender,
                    expandIcon: ({ expanded, onExpand, record }) => (
                        <IconButton aria-label="expand row" size="small">
                            {expanded ? (
                                <KeyboardArrowUpIcon
                                    onClick={(e) => onExpand(record, e)}
                                />
                            ) : (
                                <div onClick={(e) => onExpand(record, e)}>
                                    <KeyboardArrowDownIcon />
                                </div>
                            )}
                        </IconButton>
                    ),
                }}
                dataSource={data}
            />
        </>
    )
}

export default TableContainer
