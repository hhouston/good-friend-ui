import React, { Component } from 'react'
import { Modal, Button, Spin, Skeleton, Icon } from 'antd'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import './PlayerPage.css'
import LoadingIcon from '../LoadingIcon'

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

const modalCloseIconStyle = {
  position: 'fixed',
  color: '#fff',
  fontSize: '30px',
  top: '20px',
  right: '40px'
}

class PlayerPhotoViewer extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { visible, loading, showModal, handleCancel, photoId } = this.props
    return (
      <div>
        <Query query={GET_PHOTO_BY_ID} variables={{ ids: [photoId] }}>
          {({ loading, error, data }) => {
            if (error) return <div />
            if (loading) return 'Loading...'
            return (
              <div className={visible ? 'modal-wrapper' : 'modal-wrapper-closed'}>
                <Icon type='close' className='modal-close' style={modalCloseIconStyle} onClick={handleCancel} />
                <LoadingIcon />
                <div onClick={() => showModal(data.getPhotosById.id)} className='individual-player-photo'>
                  <img src={data.getPhotosById[0].image.url} className='team-hero-image' />
                </div>
              </div>
            )
          }}
        </Query>
      </div>
    )
  }
}

export default PlayerPhotoViewer
