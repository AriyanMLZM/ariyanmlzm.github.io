import { Html } from '@react-three/drei'
import { LangSelector } from '../components'
import { useLang } from '../hooks'

const Start = ({ handleStart }: { handleStart: () => void }) => {
	const { tMenu, lang } = useLang()

	return (
		<Html center position={[0, 50, 0]}>
			<div className="bg-black w-screen h-screen flex flex-col gap-[10px] justify-center items-center">
				<button
					type="button"
					onClick={handleStart}
					className={`hover:text-black hover:bg-primary border-[2px] rounded-[20px] border-primary text-primary md:w-[200px] w-[150px] md:text-[50px] text-[40px] flex items-center justify-center ${lang === 'fa' ? 'font-[Vazir]' : 'font-mono'}`}
				>
					{tMenu(($) => $.start)}
				</button>
				<LangSelector />
			</div>
		</Html>
	)
}

export default Start
