import React from 'react'
import './styles.css'
import NavBar from '../NavBar'
import UserNavBar from '../UserNavBar'

import { useIsMobile } from '../../hooks/window-resize'
import { Typography, Layout } from 'antd'

const { Title } = Typography
const { Header } = Layout

const AboutUs = () => {
    const isLoggedIn = !!localStorage.getItem('token')
    const isMobile = useIsMobile()

    return (
          <div className="header-section">
              <Header style={{  background: 'transparent', textAlign: 'end' }}>
                  {isLoggedIn ? (
                      <UserNavBar isMobile={isMobile} />
                  ) : (
                      <NavBar isMobile={isMobile} />
                  )}
              </Header>
        <div className="about-us">
            <div>
                <Title
                    level={3}
                    type="secondary"
                    style={{
                        color: 'rgba(60, 13, 153, 0.5)',
                        letterSpacing: '2px',
                        fontSize: '16px',
                        marginTop: '6rem'
                    }}
                >
                    Thanks for stopping by!
                </Title>
                <div className="about-description">
                  <video controls width="1000">

                      <source src="./videos/thank-you-ad.mp4"
                              type="video/mp4" />

                      Sorry, your browser doesn't support embedded videos.
                  </video>
                </div>
                <Title
                    type="secondary"
                    level={2}
                    className="subtitle"
                    style={{
                        fontSize: '38px',
                        margin: '0',
                        marginBottom: '2rem'
                    }}
                >
                    Ask Us About Our Hand Painted Gift Wrapping!
                </Title>

                <img src='images/custom-gift-wrapping.jpeg' width="680.5" height="970.5" alt="picture"/>

            </div>
        </div>
      </div>
    )
}

export default AboutUs
