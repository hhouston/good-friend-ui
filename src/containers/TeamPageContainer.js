import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setCurrentPlayer, addItemToCart } from '../actions/player'

import TeamPage from '../components/TeamPage'

class TeamPageContainer extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <TeamPage />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  setCurrentPlayer: (player) => dispatch(setCurrentPlayer(player)),
  addItemToCart: () => dispatch(addItemToCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(TeamPage)
