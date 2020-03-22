import React, { Component } from 'react'
import { Menu, Icon, Button } from 'antd'

class CartButton extends Component {
  constructor (props) {
    super(props)

    this.state = {
      added: false
    }

    this.handleAddClick = this.handleAddClick.bind(this)
  }

  handleAddClick () {
    this.setState({ added: true })
    this.props.handleAddToCart()
  }

  handleRemoveClick () {
    this.setState({ added: false })
    this.props.handleRemoveFromCart()
  }

  render () {
    const buttonText = this.state.added ? 'Added!' : 'Click to add to cart'
    return (
      <div className='cart-button'>
        <Button className='cart-button-icon' disabled={!this.state.added} size='small' type='primary' shape='circle' icon={'minus'} onClick={() => this.handleRemoveClick()} />
        <Button className='cart-button-icon' disabled={this.state.added} size='small' type='primary' shape='circle' icon={this.state.added ? 'check' : 'plus'} onClick={() => this.handleAddClick()} />
        <h4 className='cart-button-text'>{buttonText}</h4>
      </div>
    )
  }
}

export default CartButton
