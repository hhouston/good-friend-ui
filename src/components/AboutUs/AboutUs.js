import React from 'react'
import './styles.css'
import { Typography } from 'antd'

const { Title } = Typography

const AboutUs = () => {
    return (
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
            </div>
        </div>
    )
}

export default AboutUs
