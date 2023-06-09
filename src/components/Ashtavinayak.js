import React from 'react'
import { Link } from 'react-router-dom'
import homes from "../home.json"
import AstvinayakComponents from './AstvinayakComponents'
import { useTranslation } from 'react-i18next'


const Ashtavinayak = () => {
  const {t}=useTranslation();
  return (
    <div >
       <header className='header' >
          <div className='marquee'>
            <div>Ashtavinayak temples</div></div> </header>
            <div className='astvinayaklink'>
<Link className="nav-link"  to ={'/Details'}><h4>{t('navlink.Details')}</h4></Link>
<Link className="nav-link" to={'/Morgaon'}><h4>{t('navlink.FirstAshtavinayak')}</h4></Link>
<Link className="nav-link" to={'/SIddhivinayak'}><h4> {t('navlink.SecondAshtavinayak')}</h4></Link>
<Link  className="nav-link" to={'/PaliTemple'}><h4>{t('navlink.ThirdAshtavinayak')}</h4></Link>
<Link  className="nav-link" to={'/Mahad'}><h4>{t('navlink.FourAshtavinayak')}</h4></Link>
<Link className="nav-link"  to={'/Ozar'}><h4>{t('navlink.FiveAshtavinayak')}</h4></Link> 
<Link className="nav-link" to={'/Ranjangaon'}><h4>{t('navlink.SixAshtavinayak')}</h4></Link>
<Link className="nav-link" to={'/Lenyadri'}><h4>{t('navlink.SevenAshtavinayak')}</h4></Link>
<Link className="nav-link" to ={'/Theur'}><h4>{t('navlink.EightAshtavinayak')}</h4></Link>
<Link className="nav-link"  to ={'/Ashtavinayak'}><h4> {t('navlink.Ashtavinayakpage')} </h4></Link>
    </div>
    <div>temple</div>
{/* 
    <div className='don'>
{
  homes.map((Element,index)=>{
    return(
      <AstvinayakComponents
      key={index}
      img={Element.img}
      name={Element.name}
      city={Element.city}
      url={Element.url}
         />
    )
  })
}
</div>
 */}

    </div>
  )
}

export default Ashtavinayak