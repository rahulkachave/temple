import I18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { translationEN } from './en'; // Translations for English
import { translationTelugu} from './Telugu'; // Translations for telugu
import {translationHI } from './hi'; // Translations for Spanish

const resources = {
  en: {
    translation: translationEN,
  },
  Telugu: {
    translation: translationTelugu,
  },
  hi: {
    translation: translationHI,
  },
};

I18n
.use(initReactI18next)  // Initialize i18next for React
.init({
  resources,  // Load translations
  lng: 'en', // Default language
  fallbackLng: 'en', // Fallback language if translation is missing
  interpolation: {
    escapeValue: false, // React already escapes by default
  },
});

export default I18n;


