import { Text } from '@react-three/drei'
import { useLang } from '../hooks'
import vazir from '../assets/fonts/vazir/Vazir-FD-WOL.woff'
import vazirB from '../assets/fonts/vazir/Vazir-Bold-FD-WOL.woff'
import poppins from '../assets/fonts/poppins/Poppins-Regular.ttf'
import poppinsB from '../assets/fonts/poppins/Poppins-Bold.ttf'

const Title = () => {
	const { tMenu, lang } = useLang()

	return (
		<group position={[14, 0.5, 6.5]} rotation={[0, Math.PI / 2, 0]}>
			<Text
				rotation={[-Math.PI / 2, 0, 0]}
				fontSize={2.2}
				fontWeight={700}
				textAlign="right"
				font={vazirB}
				visible={lang === 'fa'}
			>
				{tMenu(($) => $.name)}
			</Text>
			<Text
				rotation={[-Math.PI / 2, 0, 0]}
				fontSize={1.2}
				fontWeight={400}
				textAlign="right"
				position={[-1.3, 0, 3.7]}
				lineHeight={1.8}
				font={vazir}
				visible={lang === 'fa'}
			>
				{tMenu(($) => $.title1) + '\n' + tMenu(($) => $.title2)}
			</Text>
			<Text
				rotation={[-Math.PI / 2, 0, 0]}
				fontSize={2.2}
				fontWeight={700}
				textAlign="left"
				font={poppinsB}
				visible={lang !== 'fa'}
			>
				{tMenu(($) => $.name)}
			</Text>
			<Text
				rotation={[-Math.PI / 2, 0, 0]}
				fontSize={1.2}
				fontWeight={400}
				textAlign="left"
				position={[-2.8, 0, 3.7]}
				lineHeight={1.8}
				font={poppins}
				visible={lang !== 'fa'}
			>
				{tMenu(($) => $.title1) + '\n' + tMenu(($) => $.title2)}
			</Text>
		</group>
	)
}

export default Title
