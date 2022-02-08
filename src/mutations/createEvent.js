import { gql } from '@apollo/client'

export const CREATE_EVENT = gql`
    mutation createEvent($event: EventInput!) {
        createEvent(event: $event)
    }
`

export const ADD_EVENT = gql`
    mutation addEvent($event: EventInput!) {
        addEvent(event: $event) {
            id
        }
    }
`

export const ADD_EVENT_WITH_FRIEND = gql`
    mutation addEvent($input: [EventInput!]!, $friends: [FriendInput]) {
        addEvent(event: $input) {
            id
            createFriends(friends: $friends) {
                id
            }
        }
    }
`

// for mutating event, if we add a recipient to an event, send all recipient ids
// not just the new one
// to remove someone, send all the of recipient ids you want. Delete from frontend and send new list
