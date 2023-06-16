import React from 'react'


const GodsComp = (props) => {
    
  return (
    <div >
      
           
<div >
    <div className='ast' >
    <div className='data'>
<div className='dick'><img src ={props.img} alt=""/></div>
<div><p><b>name:</b>{props.name}</p></div>
<div><p><b>city:</b>{props.city}</p></div>
<div><a href ={props.url}>go to Temple info  </a></div>
    </div></div>
    
    </div>
    </div>
  )
}

export default GodsComp