import { Text } from '@react-three/drei'

const Title = () => {
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
				Software Engineer{'\n'}Fullstack Developer
			</Text>
		</group>
	)
}

export default Title
