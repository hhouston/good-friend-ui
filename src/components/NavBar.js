import React, { Component } from 'react'
import './NavBar.css'
import { Menu, Icon } from 'antd'
const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

class NavBar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      current: 'home'
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    this.setState({ current: e.key })
  }

  render () {
    return (
      <div className='navbar-wrapper'>
        <div className='navbar-logo' />
        <Menu className='navbar' onClick={this.handleClick} selectedKeys={[this.state.current]} mode='horizontal' style={{ borderBottom: 'none' }}>
          <SubMenu title={<span className='submenu-title-wrapper'>
            <Icon type='camera' />Gallery</span>}>
            <MenuItemGroup title='Lacrosse'>
              <Menu.Item key='Riptide Orange'>Riptide Orange</Menu.Item>
              <Menu.Item key='Riptide Grey'>Riptide Grey</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title='Soccer'>
              <Menu.Item key='Starfires'>Starfires</Menu.Item>
            </MenuItemGroup>
          </SubMenu>
          <Menu.Item key='about'>About</Menu.Item>
          <Menu.Item key='contact'>Contact</Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default NavBar
