import React from 'react'
import { gql, useQuery } from '@apollo/client'
import TableContainer from './TableContainer'
import moment from 'moment'
import { typeMap } from '../../utils/constants'
import Collapse from '@material-ui/core/Collapse'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import IconButton from '@material-ui/core/IconButton'

const GET_EVENTS = gql`
    query Events($userId: ID!) {
        getEventsByUserId(userId: $userId) {
            userId
            id
            type
            date
        }
    }
`

const Events = () => {
    const { loading, error, data } = useQuery(GET_EVENTS, {
        variables: { userId: 2 },
    })
    const columns = React.useMemo(
        () => [
            {
                // Build our expander column
                id: 'expander', // Make sure it has an ID
                Header: () => null,
                Cell: ({ row }) => (
                    // Use the row.canExpand and row.getToggleRowExpandedProps prop getter
                    // to build the toggle for expanding a row
                    <span {...row.getToggleRowExpandedProps()}>
                        {
                            <IconButton aria-label="expand row" size="small">
                                {row.isExpanded ? (
                                    <KeyboardArrowUpIcon />
                                ) : (
                                    <KeyboardArrowDownIcon />
                                )}
                            </IconButton>
                        }
                    </span>
                ),
            },
            {
                Header: 'Type',
                accessor: (row) => typeMap[row.type],
            },
            {
                Header: 'User ID',
                accessor: 'userId',
            },
            {
                Header: 'Date',
                accessor: (row) =>
                    moment.unix(row.date / 1000).format('DD MMM YYYY hh:mm a'),
            },
        ],
        []
    )
    if (loading) return 'loading'
    if (error) return <p>{error}</p>
    return <TableContainer columns={columns} data={data.getEventsByUserId} />
}

export default Events
