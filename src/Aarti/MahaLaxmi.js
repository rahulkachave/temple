import React from 'react'
import { Link } from 'react-router-dom'
import bells from './/../staic/bells.gif'
import { useTranslation } from 'react-i18next'
const MahaLaxmi = () => {
  const {t}=useTranslation();
  return (
    <div>

<header className='header'><div className='marquee'><div> श्री महालक्ष्मीची आरती (Mahalaxmi Aarti )</div></div></header>
<div className='aaratileft'>
<Link className="nav-link" to ={'/MHTemples'}><h4>{t('navlink.mhtemple')}</h4></Link>
<Link  className="nav-link" to ={'/Ganapati'}><h4>{t('navlink.Ganapati')}</h4></Link>
<Link className="nav-link" to ={'/Durga'}><h4>{t('navlink.Durga')}</h4></Link>
<Link className="nav-link" to ={'/Mahalaxmi'}><h4>{t('navlink.Mahalaxmi')}</h4></Link>
<Link className="nav-link" to ={'/Saibaba'}><h4>{t('navlink.Saibaba')}</h4></Link>
</div>


      <article className='aarti'>
      <h4 h2 className='Aartiheader'>< img className='leftbell' src={bells} alt="Durga"/> श्री महालक्ष्मीची आरती (Mahalaxmi Aarti )< img className='rightbell' src={bells} alt="Durga"/></h4>

<p>  </p>
<p> </p>
<p>   </p>
<p></p>
<p>-----------**--------</p>
<p> </p>
<p>  </p>
<p>-----------**---------</p>
<p>   </p>
<p>   </p>
<p>   </p>
<p>  </p>
<p>   </p>
<p>-----------**---------</p>
<p>   </p>
<p>    </p>
<p>    </p>
<p>   </p>
</article>
<img src="https://i1.wp.com/beautifulplacestovisit.com/wp-content/uploads/2011/05/Tour_eiffel_paris-eiffel_tower.jpg" alt="Cinque Terre" width="1000" height="300"></img>




    </div>
  )
}

export default MahaLaxmi