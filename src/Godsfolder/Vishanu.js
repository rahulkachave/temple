import React from 'react'
import { Link } from 'react-router-dom'
import ganesha5  from './/../staic/Green Watercolor Blank Paper A4 Document  (1).gif'
const Vishanu = () => {
  return (
    <div>Vishanu

      <Link to={'/SignUp'}>SignUp</Link>
      <div className="photo-item">   < video src={ganesha5} alt="Ganesha 5"/></div>
    </div>
    
  )
}

export default Vishanu