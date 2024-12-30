import React from 'react'
import HeaderWithVideo from './_components/Header'
import About from './_components/About'
import Adventure from './_components/Adventure'
import ActivityCarousel from './_components/ActivityCarousel'
import Save from './_components/Save'
import FilterableGallery from './_components/Gallery'
import Nav from './_components/Nav'

const page = () => {
  return (
    <div>
     <Nav/>
     <HeaderWithVideo/>
     <About/>
     <Adventure/>
     <ActivityCarousel/>
     <Save/>
     <FilterableGallery/>
    </div>
  )
}

export default page
