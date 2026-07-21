import { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import {
	OrbitControls,
	PerspectiveCamera,
	PerformanceMonitor,
} from '@react-three/drei'
import { gsap } from 'gsap'
import round from 'lodash/round'
import {
	type PointLight as PointLightType,
	type AmbientLight as AmbientLightType,
} from 'three'

import { Dog, Model1, Model2, Rain } from '../models'
import { Gifs, Nav, SignsText } from '../containers'
import { Aboutme, Projects, Start, Loader, Musics } from '.'
import {
	useGhost,
	useMusics,
	usePics,
	useRain,
	useScene,
	useSounds,
} from '../hooks'
import { Title } from '../components'

const Home = () => {
	const [isAnimating, setIsAnimating] = useState(false)
	const [isMobile, setIsMobile] = useState(false)
	const [dpr, setDpr] = useState(1)
	const [lowfps, setLowfps] = useState(false)

	const pl = useRef<PointLightType>(null)
	const al = useRef<AmbientLightType>(null)

	const timeline = gsap.timeline()
	const toggleAnimating = (stat?: boolean) =>
		setIsAnimating((prev) => (stat !== undefined ? stat : !prev))

	const { clickS, dingS, rainS, powerS, pbS, cameraS, riff, holoClick, bark } =
		useSounds()
	const { changeMusic, togglePlaying, isPlaying, musicInd } = useMusics(clickS)
	const { pics, changePic } = usePics(isAnimating)

	const { isRain, toggleRain } = useRain(
		togglePlaying,
		rainS,
		al,
		toggleAnimating,
		isAnimating,
	)

	const {
		changeScene,
		scene,
		controlRef,
		cameraRef,
		show,
		start,
		startScene,
		closeScene,
	} = useScene(
		timeline,
		toggleAnimating,
		cameraS,
		clickS,
		dingS,
		isMobile,
		isAnimating,
		togglePlaying,
	)
	const { ghosted, ghosting } = useGhost(
		powerS,
		toggleAnimating,
		pl,
		al,
		pbS,
		toggleRain,
	)

	useEffect(() => {
		if (pics.every((val) => val === 3)) ghosting(true)
		else if (ghosted) ghosting(false)
	}, [pics])

	useEffect(() => {
		window.innerWidth < 768 ? setIsMobile(true) : setIsMobile(false)
	}, [])

	return (
		<>
			{start && (
				<Nav
					toggleRain={toggleRain}
					changeScene={changeScene}
					togglePlaying={togglePlaying}
					scene={scene}
					isPlaying={isPlaying}
					isRain={isRain}
				/>
			)}
			<Canvas
				className="w-full h-full bg-transparent z-10"
				dpr={dpr}
				gl={{
					powerPreference: 'high-performance',
					antialias: !lowfps,
					stencil: !lowfps,
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
					{!show && <Start handleStart={startScene} />}
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
							riff,
							changePic,
							holoClick,
							changeScene,
						}}
						ghosted={ghosted}
					/>
					<Model2
						funcs={{
							changeMusic,
							riff,
							changePic,
							holoClick,
							changeScene,
						}}
						pics={pics}
						ghosted={ghosted}
						scene={scene}
					/>
					<SignsText />
					<Title />
					{start && !ghosted && !isMobile && (
						<Gifs changeScene={changeScene} isMobile={isMobile} />
					)}
					{scene === 1 && <Aboutme handleClose={closeScene} />}
					{scene === 2 && <Projects handleClose={closeScene} />}
					{scene === 3 && (
						<Musics
							handleClose={closeScene}
							play={isPlaying}
							ind={musicInd}
							changeMusic={changeMusic}
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
				<Suspense fallback={null}>{start && <Dog bark={bark} />}</Suspense>
				<Suspense fallback={null}>{isRain && <Rain />}</Suspense>
			</Canvas>
		</>
	)
}

export default Home
