import { Text } from '@react-three/drei'
import { useLang } from '../hooks'
import vazir from '../assets/fonts/Vazir.ttf'

const Title = () => {
	const { tMenu, lang } = useLang()

	return (
		<group position={[14, 0.5, 6.5]} rotation={[0, Math.PI / 2, 0]}>
			<Text
				rotation={[-Math.PI / 2, 0, 0]}
				fontSize={2.2}
				fontWeight={500}
				textAlign={lang === 'fa' ? 'right' : 'left'}
				font={vazir}
			>
				{tMenu(($) => $.name)}
			</Text>
			<Text
				rotation={[-Math.PI / 2, 0, 0]}
				fontSize={1.2}
				fontWeight={500}
				textAlign={lang === 'fa' ? 'right' : 'left'}
				position={[lang === 'fa' ? -1.3 : -2.8, 0, 3.7]}
				lineHeight={1.8}
			>
				{tMenu(($) => $.title1) + '\n' + tMenu(($) => $.title2)}
			</Text>
		</group>
	)
}

export default Title
