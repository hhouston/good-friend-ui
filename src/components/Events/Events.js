import React, { useState } from 'react'
import { gql, useQuery, useMutation } from '@apollo/client'
import TableContainer from './TableContainer'
import { Tabs, Button, Modal } from 'antd'
import PeopleTable from './PeopleTable'
import CalendarView from './CalendarView'
import { PlusOutlined } from '@ant-design/icons'

import EventFormModal from './EventFormModal'
import FriendFormModal from './FriendFormModal'
import { set } from 'lodash'

const { TabPane } = Tabs

const GET_EVENTS = gql`
    query getEventsByUserId($userId: ID!) {
        getEventsByUserId(userId: $userId) {
            id
            title
            userId
            recipientIds
            type
            date
            status
        }
    }
`

const mapKey = (data) => {
    return data.map((item) => ({
        ...item,
        key: item.id
    }))
}

const ADD_FRIEND = gql`
    mutation addFriend($friend: FriendInput!) {
        addFriend(friend: $friend)
    }
`

const GET_FRIENDS = gql`
    query getFriendsByUserId($userId: ID!) {
        getFriendsByUserId(userId: $userId) {
            name
            interests
            age
            gender
        }
    }
`

const AddNewIcon = ({ color }) => (
    <svg
        stroke={color}
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '20px', height: '20px', marginRight: '4px' }}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
    </svg>
)

const Events = () => {
    const [isEventModalVisible, setIsEventModalVisible] = useState(false)
    const [isFriendModalVisible, setIsFriendModalVisible] = useState(false)
    const userId = localStorage.getItem('userId')
    const { loading, error, data } = useQuery(GET_EVENTS, {
        variables: { userId }
    })
    const [friendsResponse] = useMutation(ADD_FRIEND, {
        refetchQueries: [{ query: GET_FRIENDS, variables: { userId } }],
        awaitRefetchQueries: true
    })

    if (loading) return 'loading'
    if (error) return <p>{error}</p>

    const newData = mapKey(data.getEventsByUserId)

    const showEventModal = () => {
        setIsEventModalVisible(true)
    }

    const showFriendModal = () => {
        setIsFriendModalVisible(true)
    }

    return (
        <div>
            <EventFormModal
                isModalVisible={isEventModalVisible}
                setIsModalVisible={setIsEventModalVisible}
                userId={userId}
            />
            <FriendFormModal
                isModalVisible={isFriendModalVisible}
                setIsModalVisible={setIsFriendModalVisible}
                userId={userId}
                friendsMutation={friendsResponse}
            />
            <Tabs
                defaultActiveKey="1"
                centered
                tabBarExtraContent={
                    <div
                        style={{
                            marginBottom: '4px',
                            position: 'absolute',
                            bottom: '0',
                            right: '0'
                        }}
                    >
                        <Button
                            icon={<AddNewIcon color="#FF3399" />}
                            onClick={showFriendModal}
                            type="primary"
                            style={{
                                marginRight: '8px',
                                border: 'none',
                                background: 'rgba(255, 51, 153, 0.1)',
                                color: '#FF3399',
                                fontWeight: '600',
                                height: '44px',
                                fontSize: '14px',
                                display: 'inline-flex',
                                alignItems: 'center',
                                textShadow: 'none'
                            }}
                        >
                            Add new friend
                        </Button>
                        <Button
                            icon={<AddNewIcon color="#fff" />}
                            onClick={showEventModal}
                            type="primary"
                            style={{
                                marginRight: '64px',
                                backgroundColor: '#FF3399',
                                borderColor: '#FF3399',
                                color: '#fff',
                                fontWeight: '600',
                                height: '44px',
                                fontSize: '14px',
                                display: 'inline-flex',
                                alignItems: 'center',
                                textShadow: 'none'
                            }}
                        >
                            Create new event
                        </Button>
                    </div>
                }
            >
                <TabPane tab="Events" key="1">
                    <TableContainer data={newData} />
                </TabPane>
                <TabPane tab="People" key="2">
                    <PeopleTable
                        userId={userId}
                        getFriendsQuery={GET_FRIENDS}
                    />
                </TabPane>
                <TabPane tab="Calendar" key="3">
                    <CalendarView data={data} />
                </TabPane>
            </Tabs>
        </div>
    )
}

export default Events
