import React from 'react'
import { gql, useQuery } from '@apollo/client'
import TableContainer from './TableContainer'
import AllEventsTable from './AllEventsTable'
import moment from 'moment'
import { typeMap } from '../../utils/constants'
import Collapse from '@material-ui/core/Collapse'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import IconButton from '@material-ui/core/IconButton'
import Love from '../../images/love.svg'
import { Tabs, Layout } from 'antd'
import { NavBar } from '../NavBar'
import PeopleTable from './PeopleTable'
import CalendarView from './CalendarView'
const { Header, Content, Footer, Sider } = Layout

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

const Events = () => {
    const userId = localStorage.getItem('userId')
    const { loading, error, data } = useQuery(GET_EVENTS, {
        variables: { userId }
    })

    if (loading) return 'loading'
    if (error) return <p>{error}</p>
    const newData = mapKey(data.getEventsByUserId)

    return (
        <div>
            <Tabs defaultActiveKey="1" centered>
                <TabPane tab="Events" key="1">
                    <TableContainer data={newData} />
                </TabPane>
                <TabPane tab="People" key="2">
                    <PeopleTable userId={userId} />
                </TabPane>
                <TabPane tab="Calendar" key="3">
                    <CalendarView data={data} />
                </TabPane>
            </Tabs>
        </div>
    )
}

export default Events
