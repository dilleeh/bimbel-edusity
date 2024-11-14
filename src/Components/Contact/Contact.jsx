import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "89fe6eba-0563-4334-a8ae-e063169d9ed8");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Kirim Kami Pesan <img src={msg_icon} alt="" /></h3>
        <p>Jangan ragu untuk menghubungi kami melalui kontak atau temukan informasi kontak kami di bawah ini. umpan balik, pertanyaan, dan saran Anda sangat penting bagi kami karena kami berusaha keras untuk memberikan layanan yang luar biasa kepada komunitas universitas kami.</p>
        <ul>
            <li><img src={mail_icon} alt="" />eidillashalsa@gmail.com</li>
            <li><img src={phone_icon} alt="" />+62 822-8962-3650</li>
            <li><img src={location_icon} alt="" />Jl. Muararajeun Baru no. 20, Bandung, Jawa Barat, Indonesia</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Nama Kamu</label>
            <input type="text" name='name' placeholder='Ketik Namamu'required/>
            <label>Nomor Telepon</label>
            <input type="tel" name='phone' placeholder='Ketik Nomor teleponmu' required/>
            <label>Tulis Pesanmu Disini</label>
            <textarea name="message" rows="6" placeholder='Ketik pesanmu disini' required></textarea>
            <button type='submit' className='btn dark-btn'>Kirim <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>

      </div>
    </div>
  )
}

export default Contact
