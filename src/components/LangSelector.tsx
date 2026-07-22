import Button2 from './Button2'
import { useLang } from '../hooks'

const LangSelector = () => {
	const { changeLang, lang } = useLang()

	return (
		<div className="flex justify-center items-center px-[4px] py-[4px]">
			<Button2
				func={() => changeLang('en')}
				className={
					lang === 'en'
						? 'border-[2px] border-primary rounded-full px-[4px] py-[4px]'
						: 'px-[4px] py-[4px] hover:bg-slate-600/70 rounded-full'
				}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="md:w-[27px] w-[23px]"
					viewBox="0 0 512 512"
				>
					<mask id="SVGuywqVbel">
						<circle cx={256} cy={256} r={256} fill="#fff"></circle>
					</mask>
					<g mask="url(#SVGuywqVbel)">
						<path
							fill="#eee"
							d="m0 0l8 22l-8 23v23l32 54l-32 54v32l32 48l-32 48v32l32 54l-32 54v68l22-8l23 8h23l54-32l54 32h32l48-32l48 32h32l54-32l54 32h68l-8-22l8-23v-23l-32-54l32-54v-32l-32-48l32-48v-32l-32-54l32-54V0l-22 8l-23-8h-23l-54 32l-54-32h-32l-48 32l-48-32h-32l-54 32L68 0z"
						></path>
						<path
							fill="#0052b4"
							d="M336 0v108L444 0Zm176 68L404 176h108zM0 176h108L0 68ZM68 0l108 108V0Zm108 512V404L68 512ZM0 444l108-108H0Zm512-108H404l108 108Zm-68 176L336 404v108z"
						></path>
						<path
							fill="#d80027"
							d="M0 0v45l131 131h45zm208 0v208H0v96h208v208h96V304h208v-96H304V0zm259 0L336 131v45L512 0zM176 336L0 512h45l131-131zm160 0l176 176v-45L381 336z"
						></path>
					</g>
				</svg>
			</Button2>
			<Button2
				func={() => changeLang('de')}
				className={
					lang === 'de'
						? 'border-[2px] border-primary rounded-full px-[4px] py-[4px]'
						: 'px-[4px] py-[4px] hover:bg-slate-600/70 rounded-full'
				}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="md:w-[27px] w-[23px]"
					viewBox="0 0 64 64"
				>
					<path
						fill="#0f0f0f"
						d="M31.9 2C18.8 2 7.7 10.4 3.6 22h56.6C56.1 10.4 45 2 31.9 2"
					></path>
					<path
						fill="#FFDA44"
						d="M31.9 62c13.1 0 24.2-8.3 28.3-20H3.6c4.1 11.7 15.2 20 28.3 20"
					></path>
					<path
						fill="#D80027"
						d="M3.6 22c-1.1 3.1-1.7 6.5-1.7 10s.6 6.9 1.7 10h56.6c1.1-3.1 1.7-6.5 1.7-10s-.6-6.9-1.7-10z"
					></path>
				</svg>
			</Button2>
			<Button2
				func={() => changeLang('fa')}
				className={
					lang === 'fa'
						? 'border-[2px] border-primary rounded-full px-[4px] py-[4px]'
						: 'px-[4px] py-[4px] hover:bg-slate-600/70 rounded-full'
				}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="md:w-[27px] w-[23px]"
					viewBox="0 0 64 64"
				>
					<path
						fill="#6DA544"
						d="M32 2C18.9 2 7.8 10.3 3.7 22h56.6C56.2 10.3 45.1 2 32 2"
					></path>
					<path
						fill="#D80027"
						d="M32 62c13.1 0 24.2-8.3 28.3-20H3.7C7.8 53.7 18.9 62 32 62"
					></path>
					<path
						fill="#f9f9f9"
						d="M3.7 22C2.6 25.1 2 28.5 2 32s.6 6.9 1.7 10h56.6c1.1-3.1 1.7-6.5 1.7-10s-.6-6.9-1.7-10z"
					></path>
				</svg>
			</Button2>
		</div>
	)
}

export default LangSelector
