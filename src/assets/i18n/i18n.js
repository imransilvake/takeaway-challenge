// i18n
import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

// app
import translationEN from './locales/en';
import translationDE from './locales/de';
import { localStorageGet } from '../../app/utilities/Storage';

// add translations
const resources = {
	en: { translation: translationEN },
	de: { translation: translationDE }
};

// get current language from local storage
const currentLanguage = localStorageGet('TC_LANGUAGE', 'PERSISTENT');

// init i18n
i18n
	.use(detector)
	.use(initReactI18next)
	.init({
		resources,
		lng: currentLanguage || 'en',
		interpolation: { escapeValue: false } // react already safes from xss
	})
	.then();

export default i18n;
