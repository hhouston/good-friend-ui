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
                        marginTop: '6rem',
                    }}
                >
                    ABOUT US
                </Title>
                <Title
                    type="secondary"
                    level={2}
                    className="subtitle"
                    style={{
                        fontSize: '38px',
                        margin: '0',
                        marginBottom: '2rem',
                    }}
                >
                    Our Mission
                </Title>
                <div className="about-description">
                    <p className="about-text">
                        Ut at maximus magna. Vestibulum interdum sapien in
                        facilisis imperdiet. Pellentesque habitant morbi
                        tristique senectus et netus et malesuada fames ac turpis
                        egestas. Proin ac placerat risus. Nullam eget tortor
                        felis. Nulla facilisi. Vestibulum mattis diam non luctus
                        elementum. <br /> <br />
                        Cras sollicitudin, nisi in semper viverra, felis diam
                        consequat mi, quis tincidunt ligula velit ut tortor.
                    </p>
                    <p className="about-text">
                        In hac habitasse platea dictumst. Nam nibh diam, varius
                        quis lectus eget, laoreet cursus metus. Morbi augue
                        lectus, dapibus eget justo nec, consectetur auctor nisl.
                        Fusce purus felis, aliquam et quam eu, tincidunt luctus
                        neque. Phasellus eu pellentesque turpis, ac cursus orci.
                        Nullam facilisis mauris et fermentum vulputate.
                    </p>
                </div>
            </div>
            <Title
                level={3}
                type="secondary"
                style={{
                    color: 'rgba(60, 13, 153, 0.5)',
                    letterSpacing: '2px',
                    fontSize: '16px',
                    marginTop: '6rem',
                }}
            >
                MEET OUR LOCAL ARTISTS
            </Title>
            <Title
                type="secondary"
                level={2}
                className="subtitle"
                style={{
                    fontSize: '38px',
                    margin: '0',
                    marginBottom: '2rem',
                }}
            >
                Partnerships
            </Title>
            <div className="artist-card">name</div>
        </div>
    )
}

export default AboutUs
