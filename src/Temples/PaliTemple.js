import React from 'react'
// import ganesha from './/../staic/OIP.jpg'
import Ashtavinayak from '../components/Ashtavinayak'
const PaliTemple = () => {
  return (
    <div>
    <div>   
    <header className='header' >
          <div className='marquee'>
            <div>Ashtavinayak temples :- Ballaleshawar- Pali</div></div> </header>
    <Ashtavinayak/>
   
  
    <article className='artical2'> 
        <h2 className='h2headingtag'>Siddhivinayak Temple Mumbai</h2>
        <p> this is a siddivinayak temple     </p>
    </article>

    <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Dagdusheth_temple.JPG/440px-Dagdusheth_temple.JPG   " alt="Cinque Terre" width="1000" height="300"></img>
    <img className='img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Dagdusheth_temple.JPG/440px-Dagdusheth_temple.JPG   " alt="Cinque Terre" width="1000" height="300"></img>
 {/* < img src={ganesha}/> */}
        </div>
    </div>    
    </div>
  )
}

export default PaliTemple