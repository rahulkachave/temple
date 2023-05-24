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