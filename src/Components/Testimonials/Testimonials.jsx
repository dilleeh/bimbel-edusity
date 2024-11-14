import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = ()=>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward = ()=>{
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Ranty Maria</h3>
                            <span>Edusity, SMA</span>
                        </div>
                    </div>
                    <p>Memilih Edusity sebagai teman bimbingan belajar merupakan salah satu keputusan terbaik yang pernah saya buat. Karena Edusity saya bisa melanjutkan pendidikan ke PTN Impian saya!</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>William Jason</h3>
                            <span>Edusity, SMA</span>
                        </div>
                    </div>
                    <p>Metode belajarnya seru, gak ngebosenin dan guru-gurunya berasal dari sekolah-sekolah top tier di Ibukota.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Putri Gania</h3>
                            <span>Edusity, SMP</span>
                        </div>
                    </div>
                    <p>Memilih Edusity sebagai teman bimbingan belajar merupakan salah satu keputusan terbaik yang pernah saya buat. Guru-gurunya humble dan sabar bangett</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Alfino Reza</h3>
                            <span>Edusity, Wali Murid SD</span>
                        </div>
                    </div>
                    <p>EDUCITY TOP MARKOTOB!</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
