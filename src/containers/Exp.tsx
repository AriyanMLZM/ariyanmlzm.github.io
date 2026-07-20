import { v4 as uuid } from 'uuid'
import { useLang } from '../hooks'

const Exp = () => {
	const { tAbout, lang } = useLang()

	return (
		<div className="flex w-full animate-show-right">
			<div className="w-[25%] flex flex-col text-primary text-[20px] md:text-[25px] items-end justify-between pt-4 pb-4">
				<h2 className="text-right">{'<ul>'}</h2>
				<h2 className="text-right">{'</ul>'}</h2>
			</div>
			<div className="w-[50%] flex flex-col overflow-y-auto pl-4 py-[20px] text-[28px] md:text-[35px]">
				{tAbout(($) => $.exp, { returnObjects: true }).map((item) => (
					<div className="mb-6 px-[20px]" key={uuid()}>
						<h1
							className="text-white font-bold"
							key={uuid()}
							dir={lang === 'fa' ? 'rtl' : 'ltr'}
						>
							{item.title}
						</h1>
						<h2
							className="text-gray-500"
							key={uuid()}
							dir={lang === 'fa' ? 'rtl' : 'ltr'}
						>
							{item.text}
						</h2>
					</div>
				))}
			</div>
		</div>
	)
}

export default Exp
