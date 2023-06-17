import React from 'react'
import GodsJ from '../GodsJ.json'
import GodsComp from './GodsComp'
import '../css/Gods.css'
const Gods = () => {
  return (
    <div className='Gmain'>
       {
     GodsJ.map((Element ,Index)=>{
      return(
        <div className='Gmain'>
<GodsComp 

key ={Index}

      img={Element.img}
      name={Element.name}
      url={Element.url}
/></div>
      )
      
      
      }) 
    }
    </div>

  )
}

export default Gods