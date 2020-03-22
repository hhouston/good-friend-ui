import { isNil, isEmpty } from 'ramda'

import './Cart.css'

import gql from 'graphql-tag'
import React, { Component } from 'react'
import { Query } from 'react-apollo'
import { Card, Button } from 'antd'

export const GET_PHOTO_BY_ID = gql`
  query getPhotosById($ids: [ID!]!) {
    getPhotosById(ids: $ids) {
        id
        image(spec: { height: 300, width: 300, watermark: true }) {
          url
          height
          width
        }
    }
  }
`

class Cart extends Component {
  constructor (props) {
    super(props)

    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this)
  }

  handleRemoveFromCart (photoId) {
    this.props.props.removeItemFromCart(photoId)
  }

  handleImageLoaded () {
    this.setState({ imageStatus: 'loaded' })
  }

  handleImageErrored () {
    this.setState({ imageStatus: 'failed to load' })
  }

  render () {
    const { props } = this.props
    const ids = props.playerState.cartPhotoIds

    if (isNil(ids) || isEmpty(ids)) {
      return (
        <div className='cart-wrapper'>
          <br />
          <br />
          <h3>Cart is empty</h3>
        </div>
      )
    }

    return (
      <div className='cart-wrapper'>
        <Query query={GET_PHOTO_BY_ID} variables={{ ids }}>
          {
            ({ loading, error, data }) => {
              if (error) return <div>{console.log('error', error)}</div>
              // if (error) return <div>{JSON.stringify(data)}</div>
              if (loading) return 'Loading...'

              return (
                <div className='cart-items-wrapper'>
                  {
                    data.getPhotosById.map(photo => {
                      return (
                        <div key={photo.id}>
                          <Card
                            style={{ width: 300, margin: '16px 30px 16px 30px' }}
                            cover={<img alt='example' src={photo.image.url} />}
                            bodyStyle={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                          >
                            <Button
                              type='danger'
                              htmlType='submit'
                              onClick={() => this.handleRemoveFromCart(photo.id)}>
                                Remove from cart
                            </Button>
                          </Card>
                        </div>
                      )
                    })
                  }
                </div>
              )
            }
          }
        </Query>
      </div>
    )
  }
}

export default Cart
