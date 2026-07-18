import { useTranslation } from 'react-i18next'

const About = () => {
	const { t } = useTranslation('about')
	return (
		<div className="w-full flex animate-show-right">
			<div className="w-[25%] flex flex-col text-primary text-[20px] md:text-[25px] items-end justify-between pt-4 pb-4">
				<h2 className="text-right">{'<p>'}</h2>
				<h2 className="text-right">{'</p>'}</h2>
			</div>
			<div className="w-[50%] flex items-center pl-4 text-[28px] md:text-[35px] text-white">
				<p className="text-justify">
					{t(($) => $.info, { year: new Date().getFullYear() - 2021 })}
				</p>
			</div>
		</div>
	)
}

export default About
