import React from 'react'
import { NavLink } from 'react-router-dom'
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {
  return (
    <div >
      <footer className='footer'>
 
 <a href="mailto:rahulkachave2980@gmail.com"> <ContactMailIcon style={{ fontSize: '30px' }} /></a> 
   <a href="https://www.facebook.com/"> <FacebookIcon style={{ fontSize: '30px' }}/></a>
   <a href ="https://www.instagram.com/accounts/login/"><InstagramIcon style={{ fontSize: '30px',color:'orange' }}/></a>
  <a href ="https://web.whatsapp.com/"><WhatsAppIcon style={{ fontSize: '30px',color:'green' }}/></a>
  <NavLink  to='/contact'><CallIcon style={{ fontSize: '30px',color:'green' }}/></NavLink>
  <NavLink to="https://www.facebook.com/login">Sign In with Facebook</NavLink>
  </footer>
    </div>
  )
}

export default Footer