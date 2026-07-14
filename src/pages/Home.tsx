import { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import {
	OrbitControls,
	PerspectiveCamera,
	PerformanceMonitor,
} from '@react-three/drei'
import { gsap } from 'gsap'
import round from 'lodash/round'
import { OrbitControls as orbitControlType } from 'three-stdlib'
import {
	PerspectiveCamera as perspectiveCameraType,
	PointLight as pointLightType,
	AmbientLight as ambientLightType,
} from 'three'

import { Dog, Model1, Model2, Rain } from '../models'
import { Gifs } from '../containers'
import { Aboutme, Projects, Start, Loader, Musics } from '.'
import { useMusics, useSounds } from '../hooks'
import { changeScene, ghosting, changeMusic } from '../utils'

const Home = () => {
	const [start, setStart] = useState(false)
	const [musicInd, setMusicInd] = useState(0)
	const [playing, setPlaying] = useState(true)
	const [pic1, setPic1] = useState(0)
	const [pic2, setPic2] = useState(0)
	const [pic3, setPic3] = useState(0)
	const [pic4, setPic4] = useState(0)
	const [ghosted, setGhosted] = useState(false)
	const [isAnimating, setIsAnimating] = useState(false)
	const [scene, setScene] = useState(0)
	const [cpx, setCpx] = useState(0)
	const [cpy, setCpy] = useState(0)
	const [cpz, setCpz] = useState(0)
	const [isMobile, setIsMobile] = useState(false)
	const [show, setShow] = useState(false)
	const [dpr, setDpr] = useState(1)
	const [lowfps, setLowfps] = useState(false)

	const controlRef = useRef<orbitControlType>(null)
	const cameraRef = useRef<perspectiveCameraType>(null)
	const pl = useRef<pointLightType>(null)
	const al = useRef<ambientLightType>(null)

	const musics = useMusics()
	const { clickS, guitarS, dingS, rainS, powerS, pbS, holoS, cameraS } =
		useSounds()

	const timeline = gsap.timeline()

	const handleStart = () => {
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

	const toggleChangeMusic = (
		action: number,
		ind: number = -1,
		timeout: boolean = false,
	) =>
		changeMusic(
			action,
			ind,
			timeout,
			clickS,
			scene,
			playing,
			musics,
			musicInd,
			setMusicInd,
			setPlaying,
			toggleChangeScene,
		)

	useEffect(() => {
		if (start) {
			musics[musicInd].current.currentTime = 0
			musics[musicInd].current.play()
			if (!playing) setPlaying(true)
		}
	}, [musicInd])

	const changePic = (pnum: number) => {
		if (!isAnimating) {
			switch (pnum) {
				case 1:
					if (pic1 === 3) setPic1(0)
					else setPic1(pic1 + 1)
					break
				case 2:
					if (pic2 === 3) setPic2(0)
					else setPic2(pic2 + 1)
					break
				case 3:
					if (pic3 === 3) setPic3(0)
					else setPic3(pic3 + 1)
					break
				case 4:
					if (pic4 === 3) setPic4(0)
					else setPic4(pic4 + 1)
					break
			}
		}
	}

	const riff = () => {
		if (guitarS.current.paused) guitarS.current.play()
	}
	const holoClick = () => {
		if (holoS.current.paused) holoS.current.play()
	}

	const toggleChangeScene = (snum: number, gif: boolean = false) =>
		changeScene(
			snum,
			gif,
			timeline,
			cameraRef,
			controlRef,
			setIsAnimating,
			setCpx,
			setCpy,
			setCpz,
			cameraS,
			clickS,
			setScene,
			isMobile,
			isAnimating,
			scene,
		)

	const toggleGhosting = (stat: boolean) =>
		ghosting(
			stat,
			powerS,
			rainS,
			setIsAnimating,
			setPlaying,
			setGhosted,
			musics,
			musicInd,
			playing,
			pl,
			al,
			pbS,
		)

	const handleClose = () => {
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

	useEffect(() => {
		if (pic1 === 3 && pic2 === 3 && pic3 === 3 && pic4 === 3)
			toggleGhosting(true)
		else {
			if (ghosted) toggleGhosting(false)
		}
	}, [pic1, pic2, pic3, pic4])

	useEffect(() => {
		window.innerWidth < 768 ? setIsMobile(true) : setIsMobile(false)
	}, [])

	return (
		<Canvas
			className="w-full h-full bg-transparent"
			dpr={dpr}
			gl={{
				powerPreference: 'high-performance',
				antialias: lowfps ? false : true,
				stencil: lowfps ? false : true,
			}}
		>
			<PerformanceMonitor
				onChange={({ factor }) => {
					var tempDpr = round(0.5 + 1.5 * factor, 1)
					if (tempDpr <= 1.2) setLowfps(true)
					else setLowfps(false)
					if (tempDpr > 1.5) setDpr(1.5)
					else setDpr(tempDpr)
				}}
			/>
			<Suspense fallback={<Loader />}>
				{!show && <Start handleStart={handleStart} />}
				<PerspectiveCamera
					ref={cameraRef}
					position={[0, 40, 0]}
					near={0.1}
					far={1000}
					fov={25}
					makeDefault
				/>
				<pointLight color={'#fff'} position={[-11.5, 6, 12]} intensity={20} />
				<pointLight
					color={'#fff'}
					position={[0, 6, 0]}
					intensity={40}
					ref={pl}
				/>
				<ambientLight intensity={1} ref={al} />
				<Model1
					funcs={{
						changeMusic: toggleChangeMusic,
						riff,
						changePic,
						holoClick,
						changeScene: toggleChangeScene,
					}}
					ghosted={ghosted}
				/>
				<Model2
					funcs={{
						changeMusic: toggleChangeMusic,
						riff,
						changePic,
						holoClick,
						changeScene: toggleChangeScene,
					}}
					ind={{ pic1, pic2, pic3, pic4 }}
					ghosted={ghosted}
				/>
				{start && !ghosted && !isMobile && (
					<Gifs changeScene={toggleChangeScene} isMobile={isMobile} />
				)}
				{scene === 1 && <Aboutme handleClose={handleClose} />}
				{scene === 2 && <Projects handleClose={handleClose} />}
				{scene === 3 && (
					<Musics
						handleClose={handleClose}
						play={playing}
						ind={musicInd}
						changeMusic={toggleChangeMusic}
					/>
				)}
				<OrbitControls
					maxDistance={120}
					minDistance={30}
					target={[0, 60, 0]}
					enablePan={false}
					enableZoom={false}
					enableRotate={false}
					ref={controlRef}
				/>
			</Suspense>
			<Suspense fallback={null}>{start && <Dog />}</Suspense>
			<Suspense fallback={null}>{ghosted && <Rain />}</Suspense>
		</Canvas>
	)
}

export default Home
