import { Text } from '@react-three/drei'
import { useLang } from '../hooks'
import poppinsB from '../assets/fonts/poppins/Poppins-Bold.ttf'
import vazirB from '../assets/fonts/vazir/Vazir-Bold-FD-WOL.woff'

const SignsText = () => {
	const { tMenu, lang } = useLang()
	return (
		<group position={[16, 8.48, -8.92]} rotation={[0, Math.PI / 3.15, 0]}>
			<Text
				textAlign="center"
				color="black"
				font={lang === 'fa' ? vazirB : poppinsB}
				fontSize={lang === 'de' ? 0.45 : 0.55}
				fontWeight={700}
			>
				{tMenu(($) => $.about)}
			</Text>
			<Text
				position={[-0.7, -1.5, 0]}
				textAlign="center"
				color="black"
				font={lang === 'fa' ? vazirB : poppinsB}
				fontSize={0.55}
				fontWeight={700}
			>
				{tMenu(($) => $.projects)}
			</Text>
			<Text
				position={[0, -4.85, 0]}
				textAlign="center"
				color="black"
				font={lang === 'fa' ? vazirB : poppinsB}
				fontSize={0.55}
				fontWeight={700}
			>
				{tMenu(($) => $.musics)}
			</Text>
		</group>
	)
}

export default SignsText
