import React from 'react'
import News from './News'
import Preview from './Preview'

import './Main.css'

const Main = ():React.ReactElement => {
  return (
    <main className='main-wrapper mt2'>
        <Preview />
        <News />
    </main>
  )
}

export default Main