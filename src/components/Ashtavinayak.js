import React from 'react'
import { Link } from 'react-router-dom'
import homes from "../home.json"
import AstvinayakComponents from './AstvinayakComponents'


const Ashtavinayak = () => {
  return (
    <div >
       <header className='header' >
          <div className='marquee'>
            <div>Ashtavinayak temples</div></div> </header>
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
    <div>temple</div>
{/* 
    <div className='don'>
{
  homes.map((Element,index)=>{
    return(
      <AstvinayakComponents
      key={index}
      img={Element.img}
      name={Element.name}
      city={Element.city}
      url={Element.url}
         />
    )
  })
}
</div>
 */}

    </div>
  )
}

export default Ashtavinayak