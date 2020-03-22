import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setCurrentPlayer, addItemToCart, removeItemFromCart } from '../../actions/player'

import PlayerPage from './PlayerPage'

class PlayerPageContainer extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <PlayerPage />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  setCurrentPlayer: (player) => dispatch(setCurrentPlayer(player)),
  addItemToCart: (playerId) => dispatch(addItemToCart(playerId)),
  removeItemFromCart: (playerId) => dispatch(removeItemFromCart(playerId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerPage)
