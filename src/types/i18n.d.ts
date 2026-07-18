import 'i18next'
import { Translation } from '../constants/translation.en'

declare module 'i18next' {
	interface CustomTypeOptions {
		defaultNS: 'translation'
		resources: Translation
		enableSelector: true
	}
}
