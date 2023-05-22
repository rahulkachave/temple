import React from 'react'
import { Link } from 'react-router-dom'
import D1 from './/../staic/Du1.jpg'
import D2 from './/../staic/Du2.jpg'
import D3 from './/../staic/Du3.jpg'
import D4 from './/../staic/Du4.jpg'
import D5 from './/../staic/Du5.jpg'
import D6 from './/../staic/Du6.jpg'
import D7  from './/../staic/Du7.webp'
import D8 from './/../staic/Du8.png'
import D9  from './/../staic/Du9.jpg'
import D10  from './/../staic/Du10.webp'
const MHTemples = () => {
  return (
    <div>
      
         <header className='header' >
          <div className='marquee'>
            <div>MAharastara temples</div></div> </header>
          
           <div className='teamjava'>
         

<Link className="nav-link"  to ={'/Ashtavinayak'}><h4>Ashtavinayak Ganapati </h4></Link>
<Link className="nav-link"  to ={'/Dagadusheth'}><h4>Dagadusheth Ganapati</h4></Link>
<Link className="nav-link"  to ={'/Details'}><h4>Aarti Book</h4></Link>



</div>
<div>
    <article className='mainTemplet'>
      <p></p>
        <p>Maharashtra, a state in western India, is rich in history and home to several ancient and historically significant temples. Here are some temples in Maharashtra with a brief overview of their history:

</p>
<p><b>Shirdi Sai Baba Temple:</b> Located in the town of Shirdi, the Shirdi Sai Baba Temple is one of the most famous and revered temples in Maharashtra. It is dedicated to the 19th-century saint, Sai Baba. The temple was built in 1922, and Sai Baba spent a significant part of his life in Shirdi, performing miracles and teaching spiritual wisdom.</p>
<p><b>Siddhivinayak Temple, Mumbai:</b> The Siddhivinayak Temple is a popular temple dedicated to Lord Ganesha in Prabhadevi, Mumbai. It was built in 1801 and is one of the richest temples in Mumbai. The temple's main idol of Lord Ganesha is believed to be self-manifested and is known for granting wishes and bringing good fortune.</p>
<p><b>Mahalakshmi Temple, Kolhapur:</b> The Mahalakshmi Temple in Kolhapur is dedicated to Goddess Mahalakshmi, the consort of Lord Vishnu. It is one of the Shakti Peethas (sacred places associated with the goddess) in Maharashtra. The temple's history dates back to the 7th century, and it underwent significant renovations and additions over the centuries. The temple is known for its beautiful architecture and spiritual significance.</p>
<p><b>Trimbakeshwar Temple, Nashik:</b> The Trimbakeshwar Temple is an ancient temple dedicated to Lord Shiva and is located in the town of Trimbak near Nashik. It is one of the twelve Jyotirlingas (lingams of light) in India. The temple's history can be traced back to the 18th century, although the site has been considered sacred for much longer. The temple is known for its unique feature of having three lingams representing Brahma, Vishnu, and Shiva.</p>

</article>
</div>
{/* <div className='imgMH'>
    <img className='imgMH' src="https://www.sathyamonline.com/wp-content/uploads/2021/11/maharashtra-map.png" alt="Cinque Terre" width="1000" height="300"></img>
    </div> */}
    <div>
     
      <div className='p'>
      
      <div className='d' >  
    <div className="p-item"> < img src={D1} alt="Durga"/></div>
    <div className="p-item" style={{margin:'20px'}}> < img src={D2} alt="Durga 2"/></div>
    <div className="p-item" style={{margin:'20px'}}> < img src={D3} alt="Durga 3"/></div>
  <div className="p-item" style={{margin:'20px'}}>  < img src={D4} alt="Durga 4"/></div>
 <div className="p-item" style={{margin:'20px'}}>   < img src={D5} alt="Durga 5"/></div>
 <div className="p-item" style={{margin:'20px'}}>   < img src={D6} alt="Durga 6"/></div>
 <div className="p-item" style={{margin:'20px'}}>   < img src={D7} alt="Durga 7"/></div>
 <div className="p-item" style={{margin:'20px'}}>   < img src={D8} alt="Durga 8"/></div>
 <div className="p-item" style={{margin:'20px'}}>   < img src={D9} alt="Durga 9"/></div>
 <div className="p-item" style={{margin:'20px'}}>   < img src={D10} alt="Durga 10"/></div>
    </div></div></div>
</div>

  )
}

export default MHTemples