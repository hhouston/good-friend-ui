import React from 'react'
import { Typography } from 'antd'
import { PrimaryButton } from '../common'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { curators } from './curatorData'

import './styles.css'

const { Title } = Typography

const GiftIcon = () => (
    <svg
        className="w-6 h-6"
        fill="none"
        stroke="rgb(102, 126, 234)"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        style={{
            background: '#E0E7FF',
            borderRadius: '50%',
            height: '24px',
            width: '24px',
            padding: '4px',
            marginRight: '8px'
        }}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
        />
    </svg>
)

const ArrowIcon = () => (
    <svg
        className="w-6 h-6"
        fill="none"
        stroke="#818CF8"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        style={{
            height: '14px',
            width: '14px',
            marginLeft: '8px'
        }}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
    </svg>
)

const Expert = ({
    name,
    title,
    img,
    areas,
    top_gift_name,
    top_gift_url,
    gifts_curated
}) => {
    return (
        <div className="curator-card">
            <img src={require(`./images/${img}`)} className="curator-img"></img>
            <div className="curator-content">
                <span
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                >
                    <Title
                        className="subtitle"
                        level={2}
                        style={{
                            fontSize: '24px',
                            margin: '0',
                            color: 'rgb(55, 48, 163)'
                        }}
                    >
                        {name}
                    </Title>
                    <span
                        style={{
                            display: 'flex',
                            color: '#818CF8',
                            fontSize: '14px',
                            fontWeight: '500'
                        }}
                    >
                        <GiftIcon />
                        {`${gifts_curated} gifts curated`}
                    </span>
                </span>
                <h3 className="curator-title">{title}</h3>
                <ul
                    style={{
                        display: 'inline',
                        listStyle: 'none',
                        margin: '0',
                        padding: '0'
                    }}
                >
                    {areas.map((area, idx) => (
                        <li key={idx} className="curator-areas">
                            {area}
                        </li>
                    ))}
                </ul>
                <span
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        marginTop: 'auto'
                    }}
                >
                    <span style={{ fontWeight: 'bold', marginRight: '8px' }}>
                        {'Top Gift:'}
                    </span>
                    <a href={top_gift_url} style={{ color: '#818CF8' }}>
                        {top_gift_name}
                    </a>
                    <ArrowIcon />
                </span>
            </div>
        </div>
    )
}

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 5000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToShow: 1,
            }
        }
    ]
};

const Experts = ({ titleSize, isTablet, isMobile }) => {
    return (
        <div>
            <div className="curators-wrapper">
                <Title
                    type="secondary"
                    level={2}
                    className="subtitle"
                    style={{ fontSize: titleSize, textAlign: 'center' }}
                >
                    Who We Are
                </Title>
                <Slider {...settings}>
                    {curators.map((curator, i) => (
                        <div>
                            <Expert {...curator} />
                        </div>
                    ))}
                </Slider>
                {/* <div className="curator-cards">
                    {curators.map((curator, i) => (
                        <Expert {...curator} />
                    ))}
                </div> */}
            </div>
        </div>
    )
}

export default Experts
