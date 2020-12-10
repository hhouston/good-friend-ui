import React from 'react'
import './styles.css'
import { Typography } from 'antd'

const { Title } = Typography

const Blog = () => {
    return (
        <div className="blog">
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
                    BLOG
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
                  The Hottest Christmas Gifts For 2020 For Every Age

                </Title>
                <div className="blog-description">
                    <p className="blog-text">
                        Don’t know what gift to buy this year? The good news is there are so many great gift ideas out there for 2020, from gifts for kids, to teens and their parents - there’s something for everyone. Here’s what our expert personal shoppers recommend…
                    </p>
                </div>

                <div className="blog-description">

                  <p className="blog-text">
                    <h2>Best gift for girls</h2>
                  </p>
                </div>

                <div className="blog-description"><h3>Squeakee the Balloon Dog</h3></div>

                <div className="blog-description">
                  <p className="blog-text">
                    Interactive pets have been popular since the Furby - and with every year they get smarter, cuter, and more irresistible. Top of the list this year is Squeakee the Balloon Dog: a toy which looks like a balloon animal, but which is actually an interactive pet with over 60 sounds and movements. Other interactive pet highlights this year come in the form of Fifi the Flossing Sloth, and Gotta Go Flamingo, too.
                  </p>

                  <a target="_blank"  href="https://www.amazon.com/gp/product/B08L9TTSM2/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B08L9TTSM2&linkCode=as2&tag=thankyougif0c-20&linkId=52216b1963d748dd75c1331c65035e2e">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B08L9TTSM2&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=thankyougif0c-20" />
                  </a>
                </div>

                <div className="blog-description">

                  <p className="blog-text">
                    <h2>Best gift for boys</h2>
                  </p>
                </div>

                <div className="blog-description"><h3>Paw Patrol Dino Rescue Dino Patroller</h3></div>

                <div className="blog-description">
                  <a target="_blank"  href="https://www.amazon.com/gp/product/B084BN75SC/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B084BN75SC&linkCode=as2&tag=thankyougif0c-20&linkId=a2fe36cdd7c86b344746e03095d523ff">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B084BN75SC&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=thankyougif0c-20" />
                  </a>
                  <p className="blog-text">
                    Combining three things almost unanimously obsessed over by kids, Paw Patrol, dinosaurs and trucks, this toy is a surefire winner. With buttons to control it, this motorised truck whizzes along without having to push it, and also comes with a T-Rex figure and a Chase character figure, for hours of Paw Patrol fun.
                  </p>
                </div>
            </div>
        </div>
    )
}

export default Blog
