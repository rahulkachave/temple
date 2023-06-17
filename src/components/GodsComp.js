import React from 'react'


const GodsComp = (props) => {
    
  return (
    <div className='dff' >
      
           
    <div className='gfirst' >
    <div className='data'>
<div className='dick'><img src ={props.img} alt=""/></div>
<div className='gname'><p><b>{props.name}</b></p></div>

  <button className='gbtn'><a href ={props.url}>read more  </a></button></div>

    </div>
    
      </div>
  )
}

export default GodsComp