import React from 'react'
import './News.css'

const News = ():React.ReactElement => {
  return (
        <section className='main-news-wrapper'>
        <h1>New</h1> 

        <header>Hydrogen VS Electric Cars</header>
        <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
        
        <header>The Downsides of AI Artistry</header>
        <p>What are the possible adverse effects of on-demand AI image generation?</p>

        <header>Is VC Funding Drying Up?</header>
        <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
        </section>
  )
}

export default News