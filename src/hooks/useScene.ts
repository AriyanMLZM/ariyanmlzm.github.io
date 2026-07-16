import { MutableRefObject, useRef, useState } from 'react'
import { PerspectiveCamera as perspectiveCameraType } from 'three'
import { OrbitControls as orbitControlType } from 'three-stdlib'
import { XYZ, SceneAnimation } from '../types'
import { scenes, titleScene } from '../constants/animations.json'
import { gsap } from 'gsap'

const useScene = (
	timeline: gsap.core.Timeline,
	toggleIsAnimating: (stat?: boolean) => void,
	cameraS: MutableRefObject<HTMLAudioElement>,
	clickS: MutableRefObject<HTMLAudioElement>,
	dingS: MutableRefObject<HTMLAudioElement>,
	isMobile: boolean,
	isAnimating: boolean,
	togglePlaying: () => void,
) => {
	const [cp, setCp] = useState<XYZ>({ x: 0, y: 0, z: 0 })
	const [scene, setScene] = useState(0)
	const [start, setStart] = useState(false)
	const [show, setShow] = useState(false)

	const controlRef = useRef<orbitControlType>(null)
	const cameraRef = useRef<perspectiveCameraType>(null)

	const sceneAnimation = (scene: SceneAnimation, snum: number) => {
		timeline
			.to(cameraRef.current!.position, scene.p1, 0)
			.to(
				cameraRef.current!.position,
				{
					...scene.p2,
					onComplete: () => {
						controlRef.current!.maxDistance = scene.control.maxDis
						controlRef.current!.minDistance = scene.control.minDis
						controlRef.current!.enableZoom = true
						setScene(snum)
						toggleIsAnimating(false)
						cameraS.current.pause()
						cameraS.current.currentTime = 0
					},
				},
				1,
			)
			.to(controlRef.current!.target, scene.control.target, 0)
	}

	const startScene = () => {
		setShow(true)
		controlRef.current!.target.x = 0
		controlRef.current!.target.y = 8
		controlRef.current!.target.z = 0
		cameraS.current.play()
		toggleIsAnimating(true)
		timeline.fromTo(
			cameraRef.current ? cameraRef.current.position : [0, 0, 0],
			{
				x: isMobile ? -71.61 : -66.68,
				y: isMobile ? 55.52 : 40.08,
				z: isMobile ? 83.73 : 35.45,
			},
			{
				x: isMobile ? 76.94 : 70.98,
				y: isMobile ? 7.64 : 17.02,
				z: isMobile ? -20.33 : 40.17,
				duration: 4,
				onComplete: () => {
					controlRef.current!.enableZoom = true
					controlRef.current!.enableRotate = true
					controlRef.current!.maxPolarAngle = Math.PI / 1.94
					controlRef.current!.minPolarAngle = Math.PI / 4

					togglePlaying()
					dingS.current.play()
					setStart(true)
					toggleIsAnimating(false)
				},
			},
			0,
		)
	}

	const changeScene = (snum: number, gif: boolean = false) => {
		if (scene === 0 && !isAnimating) {
			if (gif) {
				switch (snum) {
					case 1:
						if (cameraRef.current!.position.z < 0) return
						break
					case 2:
						if (cameraRef.current!.position.z > 0) return
						break
					case 3:
						if (cameraRef.current!.position.x > 0) return
				}
			}
			if (clickS.current.paused) clickS.current.play()
			toggleIsAnimating(true)
			setCp({
				x: cameraRef.current!.position.x,
				y: cameraRef.current!.position.y,
				z: cameraRef.current!.position.z,
			})
			if (cameraS.current.paused) cameraS.current.play()
			controlRef.current!.enableRotate = false
			controlRef.current!.enableZoom = false
			switch (snum) {
				case 1:
				case 2:
				case 3:
					sceneAnimation(scenes[snum - 1], snum)
					break
				case 4:
					timeline.to(
						cameraRef.current!.position,
						{
							...(isMobile ? titleScene.isMobile : titleScene.notMobile),
							onComplete: () => {
								controlRef.current!.enableZoom = true
								controlRef.current!.enableRotate = true
								toggleIsAnimating(false)
								cameraS.current.pause()
								cameraS.current.currentTime = 0
							},
						},
						0,
					)
			}
		}
	}

	const closeScene = () => {
		toggleIsAnimating(true)
		setScene(0)
		if (clickS.current.paused) clickS.current.play()
		if (cameraS.current.paused) cameraS.current.play()
		controlRef.current!.enableZoom = false
		controlRef.current!.maxDistance = 120
		controlRef.current!.minDistance = 30
		gsap.to(controlRef.current!.target, {
			x: 0,
			y: 8,
			z: 0,
			duration: 2,
		})
		gsap.to(cameraRef.current!.position, {
			x: cp.x,
			y: cp.y,
			z: cp.z,
			duration: 2,
			onComplete: () => {
				toggleIsAnimating(false)
				controlRef.current!.enableRotate = true
				controlRef.current!.enableZoom = true
				cameraS.current.pause()
				cameraS.current.currentTime = 0
			},
		})
	}

	return {
		scene,
		show,
		start,
		controlRef,
		cameraRef,
		changeScene,
		startScene,
		closeScene,
	}
}

export default useScene
