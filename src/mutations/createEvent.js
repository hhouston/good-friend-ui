import { gql } from '@apollo/client'

export const CREATE_EVENT = gql`
    mutation createEvent($event: EventInput!) {
        createEvent(event: $event)
    }
`

export const ADD_EVENT_WITH_FRIEND = gql`
    mutation addEvent($input: EventInput!, $friends: [FriendInput]) {
        addEvent(event: $input) {
            id
            createFriends(friends: $friends) {
                id
            }
        }
    }
`
