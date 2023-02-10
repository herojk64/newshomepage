import React from 'react'
import Deskpic from '../images/image-web-3-desktop.jpg'
import Mobapic from '../images/image-web-3-mobile.jpg'

import './Preview.css'

const Preview = ():React.ReactElement => {
  return (
    <section className='preview-wrapper'>
        <picture>
            <source
            srcSet={Mobapic} 
            media="(max-width:400px)"
            />
            <img src={Deskpic} alt="wallpaper"/>
        </picture>
        
        <div className='main-content-wrapper'>
        <header>The Bright Future of Web 3.0?</header>
        <span>
        <p className='mt1'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
        But is it really fulfilling its promise?</p>

        <button className='mt2'>Read more</button>
        </span>
        </div>
        </section>
  )
}

export default Preview