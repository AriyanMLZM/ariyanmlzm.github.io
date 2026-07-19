import { Text } from '@react-three/drei'
import { useTranslation } from 'react-i18next'

const Title = () => {
	const { t } = useTranslation('menu')

	return (
		<group position={[14, 0.6, 6.5]} rotation={[0, Math.PI / 2, 0]}>
			<Text
				rotation={[-Math.PI / 2, 0, 0]}
				fontSize={2.2}
				fontWeight={500}
				textAlign="left"
			>
				Ariyan Molazem
			</Text>
			<Text
				rotation={[-Math.PI / 2, 0, 0]}
				fontSize={1.2}
				fontWeight={500}
				textAlign="left"
				position={[-2.8, 0, 3.7]}
				lineHeight={1.8}
			>
				{t(($) => $.title1) + '\n' + t(($) => $.title2)}
			</Text>
		</group>
	)
}

export default Title
