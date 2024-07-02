import React from 'react'
import './About.css'
import owner from '../../assets/owner.jpg'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={owner} alt="" className='founder-img'/>
        </div>
        <div className="about-right">
            <h3>OUR FOUNDER</h3>
            <h2>Sophistique Beauty: Timeless beauty, bespoke rejuvenation.</h2>
            <p>Sophia Delacroix, founder of SEA Salon, combines haute couture sophistication with a deep skincare understanding, providing bespoke treatments in a luxurious environment. Her commitment to excellence and personalized service has made her salon a sought-after destination for those seeking sophisticated rejuvenation.</p>
        </div>
    </div>
  )
}

export default About