import { useTranslation } from 'react-i18next'

const useLang = () => {
	const { i18n } = useTranslation()
	const lang = i18n.language.split('-')[0]

	return lang
}

export default useLang
