import React from 'react'
// import { Link } from 'react-router-dom'
import homes from "../home.json"
import AstvinayakComponents from './AstvinayakComponents'


const Ashtavinayak = () => {
  return (
    <div >
       <header className='header' >
          <div className='marquee'>
            <div>Ashtavinayak temples</div></div> </header>
         {/* <div className='teamjava'>
<Link className="nav-link"  to ={'/Ganapati'}><h4>Ganapati</h4></Link>
<Link className="nav-link"  to ={'/Ashtavinayak'}><h4>Ashtavinayak</h4></Link>
<Link className="nav-link" to={'/SIddhivinayak'}><h4>SIddhivinayak</h4></Link>
<Link  className="nav-link" to={'/PaliTemple'}><h4>Paliganesh</h4></Link>
<Link  className="nav-link" to={'/Mahad'}><h4>Mahad</h4></Link>
<Link className="nav-link"  to={'/Ozar'}><h4>Ozar</h4></Link> 
<Link className="nav-link" to={'/Ranjangaon'}><h4>Rangangaon</h4></Link>
<Link className="nav-link" to={'/Lenyadri'}><h4>Lenyadri</h4></Link>
<Link className="nav-link" to ={'/Theur'}><h4>Theur</h4></Link>
<Link className="nav-link" to={'/Morgaon'}><h4>Morgaon</h4></Link>
    </div> */}
    

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


    </div>
  )
}

export default Ashtavinayak