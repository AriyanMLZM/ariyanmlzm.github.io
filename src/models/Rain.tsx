import { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { Mesh } from 'three'

import modelGltf from '../assets/3d/rain.glb'

const Rain = () => {
	const { scene, animations } = useGLTF(modelGltf) as any
	const modelRef = useRef<Mesh>(null)
	const { actions } = useAnimations(animations, modelRef)

	useEffect(() => {
		actions['rainAction']?.play()
	}, [])

	return (
		<mesh ref={modelRef}>
			<primitive object={scene} />
		</mesh>
	)
}

export default Rain
