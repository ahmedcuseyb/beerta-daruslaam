import React from 'react'
import HeaderWithVideo from './_components/Header'
import About from './_components/About'
import Adventure from './_components/Adventure'
import ActivityCarousel from './_components/ActivityCarousel'
import Save from './_components/Save'
import FilterableGallery from './_components/Gallery'
import Nav from './_components/Nav'
import ContactUs from './_components/contact'
import FAQSection from './_components/FAQ'
// import GoogleMapEmbedProps from './_components/GoogleMapEmbed'
// import GoogleMapEmbed from "@/components/GoogleMapEmbed";


import Footer from './_components/Footer'
import GoogleMapEmbed from './_components/GoogleMapEmbed'

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
     <ContactUs/>
    <section>
      <h2>Find Us</h2>
      <GoogleMapEmbed query="Beerta Xamar, Mogadishu, Somalia" zoom={16} />
    </section>
     <FAQSection/>
     <Footer/>
    </div>
  )
}

export default page
