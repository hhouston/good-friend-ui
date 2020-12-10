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

    const loggedIn = !!localStorage.getItem('token')

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
                <div className="logo-wrapper">
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
                    <Menu.Item className={'navbar-item'} key="about">
                        <a href="/about">About</a>
                    </Menu.Item>
                    <Menu.Item className={'navbar-item'} key="contact">
                        <a href="/contact">Contact</a>
                    </Menu.Item>
                    <Menu.Item className={'navbar-item'} key="blog">
                        <a href="/blog">Blog</a>
                    </Menu.Item>
                    {isHome ? (
                        <Button
                            shape="round"
                            size="default"
                            ghost={!hover}
                            onMouseEnter={toggleHover}
                            onMouseLeave={toggleHover}
                            style={{ border: '2px solid #fff' }}
                            onClick={() => history.push('login')}
                        >
                            Sign in
                        </Button>
                    ) : (
                        <Button
                            shape="round"
                            size="default"
                            type="primary"
                            onMouseEnter={toggleHover}
                            onMouseLeave={toggleHover}
                            onClick={() => history.push('login')}
                        >
                            Sign in
                        </Button>
                    )}
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
                style={{ color: '#fff', fontSize: '18px' }}
                theme="dark"
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
                <a href="/contact">Contact</a>
                <a href="/blog">Blog</a>
                <PrimaryButton
                    onClick={() => history.push('login')}
                    type="secondary"
                    style={{ fontWeight: '600', border: '2px solid' }}
                >
                    Sign In
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
