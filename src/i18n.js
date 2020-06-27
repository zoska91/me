import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import pl from './translations/pl';
import en from './translations/en';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    whitelist: ['pl', 'en'],

    resources: {
      en: {
        translation: en,
      },
      pl: {
        translation: pl,
      },
    },
  });

export default i18n;
