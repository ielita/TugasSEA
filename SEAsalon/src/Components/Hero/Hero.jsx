import React from 'react'
import './Hero.css'
import right_arrow from '../../assets/right-arrow.png';

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>Beauty and Elegance Redefined</h1>
            <p>Unveil your true elegance with our beautifying treatments, enhancing your radiance one service at a time.</p>
            <button className='btna'>See more <img src={right_arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero