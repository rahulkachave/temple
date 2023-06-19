import React from 'react'
import { NavLink } from 'react-router-dom'
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../css/Footer.css'
import images from "../css/base64.json";
const Footer = () => {
  return (
    <div  >
      <footer className='footer'>
 <div className='headerleft'><h2> about</h2>
 <p>Welcome to our  website!</p>
 <p>We invite you to explore our website to learn more about our temple's history, upcoming events, and ways to get involved. Whether you are a long-standing member of our community or a newcomer seeking spiritual nourishment, we warmly welcome you to join us in experiencing the transformative power of faith and community.

Thank you for visiting our temple website, and we look forward to having you as a part of our spiritual family.</p>
 
</div>
{/*   
   <a href="https://www.facebook.com/"> <FacebookIcon style={{ fontSize: '30px' }}/></a>
   <a href ="https://www.instagram.com/accounts/login/"><InstagramIcon style={{ fontSize: '30px',color:'orange' }}/></a>
  <a href ="https://wa.me/7030770407" target="_blank"rel="noreferrer"><WhatsAppIcon style={{ fontSize: '30px',color:'green' }}/></a>
  <NavLink  to='/contact'><CallIcon style={{ fontSize: '30px',color:'green' }}/></NavLink> */}
<section className="d-flex justify-content-between p-4 text-white social-media-section">
            <div className="me-5">
            </div>
            <ul className="list-section-footer">
              <h2>  Useful Link</h2>
              <li className="text-white me-4">
                <a href="http://localhost:3000/Home" target="_blank" rel="noreferrer">
                  Home
                </a>
              </li>
              <li className="text-white me-4" >
                <a
                  href="https://www.instagram.com/accounts/login/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={images.instagram} alt="instagram"></img>
                </a>
              </li>
              <li className="text-white me-4">
                <a
                  href="https://www.linkedin.com/in/suraj-bade-qa-tester/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={images.linkedin} alt="linkedin"></img>
                </a>
              </li>
              <li className="text-white me-4">
                <a href="https://pin.it/3395prH" target="_blank" rel="noreferrer">
                  <img src={images.pintrest} alt="pintrest"></img>
                </a>
              </li>
              <li className="text-white me-4">
                <a
                  href= "https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={images.facebook} alt="facebook"></img>
                </a>
              </li>
            </ul>
          </section>


  <div className="headerright">
                <h2 >Contact</h2>
            
                  <p><i ></i> silicon valley ,</p>
                  <p> Hyderabad, India</p>
                  <p><i ></i><a href="mailto:rahulkachave2980@gmail.com">  rahulkachave4142@gmail.com</a></p>
                  <p> + 91 7030770407</p>
                   <a href="https://wa.me/7030770407" target="_blank" rel="noreferrer">
                <img className="whatsapp-img" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="icon" />
              </a>
                </div>
               
          </footer>
 
 
    </div>
  )
}

export default Footer



