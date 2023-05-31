import React from 'react'

import MHTemples from '../components/MHTemples'
import { Link } from 'react-router-dom'
import ganesha2 from './/../staic/Moreshawarganapati.webp'



const Dagadusheth = () => {
  
  return (
    <div>    
     <header className='header'><div className='marquee'><div> Maharashtra temple :- Dagadusheth Temple</div></div></header>

{/* <MHTemples/> */}
<div className='astvinayaklink'>
<Link className="nav-link"  to ={'/Ashtavinayak'}><h4>Ashtavinayak Ganapati </h4></Link>
<Link className="nav-link"  to ={'/Dagadusheth'}><h4>Dagadusheth Ganapati</h4></Link>
<Link className="nav-link"  to ={'/Details'}><h4>Aarti Book</h4></Link>
</div>
<div>
<div className='ifrm'>
     
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5350.347137720344!2d73.85327703270343!3d18.51684434442155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c06fa5b442ff%3A0x9df365f5b648bce1!2sShreemant%20Dagdusheth%20Halwai%20Ganpati%20Mandir!5e0!3m2!1sen!2sin!4v1685009666307!5m2!1sen!2sin"
       width="250"
       height="400"
       style={{ border: '0' }}
       allowfullscreen=""
       loading="lazy"
       referrerpolicy="no-referrer-when-downgrade">
         </iframe>
         <p>Location </p>
<p>near to mahad templ:- 20km</p>

      </div>
   

    <article className='Temple'>

    <div className='Templeimg' > < img src={ganesha2} alt="Ganesha 2"/></div>
        <h2 > Dagadusheth halwai ganapati pune</h2>
        <p>Srimanta Dagdusheth Halwai is considered to be the holy place of Lord Ganesha for devotees all over Pune.</p>
        <p>In the list of maharatras all these names, the name of Ganpati, Dagdusheth Halwai in Pune is taken first.</p>
        <p>People who go to Pune for Ganeshotsav first of all go to have darshan of Dagdusheth Halwai Ganesha. Today people from far and wide come here for darshan during Ganeshotsav.</p>
        <p>Dagdusheth Ganesha has the good fortune of attaining divinity in the idol which is installed in the public Ganeshotsav. This board was established in the year 1893. This idol was installed in 1893 by Shrimanta Dagdu Sheth Halwai. In 1968, the idol of 'Dagdusheth Ganapati' was prepared by the board.</p>
        The rich Dagdusheth Halwai Ganpati Trust, which is trying to build a great temple of humanity not only to celebrate Ganeshotsav, but also to build a great temple of humanity with the money donated by the society out of respect, is the Ganesha Mandal and Dagdusheth, the place of worship of lakhs of devotees, has today gained its reputation all over the world.
        <p>The Dagadusheth Halwai Ganapati temple is a Hindu Temple located in Pune and is dedicated to the Hindu god Ganesh. </p>
        <h2> Dagadusheth halwai ganapati pune</h2>
<p>This is the story of the time when India was ruled by the British Empire, that is, in 1891.
Dagdusheth Halwai was a famous sweets merchant in Pune. People also gave him the title of rich because he was given a lot of respect and respect in the society.
As Dagdusheth Halwai was a respected personality in the society, the British government also honored him with the honor of Nagarsheth.It is said that rich man Dagdusheth Halwai was truly blessed by God because there was no lack of name, money and fame in his life.</p>
   <p></p>
   
    </article>
        </div>
    </div>
  )
}

export default Dagadusheth