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
import { gql, useQuery } from '@apollo/client'
import PeopleCard from './PeopleCard'

const { Title } = Typography

const { TextArea } = Input

const PeopleTable = ({ userId, getFriendsQuery }) => {
    const { loading, error, data } = useQuery(getFriendsQuery, {
        variables: { userId }
    })

    if (loading) return 'loading'
    if (error) return <p>{error}</p>
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            {data.getFriendsByUserId.map((person, index) => (
                <PeopleCard {...person} key={index} />
            ))}
        </div>
    )
}

export default PeopleTable
