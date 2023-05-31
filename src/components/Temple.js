import React from 'react'
import { Link } from 'react-router-dom'


const Temple = () => {
  return (
    <div > <header className='header' >
    <div className='marquee'>
      <div> Indian Temples & History</div></div> </header>
           
           <div className='astvinayaklink' >
           <Link  className="nav-link" to={'/MHTemples'}><h4>Maharashtra Temples</h4></Link>
{/* <Link to={'/Dagadusheth'}><h2>Dagadusheth</h2></Link>
<Link to={'/SIddhivinayak'}><h2>SIddhivinayak</h2></Link>
<Link to={'/PaliTemple'}><h2>Paliganesh</h2></Link>
<Link to={'/Mahad'}><h2>Mahad</h2></Link>
<Link to={'/Ozar'}><h2>Ozar</h2></Link> 
<Link to={'/Ranjangaon'}><h2>Rangangaon</h2></Link>
<Link to={'/Lenyadri'}><h2>Lenyadri</h2></Link>
<Link to ={'/Theur'}><h2>Theur</h2></Link>
<Link to={'/Morgaon'}><h2>Morgaon</h2></Link> */}


</div>
   
    <article className='mainTemplet'>
        <p>  the <b>India </b>is rich in history and home to several ancient and historically significant temples. Here are some temples in Maharashtra with a brief overview of their history:

</p>
<p><b>Balaji Temple:</b> Located in the town of Shirdi, the Shirdi Sai Baba Temple is one of the most famous and revered temples in Maharashtra. It is dedicated to the 19th-century saint, Sai Baba. The temple was built in 1922, and Sai Baba spent a significant part of his life in Shirdi, performing miracles and teaching spiritual wisdom.</p>
<p><b>Pava gadTemple, gujrat:</b> The Siddhivinayak Temple is a popular temple dedicated to Lord Ganesha in Prabhadevi, Mumbai. It was built in 1801 and is one of the richest temples in Mumbai. The temple's main idol of Lord Ganesha is believed to be self-manifested and is known for granting wishes and bringing good fortune.</p>
<p><b>vaishnavi devi Temple, kbk:</b> The Mahalakshmi Temple in Kolhapur is dedicated to Goddess Mahalakshmi, the consort of Lord Vishnu. It is one of the Shakti Peethas (sacred places associated with the goddess) in Maharashtra. The temple's history dates back to the 7th century, and it underwent significant renovations and additions over the centuries. The temple is known for its beautiful architecture and spiritual significance.</p>
<p><b> Temple, hyd:</b> The Trimbakeshwar Temple is an ancient temple dedicated to Lord Shiva and is located in the town of Trimbak near Nashik. It is one of the twelve Jyotirlingas (lingams of light) in India. The temple's history can be traced back to the 18th century, although the site has been considered sacred for much longer. The temple is known for its unique feature of having three lingams representing Brahma, Vishnu, and Shiva.</p>

</article>

    {/* <img src="https://www.sathyamonline.com/wp-content/uploads/2021/11/maharashtra-map.png" alt="Cinque Terre" width="500" height="600"></img> */}

 </div>
  )
}

export default Temple