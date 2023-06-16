import React from 'react'
import GodsJ from '../GodsJ.json'
import GodsComp from './GodsComp'
import '../css/Gods.css'
const Gods = () => {
  return (
    <div>
       {
     GodsJ.map((Element ,Index)=>{
      return(
<GodsComp 

key ={Index}

      img={Element.img}
      name={Element.name}
      city={Element.city}
      url={Element.url}
/>
      )
      
      
      }) 
    }
    </div>

  )
}

export default Gods