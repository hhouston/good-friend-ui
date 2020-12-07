import { Calendar, Badge } from 'antd'
import React from 'react'
import moment from 'moment'

const CalendarView = ({ data }) => {
    function getListData(value) {
        let listData

        data.getEventsByUserId.map((event) => {
            if (moment(Number(event.date)).isSame(value, 'day')) {
                listData = event.title
            }
        })
        return listData || []
    }

    function dateCellRender(value) {
        const listData = getListData(value)
        return <span className="events">{listData}</span>
    }

    function getMonthData(value) {
        if (value.month() === 8) {
            return 1394
        }
    }

    function monthCellRender(value) {
        const num = getMonthData(value)
        return num ? (
            <div className="notes-month">
                <section>{num}</section>
                <span>Backlog number</span>
            </div>
        ) : null
    }
    return (
        <Calendar
            dateCellRender={dateCellRender}
            monthCellRender={monthCellRender}
            style={{
                width: '80%',
                margin: '0 auto',
                padding: '64px',
                boxShadow:
                    '0 10px 15px -3px rgba(233, 234, 241, 1), 0 4px 6px -2px rgba(233, 234, 241, 0.5)'
            }}
        />
    )
}

export default CalendarView
