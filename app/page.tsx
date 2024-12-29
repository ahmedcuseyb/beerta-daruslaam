import React from 'react'
import HeaderWithVideo from './_components/Header'
import About from './_components/About'
import Adventure from './_components/Adventure'
import ActivityCarousel from './_components/ActivityCarousel'
import Save from './_components/Save'

const page = () => {
  return (
    <div>
     <HeaderWithVideo/>
     <About/>
     <Adventure/>
     <ActivityCarousel/>
     <Save/>
     
    </div>
  )
}

export default page
