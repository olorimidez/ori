import React from 'react'

import Lobes from './LobesData'

const HeroSection = () => {

  return (
    <div className="">
        <div className=' container flex flex-col items-center'>
        <h5>Welcome Select your preffered Lobes</h5>
        
        <div>
            <Lobes/>
        </div>
      </div>
    </div>
  )
}

export default HeroSection