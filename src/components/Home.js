import React from 'react'

import homes from "../home.json"
import ImgSlider from './ImgSlider';
const Home = () => {
  console.log(homes);
  return (
    <div>
     <header className='header' >
          <div className='marquee'>
            <div>Download the photos</div></div> </header>
<ImgSlider/>
<div>



</div>
      <div >
  
        </div>
    </div>
    
  )
}

export default Home