import gql from 'graphql-tag'

export const GET_PHOTOS_BY_PLAYER = gql`
  query getPhotosByPlayer($playerId: ID!) {
    getPhotosByPlayer(playerId: $playerId) {
        id
        image(spec: { height: 300, width: 300, watermark: true }) {
          url
          height
          width
        }
    }
  }
`
