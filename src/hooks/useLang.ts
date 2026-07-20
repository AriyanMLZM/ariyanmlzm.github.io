import { useTranslation } from 'react-i18next'

const useLang = () => {
	const { i18n } = useTranslation()
	const { t: tAbout } = useTranslation('about')
	const { t: tMenu } = useTranslation('menu')
	const { t: tProjects } = useTranslation('projects')

	const lang = i18n.language.split('-')[0]
	const changeLang = (lang: string) => {
		i18n.changeLanguage(lang)
	}

	return { lang, tAbout, tMenu, tProjects, changeLang }
}

export default useLang
