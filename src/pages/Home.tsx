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
import {
	changeScene,
	ghosting,
	changeMusic,
	handleStart,
	handleClose,
} from '../utils'

const Home = () => {
	const [start, setStart] = useState(false)
	const [musicInd, setMusicInd] = useState(0)
	const [playing, setPlaying] = useState(true)
	const [pics, setPics] = useState<[number, number, number, number]>([
		0, 0, 0, 0,
	])
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

	const toggleHandleStart = () =>
		handleStart(
			setShow,
			setIsAnimating,
			setStart,
			controlRef,
			cameraRef,
			cameraS,
			dingS,
			timeline,
			isMobile,
			musics,
		)

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
		if (!isAnimating)
			setPics((prev) => {
				const updated = [...prev] as [number, number, number, number]
				updated[pnum] = updated[pnum] === 3 ? 0 : updated[pnum] + 1
				return updated
			})
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

	const toggleHandleClose = () =>
		handleClose(
			setIsAnimating,
			setScene,
			clickS,
			cameraS,
			controlRef,
			cameraRef,
			cpx,
			cpy,
			cpz,
		)

	useEffect(() => {
		if (pics.every((val) => val === 3)) toggleGhosting(true)
		else if (ghosted) toggleGhosting(false)
	}, [pics])

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
				{!show && <Start handleStart={toggleHandleStart} />}
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
					pics={pics}
					ghosted={ghosted}
				/>
				{start && !ghosted && !isMobile && (
					<Gifs changeScene={toggleChangeScene} isMobile={isMobile} />
				)}
				{scene === 1 && <Aboutme handleClose={toggleHandleClose} />}
				{scene === 2 && <Projects handleClose={toggleHandleClose} />}
				{scene === 3 && (
					<Musics
						handleClose={toggleHandleClose}
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
