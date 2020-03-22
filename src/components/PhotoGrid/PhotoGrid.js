import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Card, Icon, Avatar } from 'antd'
import LazyLoad from 'react-lazyload'
import './PhotoGrid.css'

const { Meta } = Card

const size = 'small'
const device = 'mobile'
const watermark = true

const GET_PHOTOS = gql`
  query getPhotos($id: ID! $type: String!) {
    getPhotos(id: $id type: $type) {
      id
      image(spec: { height: 300, width: 300, watermark: true }) {
        url
        height
        width
      }
    }
  }
`

class PhotoGrid extends Component {
  constructor (props) {
    super(props)

    console.log('props: ', props)
    const { id, type } = props.props

    this.state = {
      id,
      type
    }
  }

  render () {
    console.log('state: ', this.state)
    return (
      <div>
        <h1>Photo grid</h1>
        <div className='photo-grid'>
          <Query query={GET_PHOTOS} variables={{ id: this.state.id, type: this.state.type }}>
            {({ loading, error, data }) => {
              if (loading) return 'Loading...'
              return (
                <div className='player-wrapper'>
                  {data.getPhotos.map((photo) =>
                    <div key={photo.id}>
                        <Card
                          style={{ width: 300, margin: '16px 56px 16px 56px', borderRadius: '0.6em' }}
                          cover={
                            <LazyLoad>
                              <img
                                alt='example'
                                src={photo.image.url}
                                onClick={() => this.openImageInTab(photo.id)}
                                style={{ borderRadius: '0.6em 0.6em 0 0' }}
                                />
                            </LazyLoad>
                          }
                          actions={[<span>$25</span> ]}
                          hoverable
                          >
                        </Card>
                    </div>
                  )}
                </div>
              )
            }}
          </Query>
        </div>
      </div>
    )
  }
}

export default PhotoGrid
