import { Html } from '@react-three/drei'

const Tab = ({
	handleClick,
	ind,
	text,
}: {
	handleClick: (ind: number) => void
	ind: number
	text: string
}) => {
	return (
		<Html>
			<button
				type="button"
				onClick={() => handleClick(ind)}
				className="md:hover:text-white text-black text-[20px] font-mono"
			>
				{text}
			</button>
		</Html>
	)
}

export default Tab
