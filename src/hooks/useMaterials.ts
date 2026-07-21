import { useEffect, useMemo } from 'react'
import { useTexture } from '@react-three/drei'
import { MeshStandardMaterial } from 'three'

const FILES = [
	'wallt.jpg',
	'floort.jpg',
	'baked.jpg',
	'baked2.jpg',
	'baked3.jpg',
	'baked4.jpg',
	'baked5.jpg',
	'baked6.jpg',
	'baked7.jpg',
	'baked8.jpg',
] as const

export type MaterialMap = {
	wall: MeshStandardMaterial
	floor: MeshStandardMaterial
	baked: MeshStandardMaterial
	baked2: MeshStandardMaterial
	baked3: MeshStandardMaterial
	baked4: MeshStandardMaterial
	baked5: MeshStandardMaterial
	baked6: MeshStandardMaterial
	baked7: MeshStandardMaterial
	baked8: MeshStandardMaterial
}

const useMaterials = (): MaterialMap => {
	const textures = useTexture(FILES.map((file) => `/textures/${file}`))

	const materials = useMemo(() => {
		textures.forEach((texture) => {
			texture.flipY = false
			texture.needsUpdate = true
		})

		return {
			wall: new MeshStandardMaterial({ map: textures[0] }),
			floor: new MeshStandardMaterial({ map: textures[1] }),
			baked: new MeshStandardMaterial({ map: textures[2] }),
			baked2: new MeshStandardMaterial({ map: textures[3] }),
			baked3: new MeshStandardMaterial({ map: textures[4] }),
			baked4: new MeshStandardMaterial({ map: textures[5] }),
			baked5: new MeshStandardMaterial({ map: textures[6] }),
			baked6: new MeshStandardMaterial({ map: textures[7] }),
			baked7: new MeshStandardMaterial({ map: textures[8] }),
			baked8: new MeshStandardMaterial({ map: textures[9] }),
		}
	}, [textures])

	useEffect(() => {
		return () => {
			Object.values(materials).forEach((material) => material.dispose())
		}
	}, [materials])

	return materials
}

export default useMaterials
