import React from 'react'
import './styles.css'
import { Typography } from 'antd'

const { Title } = Typography

const Affiliate = () => {
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
                    Affiliate Partnerships
                </Title>
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
                    Thank You
                </Title>
                <div className="about-description">
                    <p className="about-text">
                      THANKYOUGIFT is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com
                      Our curators will always work to find the best products at the most affordable price for our customers regardless of our affiliate partnerships.
                      We do not list products solely for a commission. Our goal is to show the best content possible, and if a product happens to have an affiliate program, we'll apply it, but it has no impact on our decision making.
                      These Parnterships allow THANKYOUGIFT to provide our standard curations free of charge to our customers and we are working hard to build a VIP service which we think our customers will love even move.
                      Happy shopping!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Affiliate
