export const handleStart = (setShow) => {
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
