import React from 'react'
import { Link } from 'react-router-dom'

const Aarati2 = () => {
  return (
    <div>
        <div >
           <header className='header'>WHy Aarti is important in hindu religion </header>
           <div className='aaratileft'>
      <Link  className="nav-link" to ={'/Details'}><h2>Go to back</h2></Link>
 
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Dagdusheth_temple.JPG/440px-Dagdusheth_temple.JPG   " alt="Cinque Terre" width="1000" height="300"></img>
        </div>
           </div>
    </div>
  )
}

export default Aarati2