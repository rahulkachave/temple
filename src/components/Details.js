
import { Link } from 'react-router-dom'

import { useTranslation } from 'react-i18next';

import Searchbtn from './Searchbtn';




const Details = () => {
  const { t } = useTranslation();

  return (
    <div>
      <header className='header'><div className='marquee'><div> Maharashtriya- Aarati's</div></div></header>
     
      
      <div className='astvinayaklink'>
      <Searchbtn/>
      {/* <Link className="nav-link"  to ={'/Details'}><h4>Aarti Templet</h4></Link> */}
    <Link className="nav-link" to ={'/MHTemples'}><h4>{t('navlink.mhtemple')}</h4></Link>
      <Link  className="nav-link" to ={'/Ganapati'}><h4>{t('navlink.Ganapati')}</h4></Link>
      <Link className="nav-link"  to ={'/Details'}><h4>{t('navlink.Details')}</h4></Link>
      <Link className="nav-link" to ={'/Durga'}><h4>{t('navlink.Durga')}</h4></Link>
      <Link className="nav-link" to ={'/Mahalaxmi'}><h4>{t('navlink.Mahalaxmi')}</h4></Link>
      <Link className="nav-link" to ={'/Saibaba'}><h4>{t('navlink.Saibaba')}</h4></Link> 

      </div>

  
      <article className='Temple'>
        <h4  className='h2headingtag'>{t('domain.myAarthi')}</h4>
        <p>{t('domain.mya')}</p>
        <p>--------------------------------------------</p>
        <p> Aarti plays a vital role in Hinduism as a means of expressing devotion, seeking divine blessings, and fostering a deep spiritual connection with the deities. It is a beautiful and sacred practice that holds great significance for Hindu devotees.</p>
        <p>Aarati is derived from the Sanskrit word  (ārātrika) which means something that removes rātrī, darkness (or light waved in darkness before an icon). A Marathi language reference says it is also known as Mahaneeranjana </p>
        <p><b>Homa: </b>Aarti is said to have descended from the Vedic concept of fire rituals, or homa. In the traditional aarti ceremony, the flower represents the earth (solidity), the water and accompanying handkerchief correspond with the water element (liquidity), the ghee or oil lamp represents the fire component (heat), the peacock fan conveys the precious quality of air (movement), and the yak-tail fan represents the subtle form of ether (space). The incense represents a purified state of 
            mind, and one's "intelligence" is offered through the adherence to rules of timing and order of offerings. Thus, one's entire existence and all facets of material creation are symbolically offered to the Lord via the aarti ceremony. The word may also refer to the traditional Hindu devotional song that is sung during the ritual.</p>
        <p><b>The aarti plate is generally made of metal</b>, usually silver, bronze or copper. On it must repose a lamp made of kneaded flour, mud or metal, filled with oil or ghee. One or more cotton wicks (always an odd number) are put into the oil and then lighted, or camphor is burnt instead. The 
                 plate may also contain flowers, incense and akshata (rice). In some temples, a plate is not used and the priest holds the ghee lamp in his hand when offering it to the Deities. The purpose of performing aarti is the waving of lighted wicks before the deities in a spirit of humility and gratitude, wherein faithful followers become immersed in god's divine form. It symbolises the five elements: </p>
              <p>  1. Space (Akash) </p>
              <p>    2. Wind (Vayu) </p>
              <p>   3. Fire (Agni) </p>
              <p>   4. Water (Jal) </p>
              <p>   5. Earth (Prithvi) </p>
              <p>Each part is revealed individually and also the entire form of the Lord. As the light is waved we either do mental or loud chanting of prayers or simply behold the beautiful form of the Lord, illumined by the lamp. At the end of the aarthi we place our hands over the flame and then gently touch our eyes and the top of the head.  </p>
        <p> The philosophical meaning of aarthi extends further. The sun, moon, stars, lightning and fire are the natural sources of light. The Lord is the source of this wonderous phenomenon of the 
             universe. It is due to Him alone that all else exist and shine. As we light up the Lord with the flame of the aarthi, we turn our attention to the very source of all light, which symbolizes knowledge and life.  </p> 
             {/* <Link to ={'/Aarati2'}>Read More...</Link> */}
             <p><h4 className='h2headingtag' >Why is Arti Performed Twice a Day?</h4>Arti is meant to be performed at sunrise and sunset. At sunrise the raja-tama predominant atmosphere present throughout the night is destroyed and the absolute fire element frequencies of 
              Deities arrive in the universe. Hence, Arti is to be offered at sunrise to welcome them. The ‘tarak Chaitanya’ (saviour form of Chaitanya) transmitted during the arrival of the frequencies of 
              Deities at sunrise is to be welcomed by the worshipper through the medium of the Arti, whereas at sunset, the Arti is performed to destroy the raja-tama frequencies and to invoke the Deities’ ‘marak Chaitanya’ (destroyer form of Chaitanya). That is why Arti should be performed twice –at sunrise and at sunset.</p>
         <h4 className='h2headingtag'>Why should the Aarthi platter be Waved in a Clockwise Direction in Front of the Deity?</h4> 
        <p>As the earth moves in the clockwise direction, the frequencies in the environment do not offer any resistance to the movement of the lit lamp. </p>
        <p>The most commonly sung aarti is that which is dedicated to all deities is Om Jai Jagdish Hare, known as "The Universal Aarti" and is another common aarti song. Its variation are used for 
           other deities as well such as Om Jai Shiv omkara, Om Jai Lakshmi mata, Om Jai Ambe gauri, Om Jai Adya Shakti, Om Jai Saraswati Mata, Om Jai Gange Mata, Om Jai Tulsi Mata and Om Jai Surya Bhagvaan. In Ganesha worship, the aarti Sukhakarta Dukhaharta is popular. </p>
         
      </article>

    </div>
  )
}

export default Details