import React from 'react'
import { Link } from 'react-router-dom';
const HomeComponents = () => {
    
  return (
    <div className='Homecomp' >
    
       <Link to={'/about'}> <button >GO TO java main</button></Link>
         
    </div>
  )
}

export default HomeComponents