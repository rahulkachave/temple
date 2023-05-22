import React from 'react'
import { NavLink } from 'react-router-dom'
const Main = () => {
  return (
    <div className="main">
            
    <NavLink className="nav-link" to={'/app'}>Home</NavLink>
    <NavLink  className="nav-link"to={'/Temple'}>Temples</NavLink>
    <NavLink  className="nav-link"to={'/Gods'}>Gods & temples</NavLink>
    <NavLink  className="nav-link"to={'/details'}>Details</NavLink>
    <NavLink className="nav-link" to={'/students'}>Students</NavLink>
    
    </div>
  )
}

export default Main