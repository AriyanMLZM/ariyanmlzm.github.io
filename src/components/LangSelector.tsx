import { useTranslation } from 'react-i18next'
import { de, en, fa } from '../assets/imgs'
import Button2 from './Button2'

const LangSelector = () => {
	const { i18n } = useTranslation()

	const changeLang = (lang: string) => i18n.changeLanguage(lang)

	return (
		<div className="flex justify-center items-center px-[5px] py-[5px]">
			<Button2
				func={() => changeLang('en')}
				className={
					i18n.language.split('-')[0] === 'en'
						? 'border-[2px] border-primary rounded-full px-[5px] py-[5px]'
						: 'px-[5px] py-[5px] hover:bg-slate-600/70 rounded-full'
				}
			>
				<img
					src={en}
					alt="en"
					className="md:w-[25px] w-[21px]"
					draggable={false}
				/>
			</Button2>
			<Button2
				func={() => changeLang('de')}
				className={
					i18n.language.split('-')[0] === 'de'
						? 'border-[2px] border-primary rounded-full px-[5px] py-[5px]'
						: 'px-[5px] py-[5px] hover:bg-slate-600/70 rounded-full'
				}
			>
				<img
					src={de}
					alt="de"
					className="md:w-[25px] w-[21px]"
					draggable={false}
				/>
			</Button2>
			<Button2
				func={() => changeLang('fa')}
				className={
					i18n.language.split('-')[0] === 'fa'
						? 'border-[2px] border-primary rounded-full px-[5px] py-[5px]'
						: 'px-[5px] py-[5px] hover:bg-slate-600/70 rounded-full'
				}
			>
				<img
					src={fa}
					alt="fa"
					className="md:w-[25px] w-[21px]"
					draggable={false}
				/>
			</Button2>
		</div>
	)
}

export default LangSelector
