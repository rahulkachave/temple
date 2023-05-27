
import React from 'react'
import { NavLink } from 'react-router-dom'
const Main = () => {

  const navlinkstyle = ({isActive})=>{
    return{
      textDecoration :isActive ?"none":"none",
      color :isActive ?"red":"blue",
      
    }
  }
  return (
    <div className="main">
            
    <NavLink style={navlinkstyle}  to={'Home'}>Home</NavLink>
    <NavLink style={navlinkstyle} to={'/Temple'}>Temples</NavLink>
    <NavLink style={navlinkstyle} to={'/Gods'}>Gods & temples</NavLink>
    <NavLink style={navlinkstyle} to={'/details'}>Details</NavLink>
    <NavLink style={navlinkstyle} to={'/students'}>Students</NavLink>
    
    </div>
  )
}

export default Main