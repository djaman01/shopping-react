import './footer.css'

import { FaFacebook, FaInstagramSquare, FaPhoneAlt, FaHome } from "react-icons/fa";
import { IoIosMailOpen } from "react-icons/io";



export default function Footer() {
  return (

    <div className='footer-container'>
      <div className='top-footer'>

        <div className='abonnement'>
          <h4>Abonnez-vous à nos réseaux sociaux: </h4>

          <div className='footer-social-icons'>
          <FaFacebook size={40}/>
          <FaInstagramSquare size={40} />
          </div>
        
        </div>


        <div className='contact-footer'>
          <h4 className="contact-title" style={{ color: "black" }}>Contact: </h4>
          <div className='info-footer'>
            <FaHome style={{marginRight: 10}} />
            <span>Casablanca, Maroc</span>
          </div>
          <div style={{ marginTop: 20 }}>
            <FaPhoneAlt style={{marginRight: 10}}  />
            <span className='info-footer'> 06-12-34-56-78</span>
          </div>
          <div style={{ marginTop: 20 }}>
           <IoIosMailOpen style={{marginRight: 10}}  />
            <span className='info-footer'> shopping@gmail.com</span>
          </div>
        </div>

      </div>

      <div className='copyright'>
        <span>Copyright © - Shopping Cart </span>
      </div>

    </div>


  )
}
