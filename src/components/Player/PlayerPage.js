import React, { Component } from 'react'
import { Query } from 'react-apollo'
import { Card, Avatar, Skeleton, Icon, Button } from 'antd'
import gql from 'graphql-tag'
import { withApollo } from 'react-apollo'
import { RIPTIDE_TEAM_ID } from '../../utils/constants'
import CartButton from './CartButton'

import './PlayerPage.css'
import PlayerPhotoViewer from './PlayerPhotoViewer'

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

export const GET_PHOTO_BY_ID = gql`
  query getPhotosById($ids: [ID!]!) {
    getPhotosById(ids: $ids) {
        id
        image(spec: { height: 1200, width: 1200, watermark: true }) {
          url
          height
          width
        }
    }
  }
`

class PlayerPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      loading: false,
      visible: false,
      currentPhotoId: ''
    }

    this.showModal = this.showModal.bind(this)
    this.handleAddToCart = this.handleAddToCart.bind(this)
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.openImageInTab = this.openImageInTab.bind(this)
  }

  componentDidMount () {
    window.scrollTo(0, 0)
  }

  showModal (photoId) {
    this.setState({ visible: true, currentPhotoId: photoId })
  }

  handleAddToCart (photoId) {
    this.props.addItemToCart(photoId)
    this.setState({ visible: false })
  }

  showModal (photoId) {
    this.setState({ visible: true, currentPhotoId: photoId })
  }

  handleAddToCart (photoId) {
    this.props.addItemToCart(photoId)
    this.setState({ visible: false })
  }

  handleRemoveFromCart (photoId) {
    this.props.removeItemFromCart(photoId)
  }

  handleCancel () {
    this.setState({ visible: false })
  }

  handleImageLoaded () {
    this.setState({ imageStatus: 'loaded' })
  }

  handleImageErrored () {
    this.setState({ imageStatus: 'failed to load' })
  }

  async openImageInTab(photoId) {
      const { data } = await this.props.client.query({
          query: GET_PHOTO_BY_ID,
          variables: { ids: [photoId] }
      })
      window.open(data.getPhotosById[0].image.url, "_blank")
  }

  render () {
    const { playerState } = this.props
    const { playerId } = this.props.match.params
    const { visible, loading, currentPhotoId } = this.state
    return (
      <div className='player-grid-wrapper'>
        <div className='player-grid-header'>
          <h3 className='player-name'>{playerState.player}</h3>
          <Icon type='shopping-cart' style={{ fontSize: '32px', transform: 'translateY(-6px)' }} theme='outlined' onClick={() => this.props.history.push('/checkout')} />
          <p>{playerState.amount}</p>

        </div>
        <Query query={GET_PHOTOS_BY_PLAYER} variables={{ playerId: playerId }}>
          {({ loading, error, data }) => {
            if (loading) return 'Loading...'
            return (
              <div className='player-wrapper'>
                {data.getPhotosByPlayer.map((player) =>
                  <div key={player.id}>
                    <Card
                      style={{ width: 300, margin: '16px 56px 16px 56px', borderRadius: '0.6em' }}
                      cover={<img alt='example' src={player.image.url} onClick={() => this.openImageInTab(player.id)} style={{ borderRadius: '0.6em 0.6em 0 0' }} />}
                      actions={[<span>$25</span> ]}
                      hoverable
                    >
                      <CartButton handleAddToCart={() => this.handleAddToCart(player.id)} handleRemoveFromCart={() => this.handleRemoveFromCart(player.id)} />
                    </Card>
                  </div>
                )}
              </div>
            )
          }}
        </Query>
        <PlayerPhotoViewer visible={visible} loading={loading} showModal={this.showModal}
          handleCancel={this.handleCancel} photoId={currentPhotoId} />
      </div>
    )
  }
}

export default withApollo(PlayerPage)
