import React, { Component } from 'react'
import './Home.css'
import { Carousel } from 'antd'

class HomeCarousel extends Component {
  render () {
    return (
      <div>
        <Carousel autoplay autoplaySpeed={3000}>
          <div className='carousel-image'><img src={require('../images/lax1.jpeg')} /></div>
          <div className='carousel-image'><img src={require('../images/lax4.JPG')} /></div>
          <div className='carousel-image'><img src={require('../images/lax3.jpeg')} /></div>
        </Carousel>
      </div>
    )
  }
}

export default HomeCarousel
