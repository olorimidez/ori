import React from 'react'

import Lobes from './LobesData'
import Orishas from './Orishas'
import About from './About'
import Video from './Video'

const HeroSection = () => {
  return (
    <main className="w-full overflow-x-hidden">

      {/* Lobes section */}
      <section id="home" className="w-full scroll-mt-32">
        <div className="container mx-auto flex flex-col items-center px-6">
          <Lobes />
        </div>
      </section>

      {/* Orishas full width section */}
      <section 
        id="orisha" 
        className="w-full" >
        <Orishas />
      </section>
      <section id='about'>
        <About/>
      </section>
      <section id='video'>
        <Video/>
      </section>


    </main>
    
  )
}

export default HeroSection