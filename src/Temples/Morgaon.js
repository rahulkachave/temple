import React from 'react'
import { Link } from 'react-router-dom'
import ganesha2 from './/../staic/Moreshawarganapati.webp'
const Morgaon = () => {
  return (
    
         <div>
     <header className='header' >
          <div className='marquee'>
            <div>Ashtavinayak temples :-Mayureshwar-Morgaon</div></div> </header>
             <div className='astvinayaklink'>
<Link className="nav-link"  to ={'/Details'}><h4>Arati Book</h4></Link>
<Link className="nav-link" to={'/Morgaon'}><h4>First Ashtavinayak :- Moreshawar</h4></Link>
<Link className="nav-link" to={'/SIddhivinayak'}><h4> Second Ashtavinayak:- Siddhivinayak</h4></Link>
<Link  className="nav-link" to={'/PaliTemple'}><h4>Third Ashtavinayak :-Pali</h4></Link>
<Link  className="nav-link" to={'/Mahad'}><h4>Four Ashtavinayak:-Mahad</h4></Link>
<Link className="nav-link"  to={'/Ozar'}><h4>Five Ashtavinayak :- Ozar</h4></Link> 
<Link className="nav-link" to={'/Ranjangaon'}><h4>Six Ashtavinayak :- Rangangaon</h4></Link>
<Link className="nav-link" to={'/Lenyadri'}><h4>Seven Ashtavinayak :-Lenyadri</h4></Link>
<Link className="nav-link" to ={'/Theur'}><h4>Eight Ashtavinayak :- Theur</h4></Link>
<Link className="nav-link"  to ={'/Ashtavinayak'}><h4> Ashtavinayak page </h4></Link>
    </div>
    <div className='ifrm'>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3788.513373856242!2d74.31488657598179!3d18.27811637653382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc304772a0ecde5%3A0x1fadcf2fad6bf00d!2sShri%20Mayureshwar%20Ganapati%20Temple%2C%20Morgaon!5e0!3m2!1sen!2sin!4v1685010497892!5m2!1sen!2sin" 
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
    <div className='Templediv'>
    <div > < img src={ganesha2} alt="Ganesha 2"/></div>
      
        <h2 className='h2headingtag'>Mayureshwar Temple </h2>
        <p>The Sri Mayureshwar Temple of Morgaon is one of the eight major temples of Ashtavinayaka. It is said that the name Morgaon is also the story of the peacock</p>
        <p>Morgaon is an Adyapeeth - one of the oldest temples of Ganesha and Ganesha is considered to be the best deity here. This temple attracts thousands of devotees who visit Ashtavinayaka.</p>
      <p>Morgaon is situated in the south-east direction of Pune. It is only two hours away from Pune via Saswad-Jejuri. The Ashtavinayak Yatra begins with the darshan of Sri Mayureshwara at Morgaon.</p>
       <p> The greatness of Morgaon is described in Chapter 22 of the Mudgal Purana. According to Ganesha Purana, Morgaon is one of the 3 main and most important places of Lord Ganesha.</p>
       
        <p>Ashtavinayak temples  is the most important shrine among the Ashtavinayaka temples and has four entrances. At each entrance there is a picture of an avatar of Lord Ganesha from each area.This temple faces north and has a fifty feet high rampart. </p>
       <p>    There are two Deepmalas in the temple premises.As soon as one enters the temple, one sees a six feet tall stone rat and a large seated Nandi. Nandi faces Ganpati and this is the only shrine that has Nandi in front of Ganpati. Rats and Nandi are like guardians of the temple. The trunk of Swayambhu Ganesha in this temple is turned to the left and the navel and eyes of Ganesha are studded with diamonds. The idol has a protective umbrella of a snake. The temple also has idols of Riddhi (Intellect) and Siddhi (Ability).    </p>

       </div>     
    </article>  

  
    </div>    
  

  
  )
}

export default Morgaon