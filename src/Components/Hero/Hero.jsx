import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import hero from '../../assets/hero.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>Bimbingan Belajar Terbaik di Indonesia</h1>
        <p>Kurikulum mutakhir kami dirancang untuk memberdayakan siswa dengan pengetahuan, keterampilan, dan pengalaman yang dibutuhkan untuk unggul dalam bidang pendidikan yang dinamis</p>
        <button className='btn'>Lihat Detail<img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
