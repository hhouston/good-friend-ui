import React, { useState } from 'react'
import './NavBar.css'
import { MenuOutlined } from '@ant-design/icons'
import { Menu, Button, Drawer } from 'antd'
import { PrimaryButton } from './common'
import BlobImage from '../images/purple-blob.png'

const Navbar = ({ isMobile }) => {
    const [current, setCurrent] = useState(0)
    const [hover, setHover] = useState(false)
    const [visible, setVisible] = useState(false)

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
                    theme="dark"
                    style={{ borderBottom: 'none', zIndex: '30' }}
                >
                    <Menu.Item className="navbar-item" key="pricing">
                        Pricing Page
                    </Menu.Item>
                    <Menu.Item className="navbar-item" key="about">
                        About
                    </Menu.Item>
                    <Menu.Item className="navbar-item" key="careers">
                        Careers
                    </Menu.Item>
                    <Button
                        shape="round"
                        size="default"
                        ghost={!hover}
                        onMouseEnter={toggleHover}
                        onMouseLeave={toggleHover}
                        style={{ border: '2px solid #fff' }}
                    >
                        Sign in
                    </Button>
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
                    alignItems: 'center',
                }}
                headerStyle={{
                    borderBottom: 'none',
                }}
            >
                <img
                    src={BlobImage}
                    className="mobile-drawer-header-img"
                    alt=""
                />
                <p>Pricing Page</p>
                <p>Packages</p>
                <p>About</p>
                <p>Careers</p>
                <PrimaryButton
                    type="secondary"
                    style={{ fontWeight: '600', border: '2px solid' }}
                >
                    Sign In
                </PrimaryButton>
            </Drawer>
        </div>
    )
}

export default Navbar
