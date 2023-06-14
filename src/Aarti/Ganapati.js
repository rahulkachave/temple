import React from 'react'
import { Link } from 'react-router-dom'

import ganesha2 from './/../staic/ganesha2.jpg'
import ganesha3 from './/../staic/ganesha3.jpg'
import ganesha4 from './/../staic/ganesha4.jpg'
import ganesha5 from './/../staic/ganesha5.jpg'
import ganesha6 from './/../staic/ganesha6.jpg'
import ganesha7 from './/../staic/ganesha7.jpg'
import bells from './/../staic/bells.gif'
import { useTranslation } from 'react-i18next'
const Ganapati = () => {
  const {t} = useTranslation();
  return (
    <div>
   
    <header className='header'><div className='marquee'><div> श्री गणप‍‍तीची आर‍‍ती ( Ganpati Aarti)</div></div></header>
    <div className='aaratileft'>

    <Link className="nav-link" to ={'/MHTemples'}><h4>{t('navlink.mhtemple')}</h4></Link>
<Link  className="nav-link" to ={'/Ganapati'}><h4>{t('navlink.Ganapati')}</h4></Link>
<Link className="nav-link" to ={'/Durga'}><h4>{t('navlink.Durga')}</h4></Link>
<Link className="nav-link" to ={'/Mahalaxmi'}><h4>{t('navlink.Mahalaxmi')}</h4></Link>
<Link className="nav-link" to ={'/Saibaba'}><h4>{t('navlink.Saibaba')}</h4></Link>


    </div>
    <article className='aarti'>
      <h4 h2 className='Aartiheader'>< img className='leftbell' src={bells} alt="Durga"/> श्री गणप‍‍तीची आर‍‍ती (Ganpati Aarti )< img className='rightbell' src={bells} alt="Durga"/></h4>
      <div>
      <p>सुखकर्ता दुखहर्ता वार्ता विघ्नाची |</p>
      <p>नुरवी पूर्वी प्रेम कृपा जयाची</p>
      <p>सर्वांगी सुंदर उटी शेंदुराची</p>
      <p>कंठी झळके माळ मुक्ताफळाची || १ ||</p>
      <p><b>जय देव जय देव जय मंगलमूर्ती|</b></p>
      <p><b>दर्शनमात्रे मनकामना पुरती ||</b></p>
      <p>*------------**------------*</p>
      
     <p>रत्नखचित फरा तूज गौरीकुमरा |</p>
      <p>चंदनाची उटी कुंकुमकेशरा |</p>
      <p>हिरे जडित मुकुट शोभतो बरा |</p>
      <p>रुणझुणती नुपुरे चरणी घागरिया || 2 ||</p>
      <p>*------------**------------*</p>
      <p>जय देव जय देवा जय मंगलमूर्ति</p>
      <p>दर्शनमत्रे मनकामना पूर्ति</p>
      <p>*------------**------------*</p>
      <p>लंबोदर पितांबर फनी वरवंदना |</p>
      <p>सरळ सोंड वक्रतुंड त्रिनयना |</p>
      <p>दास रामाचा वाट पाहे सदना |</p>
      <p> संकटी पावावे निर्वाणी रक्षावे सुरवंदना |</p>
      <p>जय देव जय देव जय मंगलमूर्ती |</p>
      <p>दर्शनमात्रे मनकामना पुरती || ३ ||</p>
      </div>
    </article>
    <div>
    <div className='photos'>
   
 <div className="photo-item">   < img src={ganesha5} alt="Ganesha 5"/></div>
  <div className="photo-item">  < img src={ganesha4} alt="Ganesha 4"/></div>
    <div className="photo-item"> < img src={ganesha3} alt="Ganesha 3"/></div>
 <div className="photo-item">   < img src={ganesha6} alt="Ganesha 6"/></div>
    <div className="photo-item"> < img src={ganesha2} alt="Ganesha 2"/></div>
 <div className="photo-item">   < img src={ganesha7} alt="Ganesha 7"/></div>
    </div></div>
  </div>
  )
}

export default Ganapati