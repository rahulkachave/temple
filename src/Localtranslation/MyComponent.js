import React from 'react'

import { I18nextProvider } from 'react-i18next';
import i18n from '../Localtranslation/I18n'
import { useState } from 'react';
const MyComponent = () => {
    

    const changeLanguage = (language) => {
      
      i18n.changeLanguage(language)
       
       
    };
 
  const [selectedOption, setSelectedOption] = useState('');

  const onOptionChangeHandler = (event) => {
    const newLanguage = event.target.value;
    setSelectedOption(newLanguage);
    changeLanguage(newLanguage);
  };

  return (
  <div>
  <I18nextProvider i18n={i18n}>
       
       
      <div className='lang'> <select className='lang' onChange={onOptionChangeHandler} value={selectedOption}>
      <option value='en'>English</option>
        <option value='hi'>Hindi</option>
        <option value='Telugu'>Telugu</option>
      </select></div>
  
      </I18nextProvider>
  
    </div>
  )
}

export default MyComponent