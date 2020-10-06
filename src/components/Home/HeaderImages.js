import React from 'react'
import HeaderImage from '../../images/thank-you-header.png'
import HeaderImage2 from '../../images/thank-you-header@2x.png'

const HeaderImages = ({ isMobile, isVisible, handleImageLoaded }) => {
    return (
        <>
            {
                <img
                    src={HeaderImage}
                    srcSet={`${HeaderImage} 1x, ${HeaderImage2} 2x`}
                    className={'hero-image'}
                    onLoad={handleImageLoaded}
                    alt="header"
                />
            }
            {
                <img
                    src={require('../../images/purple-blob.png')}
                    className="purple-blob"
                    onLoad={handleImageLoaded}
                    alt=""
                />
            }
            <section className={`fixed-gift ${isVisible ? 'is-visible' : ''}`}>
                <img
                    src={require('../../images/transparent-gift.svg')}
                    className="floating-gift"
                    alt="gift count"
                />
            </section>
        </>
    )
}

export default HeaderImages
