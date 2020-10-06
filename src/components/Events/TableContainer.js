import React, { useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import './styles.css'
import classNames from 'classnames'

import { useTable, useExpanded } from 'react-table'
import MaUTable from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Collapse from '@material-ui/core/Collapse'
import { makeStyles } from '@material-ui/core/styles'
import { Input } from 'antd'

import { typeMap } from '../../utils/constants'

import moment from 'moment'

const styles = (theme) => ({
    tableHead: {
        color: '#3d5170',
    },
})

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
            verticalAlign: 'middle',
        },
    },
})

const renderRowSubComponent = (row) => {
    console.log(row)
    const classes = useRowStyles()
    // const { getHeaderProps } = row.cells.column
    const { getHeaderProps } = row.cells[0].column
    console.log(row)
    const { type, userId, date } = row.original
    return (
        <>
            <TableHead className={classes.root}>
                {['Loved One', 'Event', 'Notes'].map((header) => (
                    <TableCell {...getHeaderProps()} className={classes.root}>
                        {header}
                    </TableCell>
                ))}
            </TableHead>
            <span
                className="row-subcomponent"
                style={{
                    color: '#425A9A',
                }}
            >
                <TableCell
                    colspan="4"
                    style={{ border: 'none', verticalAlign: 'middle' }}
                >
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span>Name: Bronwyn</span>
                        <span>Age: 28</span>
                    </div>
                </TableCell>
                <TableCell
                    colspan="4"
                    style={{ border: 'none', verticalAlign: 'middle' }}
                >
                    <span
                        className="row-sub-list"
                        styles={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}
                    >
                        <img
                            className={classNames('row-sub-list-img', {
                                revealed: row.isExpanded,
                            })}
                            src={require('../../images/baby.svg')}
                        ></img>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <h2 style={{ margin: '0px' }}>{typeMap[type]}</h2>
                            <span
                                className="row-pill"
                                style={{
                                    backgroundColor: '#FF3399',
                                    color: '#fff',
                                    padding: '4px',
                                    fontSize: '10px',
                                    marginLeft: '8px',
                                }}
                            >
                                Upcoming
                            </span>
                        </div>
                    </span>
                </TableCell>
                <TableCell
                    alignCenter
                    colspan="4"
                    style={{ border: 'none', verticalAlign: 'middle' }}
                >
                    <Input.TextArea />
                </TableCell>
            </span>
        </>
    )
}

const TableContainer = ({ columns, data }) => {
    const classes = useRowStyles()
    const [open, setOpen] = React.useState(false)
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state: { expanded },
    } = useTable(
        {
            columns,
            data,
        },
        useExpanded
    )

    return (
        // If you're curious what props we get as a result of calling our getter functions (getTableProps(), getRowProps())
        // Feel free to use console.log()  This will help you better understand how react table works underhood.
        <MaUTable
            {...getTableProps()}
            style={{
                maxWidth: '80%',
                margin: '0 auto',
                marginTop: '80px',
                borderRadius: '12px',
                boxShadow:
                    '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            }}
        >
            <TableHead>
                {headerGroups.map((headerGroup) => (
                    <TableRow
                        {...headerGroup.getHeaderGroupProps()}
                        className={classes.root}
                    >
                        {headerGroup.headers.map((column) => (
                            <TableCell
                                {...column.getHeaderProps()}
                                style={{
                                    color: '#ADC0D6',
                                    textTransform: 'uppercase',
                                    backgroundColor: '#F5F8FB',
                                }}
                            >
                                {column.render('Header')}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableHead>

            <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row)
                    return (
                        <>
                            <React.Fragment
                                key={row.getRowProps().key}
                            ></React.Fragment>
                            <TableRow>
                                {row.cells.map((cell) => {
                                    return (
                                        <>
                                            <TableCell
                                                {...cell.getCellProps()}
                                                style={{
                                                    color: '#425A9A',
                                                    fontWeight: '500',
                                                }}
                                            >
                                                {cell.render('Cell')}
                                            </TableCell>
                                        </>
                                    )
                                })}
                            </TableRow>
                            <TableRow>
                                <Collapse in={row.isExpanded}>
                                    {renderRowSubComponent(row)}
                                </Collapse>
                            </TableRow>
                        </>
                    )
                })}
            </tbody>
        </MaUTable>
    )
}

export default TableContainer
