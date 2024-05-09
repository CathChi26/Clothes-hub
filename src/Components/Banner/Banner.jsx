import React from 'react'
import './Banner.css'
import banner from '../../assets/Assets/banner_women.png'
import es from '../../assets/Assets/girl_ban.png'
import girl from '../../assets/Assets/girl_white.png'
import girls from '../../assets/Assets/women_es.png'

const Banner = () => {
  return (
 <>
 <div>
  <div className='ban'>
  <img src={banner} alt=''/>
  </div>

 </div>

{/* popular in style */}
 <div>

  <div>
    <h3 className='popular'>Popular in styles</h3>
  </div>
  <div className='images'>
    <img src={es} alt=''/>
    <img src={girl} alt=''/>
    <img src={girls} alt=''/>
  </div>

 </div>
 
 </>
  )
}

export default Banner