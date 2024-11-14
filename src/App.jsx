import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'

const App = () => {

const[playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='PROGRAM KAMI' title='Pilihan Kategori Program Belajar'/>
        <Programs/>
        <About setPlayState={setPlayState}/>
        <Title subTitle='Kelas' title='Kelas Kami'/>
        <Campus/>
        <Title subTitle='TESTIMONI' title='Apa kata Mereka?'/>        
        <Testimonials/>
        <Title subTitle='Kontak Kami' title='Kenal Lebih Dekat'/> 
        <Contact/>
        <Footer/>
      </div>
      <VideoPlayer PlayState={playState} setPlayState={setPlayState} />
    </div>
  )
}

export default App
