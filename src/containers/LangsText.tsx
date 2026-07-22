import { Text } from '@react-three/drei'
import poppinsB from '../assets/fonts/poppins/Poppins-Bold.ttf'
import vazirB from '../assets/fonts/vazir/Vazir-Bold-FD-WOL.woff'
import { useLang } from '../hooks'
import { useState } from 'react'

const LangsText = ({ closeScene }: { closeScene: () => void }) => {
	const { changeLang, lang } = useLang()
	const [hovered, setHovered] = useState(0)

	return (
		<group position={[-5.35, 4, 7.9]} rotation={[0, Math.PI / 2, 0]}>
			<group rotation={[-Math.PI / 2, 0, 0]}>
				<Text
					font={poppinsB}
					fontWeight={700}
					fontSize={hovered === 1 ? 0.20 : 0.18}
					color={lang === 'en' || hovered === 1 ? '#00bfff' : 'white'}
					onClick={() => changeLang('en')}
					onPointerOver={() => setHovered(1)}
					onPointerLeave={() => setHovered(0)}
				>
					English
				</Text>
				<Text
					position={[-0.64, 0.55, 0]}
					font={poppinsB}
					fontWeight={700}
					fontSize={hovered === 2 ? 0.20 : 0.18}
					color={lang === 'de' || hovered === 2 ? '#00bfff' : 'white'}
					onClick={() => changeLang('de')}
					onPointerOver={() => setHovered(2)}
					onPointerLeave={() => setHovered(0)}
				>
					Deutsch
				</Text>
				<Text
					position={[0.6, 0.55, 0]}
					font={vazirB}
					fontWeight={700}
					fontSize={hovered === 3 ? 0.20 : 0.18}
					color={lang === 'fa' || hovered === 3 ? '#00bfff' : 'white'}
					onClick={() => changeLang('fa')}
					onPointerOver={() => setHovered(3)}
					onPointerLeave={() => setHovered(0)}
				>
					فارسی
				</Text>
				<Text
					position={[0, -0.45, 0]}
					font={poppinsB}
					fontWeight={700}
					fontSize={0.20}
					color={hovered === 4 ? 'red' : 'white'}
					onClick={() => closeScene()}
					onPointerOver={() => setHovered(4)}
					onPointerLeave={() => setHovered(0)}
				>
					X
				</Text>
			</group>
		</group>
	)
}

export default LangsText
