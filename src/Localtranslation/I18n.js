import I18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { translationEN } from './en'; // Translations for English
import { translationFR } from './fr'; // Translations for French
import {translationHI } from './hi'; // Translations for Spanish

const resources = {
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationFR,
  },
  hi: {
    translation: translationHI,
  },
};

I18n.use(initReactI18next).init({
  resources,
  lng: 'en', // Default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default I18n;
