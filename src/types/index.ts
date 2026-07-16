export type Vxyz = [x: number, y: number, z: number]
export type XYZ = { x: number; y: number; z: number }
export interface SceneAnimation {
	p1: {
		x: number
		y: number
		z: number
		duration: number
	}
	p2: {
		x: number
		y: number
		z: number
		duration: number
		delay: number
	}
	control: {
		maxDis: number
		minDis: number
		target: {
			x: number
			y: number
			z: number
			duration: number
		}
	}
}
