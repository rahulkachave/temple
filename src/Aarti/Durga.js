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
const Durga = () => {
  return (
    <div>
           <header className='header'><div className='marquee'><div> श्री दुर्गे  आर‍‍ती ( Durga Aarti)</div></div></header>

<div className='aaratileft'>
<Link className="nav-link" to ={'/MHTemples'}><h4>Maharastra Temple</h4></Link>
<Link  className="nav-link" to ={'/Ganapati'}><h4>Ganapati Aarti</h4></Link>
<Link className="nav-link"  to ={'/Details'}><h4>Details Aarti</h4></Link>
<Link className="nav-link" to ={'/Durga'}><h4>DurgaAArti Aarti</h4></Link>
<Link className="nav-link" to ={'/Mahalaxmi'}><h4>Mahalaxmi Aarti</h4></Link>
<Link className="nav-link" to ={'/Saibaba'}><h4>Saibaba Aarti</h4></Link>

</div>

      <article className='aarti'>
      <h4 h2 className='h2headingtag'>* दुर्गे आरती ( Durga Aarti)*</h4>

  <div>
<p> दुर्गे दुर्घट भारी तुजविण संसारी। </p>
<p> अनाथ नाथे अंबे करुणा विस्तारी।</p>
<p> वारी वारी जन्म मरणांते वारी।   </p>
<p>हारी पडलो आता संकट निवारी॥१॥ </p>
<p>-----------**--------</p>
<p> जय देवी जय देवी महिषा सुरमथिनी।</p>
<p> सुरवर ईश्र्वर वरदे तारक संजीवनी॥धृ॥ </p>
<p>-----------**---------</p>
<p> तुजवीण भुवनी पाहता तुज ऐसे नाही।  </p>
<p>  चारी श्रमले परंतु न बोलवे काही।  </p>
<p>    साही श्रमले परंतु न बोलवे काही।  </p>
<p>साही विवाद करिता पडले प्रवाही।   </p>
<p>     ते तू भक्तालागी पावसी लवलाही॥२॥ </p>
<p>-----------**---------</p>
<p> प्रसन्न वदने प्रसन्न होती निजदासा।       </p>
<p> क्लेशांपासूनी सोडवी तोडी भवपाशा।       </p>
<p>अंबे तुजवाचून कोण पुरवील आशा।        </p>
<p> नरहरी तल्लीन झाला पदपंकजलेशा॥३॥       </p>
</div>
</article>
<div>
    <div className='photos'>
    <div className="photo-item"> < img src={D1} alt="Durga"/></div>
    <div className="photo-item"> < img src={D2} alt="Durga 2"/></div>
    <div className="photo-item"> < img src={D3} alt="Durga 3"/></div>
  <div className="photo-item">  < img src={D4} alt="Durga 4"/></div>
 <div className="photo-item">   < img src={D5} alt="Durga 5"/></div>
 <div className="photo-item">   < img src={D6} alt="Durga 6"/></div>
 <div className="photo-item">   < img src={D7} alt="Durga 7"/></div>
 <div className="photo-item">   < img src={D8} alt="Durga 8"/></div>
 <div className="photo-item">   < img src={D9} alt="Durga 9"/></div>
 <div className="photo-item">   < img src={D10} alt="Durga 10"/></div>
    </div></div>
</div>


  
  )
}

export default Durga