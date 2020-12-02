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

const { Title } = Typography

const { TextArea } = Input

const PeopleTable = ({ userId }) => {
    const { loading, error, data } = useQuery(GET_FRIENDS, {
        variables: { userId }
    })

    if (loading) return 'loading'
    if (error) return <p>{error}</p>
    console.log(data)
    return (
        <div>
            {data.getFriendsByUserId.map((person, index) => (
                <PeopleCard {...person} key={index} />
            ))}
        </div>
    )
}

export default PeopleTable
