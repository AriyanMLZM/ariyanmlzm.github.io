import { MutableRefObject, RefObject, SetStateAction } from 'react'
import { OrbitControls as orbitControlType } from 'three-stdlib'
import { PerspectiveCamera as perspectiveCameraType } from 'three'
import { gsap } from 'gsap'

export const handleStart = (
	setShow: (value: SetStateAction<boolean>) => void,
	setIsAnimating: (value: SetStateAction<boolean>) => void,
	setStart: (value: SetStateAction<boolean>) => void,
	controlRef: RefObject<orbitControlType>,
	cameraRef: RefObject<perspectiveCameraType>,
	cameraS: MutableRefObject<HTMLAudioElement>,
	dingS: MutableRefObject<HTMLAudioElement>,
	timeline: gsap.core.Timeline,
	isMobile: boolean,
	musics: MutableRefObject<HTMLAudioElement>[],
) => {
	setShow(true)
	controlRef.current!.target.x = 0
	controlRef.current!.target.y = 8
	controlRef.current!.target.z = 0
	cameraS.current.play()
	setIsAnimating(true)
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

				musics[0].current.play()
				dingS.current.play()
				setStart(true)
				setIsAnimating(false)
			},
		},
		0,
	)
}

export const handleClose = (
	setIsAnimating: (value: SetStateAction<boolean>) => void,
	setScene: (value: SetStateAction<number>) => void,
	clickS: MutableRefObject<HTMLAudioElement>,
	cameraS: MutableRefObject<HTMLAudioElement>,
	controlRef: RefObject<orbitControlType>,
	cameraRef: RefObject<perspectiveCameraType>,
	cpx: number,
	cpy: number,
	cpz: number,
) => {
	setIsAnimating(true)
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
		x: cpx,
		y: cpy,
		z: cpz,
		duration: 2,
		onComplete: () => {
			setIsAnimating(false)
			controlRef.current!.enableRotate = true
			controlRef.current!.enableZoom = true
			cameraS.current.pause()
			cameraS.current.currentTime = 0
		},
	})
}
