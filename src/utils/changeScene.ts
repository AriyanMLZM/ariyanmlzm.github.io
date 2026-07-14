import { MutableRefObject, RefObject, SetStateAction } from 'react'
import { PerspectiveCamera as perspectiveCameraType } from 'three'
import { OrbitControls as orbitControlType } from 'three-stdlib'

const changeScene = (
	snum: number,
	gif: boolean = false,
	timeline: gsap.core.Timeline,
	cameraRef: RefObject<perspectiveCameraType>,
	controlRef: RefObject<orbitControlType>,
	setIsAnimating: (value: SetStateAction<boolean>) => void,
	setCpx: (value: SetStateAction<number>) => void,
	setCpy: (value: SetStateAction<number>) => void,
	setCpz: (value: SetStateAction<number>) => void,
	cameraS: MutableRefObject<HTMLAudioElement>,
	clickS: MutableRefObject<HTMLAudioElement>,
	setScene: (value: SetStateAction<number>) => void,
	isMobile: boolean,
	isAnimating: boolean,
	scene: number,
) => {
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
					break
			}
		}
		if (clickS.current.paused) clickS.current.play()
		setIsAnimating(true)
		setCpx(cameraRef.current!.position.x)
		setCpy(cameraRef.current!.position.y)
		setCpz(cameraRef.current!.position.z)
		if (cameraS.current.paused) cameraS.current.play()
		controlRef.current!.enableRotate = false
		controlRef.current!.enableZoom = false
		switch (snum) {
			case 1:
				timeline
					.to(
						cameraRef.current!.position,
						{
							x: -0.4,
							y: 17.98,
							z: 60,
							duration: 1,
						},
						0,
					)
					.to(
						cameraRef.current!.position,
						{
							x: -0.4,
							y: 17.98,
							z: 25,
							delay: 0.5,
							duration: 1,
							onComplete: () => {
								controlRef.current!.maxDistance = 50
								controlRef.current!.minDistance = 15
								controlRef.current!.enableZoom = true
								setScene(snum)
								setIsAnimating(false)
								cameraS.current.pause()
								cameraS.current.currentTime = 0
							},
						},
						1,
					)
					.to(
						controlRef.current!.target,
						{
							x: -0.4,
							y: 17.98,
							z: 0,
							duration: 2,
						},
						0,
					)
				break
			case 2:
				timeline
					.to(
						cameraRef.current!.position,
						{
							x: -0.7,
							y: 5.05,
							z: -60,
							duration: 1,
						},
						0,
					)
					.to(
						cameraRef.current!.position,
						{
							x: -0.7,
							y: 5.05,
							z: -25,
							duration: 1,
							delay: 0.5,
							onComplete: () => {
								controlRef.current!.maxDistance = 40
								controlRef.current!.minDistance = 15
								controlRef.current!.enableZoom = true
								setScene(snum)
								setIsAnimating(false)
								cameraS.current.pause()
								cameraS.current.currentTime = 0
							},
						},
						1,
					)
					.to(
						controlRef.current!.target,
						{
							x: -0.7,
							y: 5.05,
							z: 0,
							duration: 2,
						},
						0,
					)
				break
			case 3:
				timeline
					.to(
						cameraRef.current!.position,
						{
							x: -60,
							y: 4.71,
							z: -0.44,
							duration: 1,
						},
						0,
					)
					.to(
						cameraRef.current!.position,
						{
							x: -25,
							y: 4.71,
							z: -0.44,
							duration: 1,
							delay: 0.5,
							onComplete: () => {
								controlRef.current!.maxDistance = 40
								controlRef.current!.minDistance = 15
								controlRef.current!.enableZoom = true
								setScene(snum)
								setIsAnimating(false)
								cameraS.current.pause()
								cameraS.current.currentTime = 0
							},
						},
						1,
					)
					.to(
						controlRef.current!.target,
						{
							x: 0,
							y: 4.71,
							z: -0.44,
							duration: 2,
						},
						0,
					)
				break
			case 4:
				timeline.to(
					cameraRef.current!.position,
					{
						x: isMobile ? 94.82 : 60,
						y: isMobile ? 68.89 : 110,
						z: isMobile ? 41.21 : 0,
						duration: 1,
						onComplete: () => {
							controlRef.current!.enableZoom = true
							controlRef.current!.enableRotate = true
							setIsAnimating(false)
							cameraS.current.pause()
							cameraS.current.currentTime = 0
						},
					},
					0,
				)
				break
		}
	}
}

export default changeScene
