import React from 'react'
import { useTranslation } from 'react-i18next';
import { I18nextProvider } from 'react-i18next';
import i18n from '../Localtranslation/I18n'
const MyComponent = () => {
    const { t , I18n} = useTranslation();

    const changeLanguage = (language) => {
      i18n.changeLanguage(language)
        .then(() => {
          // Language changed successfully
        })
        .catch((error) => {
          console.error('Error in changing language:', error);
        });
    };
    
  return (
  <div>
    <I18nextProvider i18n={I18n}>
    {/* Your app components */}

    <select className='lang'>
    <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('fr')}>Français</button>
      <button onClick={() => changeLanguage('hi')}>hindi</button>
    </select>
    </I18nextProvider>
    {/* <h4  className='h2headingtag'>{t('domain.myAarthi')}</h4>
        <h2>{t('domain.mya')}</h2> */}
    </div>
  )
}

export default MyComponent