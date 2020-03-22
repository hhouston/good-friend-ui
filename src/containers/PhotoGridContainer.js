import React, { Component } from 'react'
import { connect } from 'react-redux'

import { PhotoGrid } from '../components/PhotoGrid'

class PhotoGridContainer extends Component {
  render () {
    return (
      <div>
        <PhotoGrid props={{id: 'team-id', type: 'team'}}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state
})

export default connect(
  mapStateToProps
)(PhotoGridContainer)
