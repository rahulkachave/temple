import React from 'react'
import { Link } from 'react-router-dom'



const Ram = () => {
  return (
    <div >
      <header className='header'><div className='marquee'><div>Jay Shree Ram</div></div></header>
<div style={{padding:"50px" ,paddingLeft:"20%", paddingRight:"20%", fontSize:'18px'}}>
     <h1> Jay shree ram</h1>
     <p > राम हा भगवान विष्णूचा अवतार आहे आणि त्याला श्री राम आणि
       श्री रामचंद्र या नावांनीही ओळखले जाते. रामायणातील वर्णनानुसार,
        अयोध्येचा सूर्यवंशी राजा, चक्रवर्ती सम्राट दशरथ याने पुत्रेष्टी यज्ञ 
        (पुत्रप्राप्ती यज्ञ) केला ज्यामुळे त्यांना पुत्रांचा जन्म झाला. 
        सूर्यप्रकाशामुळे त्यांचा जन्म अयोध्येत कौशल्या देवीच्या पोटी झाला. 
        वायूच्या आशीर्वादाने भरताचा जन्म झाला. यमराजापासून लक्ष्मणाचा 
        जन्म झाला आणि इंद्राच्या आशीर्वादाने शत्रुघ्नाचा जन्म झाला. श्री 
        रामजी हे चार भावांमध्ये सर्वात मोठे होते. पण तो त्याच्या बहिणीपेक्षा
         लहान होता. भगवान रामाची खरी बहीण शांता होती जी श्री राम 
         आणि त्यांच्या तीन भावांची मोठी बहीण होती. दरवर्षी चैत्र 
         महिन्याच्या शुक्ल पक्षाच्या नवव्या दिवशी श्री राम जयंती किंवा 
         राम नवमी या उत्सवाचे वर्णन संस्कृत महाकाव्य रामायण म्हणून 
         केले जाते.</p>
         
    <button><Link to={'/Gods'}> back main page</Link></button>
    </div>
    </div>

  )
}

export default Ram