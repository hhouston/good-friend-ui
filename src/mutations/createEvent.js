import { gql } from "@apollo/client";

export const CREATE_EVENT = gql`
  mutation createEvent($event: EventInput!) {
    createEvent(event: $event)
  }
`;
