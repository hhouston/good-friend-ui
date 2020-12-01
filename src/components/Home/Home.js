import React, { useState, useEffect, useRef } from 'react'
import './styles.css'
import NavBar from '../NavBar'
import UserNavBar from '../UserNavBar'
import PersonalGifts from '../PersonalGifts'
import HowItWorks from '../HowItWorks'
import FeaturedItem from '../FeaturedItem'
import WhyWeAre from '../WhyWeAre'
// import Testimonials from '../Testimonials'
// import Experts from '../Experts'
import Donations from '../Donations'
import Footer from '../Footer'
import HeaderImages from './HeaderImages'
import { Typography, Button, Layout, Spin } from 'antd'
import { PricingCards } from '../../components/SignUp'
import { Shipping } from '../../components/Shipping'

import { ArrowDownOutlined } from '@ant-design/icons'
import Typed from 'react-typed'
import { useLazyQuery, gql } from '@apollo/client'
import { TYPED_STRINGS } from '../../utils/constants'
import { useHistory } from 'react-router-dom'

import { useIsMobile, useIsTablet } from '../../hooks/window-resize'

const { Header } = Layout

const { Title } = Typography

export const GET_TEAMS = gql`
    query {
        getTeams {
            id
            name
        }
    }
`

const Home = () => {
    const initialState = {
        hover: false,
        scrollTop: 0,
        contentInView: false,
        contentHeight: 0,
        imageLoaded: 0,
    }

    const isLoggedIn = !!localStorage.getItem('token')

    const [state, updateState] = useState(initialState)
    const history = useHistory()

    const isMobile = useIsMobile()
    const isTablet = useIsTablet()

    const handleImageLoaded = () => {
        updateState((prevState) => ({
            ...prevState,
            imageLoaded: prevState.imageLoaded + 1,
        }))
    }

    const [getTeams, { loading, data }] = useLazyQuery(GET_TEAMS, {
        onCompleted: () => console.log(data),
    })

    const applyNowClick = () => {
        getTeams()
        history.push('/signup')
    }

    const contentRef = useRef(null)

    useEffect(() => {
        const findContentHeight = () => {
            const { top } = contentRef.current.getBoundingClientRect()
            const offset = top + state.scrollTop - 120
            updateState((prevState) => ({
                ...prevState,
                contentHeight: offset,
            }))
        }
        findContentHeight()
    }, [])

    useEffect(() => {
        const { top } = contentRef.current.getBoundingClientRect()
        const onScroll = (e) => {
            updateState((prevState) => ({
                ...prevState,
                scrollTop: e.target.documentElement.scrollTop,
                contentInView: e.target.documentElement.scrollTop >= top,
            }))
        }
        window.addEventListener('scroll', onScroll)

        return () => window.removeEventListener('scroll', onScroll)
    }, [state.scrollTop])

    const toggleHover = () => {
        updateState({ ...state, hover: !state.hover })
    }

    const scrollToRef = () => {
        window.scrollTo({ top: state.contentHeight, behavior: 'smooth' })
    }

    const titleSize = isTablet ? '32px' : '54px'
    const titleTwoSize = isMobile ? '32px' : '38px'

    return (
        <div className="app">
            {state.imageLoaded < 2 ? (
                <div className="loading-overlay">
                    <Spin className="spinner" size="large" />
                </div>
            ) : null}
            <div className="header-section">
                <Header style={{ background: 'transparent', textAlign: 'end' }}>
                    {isLoggedIn ? (
                        <UserNavBar isMobile={isMobile} isHome />
                    ) : (
                        <NavBar isMobile={isMobile} isHome />
                    )}
                </Header>
                <div className="container">
                    <div className="site-layout site-layout-subheader">
                        <div className="main-section">
                            <div className="subheader-text-section">
                                <div className="subheader">
                                    <Title
                                        type="primary"
                                        className="title"
                                        style={{
                                            margin: '0',
                                            fontSize: titleSize,
                                            color: isMobile
                                                ? '#fff'
                                                : 'inherit',
                                        }}
                                    >
                                        Your personal gift curator for
                                    </Title>
                                    <Typed
                                        classname="title-typing"
                                        strings={TYPED_STRINGS}
                                        typeSpeed={40}
                                        backSpeed={50}
                                        loop
                                        backDelay={1000}
                                        style={{
                                            fontSize: titleSize,
                                            borderBottom: '8px solid #FF3399',
                                            color: isMobile
                                                ? '#fff'
                                                : 'inherit',
                                        }}
                                    ></Typed>
                                </div>
                                <HeaderImages
                                    isMobile={isMobile}
                                    isVisible={state.contentInView}
                                    handleImageLoaded={handleImageLoaded}
                                />
                            </div>
                            <Button
                                onClick={() => applyNowClick()}
                                className="apply-now-button"
                                type="secondary"
                                shape="round"
                                size="large"
                                onMouseEnter={toggleHover}
                                onMouseLeave={toggleHover}
                                style={{
                                    background:
                                        'linear-gradient(90deg,#FF3399 0,#FF3399, 76%,#D03AFD',
                                    color: '#fff',
                                    border: 'none',
                                    width: '180px',
                                    height: '54px',
                                }}
                            >
                                Get started
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="subheader-separator">
                <Button
                    type="secondary"
                    shape="circle"
                    size="large"
                    onClick={() => scrollToRef(contentRef)}
                    ghost
                    style={{
                        boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
                        color: '#2b137d',
                    }}
                >
                    <ArrowDownOutlined />
                </Button>
            </div>

            <PersonalGifts titleSize={titleTwoSize} contentRef={contentRef} />
            <HowItWorks titleSize={titleTwoSize} />
            <FeaturedItem titleSize={titleTwoSize} />
            <WhyWeAre
                titleSize={titleTwoSize}
                isMobile={isMobile}
                isTablet={isTablet}
            />
            <Shipping />
            <Donations titleSize={titleTwoSize} />
            <Footer titleSize={titleTwoSize} />
        </div>
    )
}

export default Home
