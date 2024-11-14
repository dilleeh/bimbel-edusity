import React from 'react'
import './About.css'
import about_img from '../../assets/guru-bk.jpg'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>TENTANG KAMI</h3>
        <h2>Selamat Datang di Bimbel Edusity!</h2>
        <p>Partner belajar terbaik sejak 2003! Kami adalah pilihan utama bagi mereka yang memiliki semangat mencapai prestasi akademik tertinggi.</p>
        <p>Temukan pengalaman belajar yang asyik dan menyenangkan di Bimbel Edusity dengan menjelajahi program-program kami. Raih prestasi akademik terbaik-mu dimulai dari Bimbel Edusity!</p>
        <p>Beragam program kami tawarkan jalur yang sempurna untuk mencapai tujuan Anda dan membuka potensi penuh Anda dalam membentuk masa depan pendidikan.</p>
      </div>
    </div>
  )
}

export default About
