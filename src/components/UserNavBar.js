import React, { useState } from 'react'
import './NavBar.css'
import { MenuOutlined } from '@ant-design/icons'
import { Menu, Button, Drawer } from 'antd'
import { PrimaryButton } from './common'
import BlobImage from '../images/purple-blob.png'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

const Navbar = ({ isMobile, isHome }) => {
    const [current, setCurrent] = useState(0)
    const [hover, setHover] = useState(false)
    const [visible, setVisible] = useState(false)
    const history = useHistory()

    const handleClick = (e) => {
        setCurrent(e.key)
    }

    const toggleHover = () => {
        setHover(!hover)
    }

    const showDrawer = () => {
        setVisible(true)
    }
    const onClose = () => {
        setVisible(false)
    }

    if (!isMobile) {
        return (
            <div className="navbar-wrapper">
                <div
                    className="logo-wrapper"
                    onClick={() => history.push('home')}
                >
                    <img
                        src={require('../images/geometric-heart-logo.png')}
                        className="logo-image"
                        alt="thank you logo"
                    />

                    <span className="logo">THANK YOU.</span>
                </div>
                <Menu
                    className="navbar"
                    onClick={handleClick}
                    selectedKeys={[current]}
                    mode="horizontal"
                    style={{
                        borderBottom: 'none',
                        zIndex: '30',
                        background: 'none'
                    }}
                    theme={isHome ? 'dark' : 'light'}
                >
                    {isHome ? (
                        <Button
                            shape="round"
                            size="default"
                            ghost={!hover}
                            onMouseEnter={toggleHover}
                            onMouseLeave={toggleHover}
                            style={{ border: '2px solid #fff' }}
                            onClick={() => history.push('viewAll')}
                        >
                            Dashboard
                        </Button>
                    ) : (
                        <Button
                            shape="round"
                            size="default"
                            type="secondary"
                            onMouseEnter={toggleHover}
                            onMouseLeave={toggleHover}
                            onClick={() => history.push('viewAll')}
                        >
                            Dashboard
                        </Button>
                    )}
                    <Menu.Item
                        className={isHome ? 'navbar-item-light' : 'navbar-item'}
                        key="about"
                    >
                        <a href="/about">About</a>
                    </Menu.Item>
                    <Menu.Item
                        className={isHome ? 'navbar-item-light' : 'navbar-item'}
                        key="contact"
                    >
                        <a href="/pricing">Contact</a>
                    </Menu.Item>
                    <Menu.Item
                        className={isHome ? 'navbar-item-light' : 'navbar-item'}
                        key="account"
                    >
                        <a href="/account">
                            <img
                                className="user-navbar-icon"
                                style={{
                                    height: '18px',
                                    width: '18px',
                                    marginRight: '6px'
                                }}
                                src={require('../images/user_profile.png')}
                            ></img>
                            Account
                        </a>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
    return (
        <div className="mobile-header">
            <div className="mobile-logo-wrapper">
                <img
                    src={require('../images/geometric-heart-logo.png')}
                    className="logo-image"
                    alt="thank you logo"
                />
                <span className={visible ? 'logo logo-open' : 'logo'}>
                    THANK YOU
                </span>
            </div>
            <MenuOutlined
                onClick={showDrawer}
                theme="dark"
                style={{ color: '#fff', fontSize: '18px' }}
            />
            <Drawer
                title=" "
                onClose={onClose}
                visible={visible}
                width="100%"
                bodyStyle={{
                    lineHeight: '3.5',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
                headerStyle={{
                    borderBottom: 'none'
                }}
            >
                <img
                    src={BlobImage}
                    className="mobile-drawer-header-img"
                    alt=""
                />
                <a href="/about">About</a>
                <a href="/pricing">Contact</a>
                <a href="/account">Account</a>
                <PrimaryButton
                    onClick={() => history.push('viewAll')}
                    type="secondary"
                    style={{ fontWeight: '600', border: '2px solid' }}
                >
                    Dashboard
                </PrimaryButton>
            </Drawer>
        </div>
    )
}

Navbar.defaultProps = {
    isMobile: false,
    isHome: false
}

export default Navbar
