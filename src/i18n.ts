import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import en from './constants/translation.en'
import de from './constants/tranlation.de'
import fa from './constants/tranlation.fa'

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		enableSelector: true,
		resources: {
			en,
			de,
			fa,
		},
		fallbackLng: 'en',
		interpolation: {
			escapeValue: false,
		},
	})

export default i18n
