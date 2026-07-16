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
	PointLight as pointLightType,
	AmbientLight as ambientLightType,
} from 'three'

import { Dog, Model1, Model2, Rain } from '../models'
import { Gifs, Nav } from '../containers'
import { Aboutme, Projects, Start, Loader, Musics } from '.'
import { useMusics, usePics, useScene, useSounds } from '../hooks'
import { ghosting } from '../utils'
import { Title } from '../components'

const Home = () => {
	const [ghosted, setGhosted] = useState(false)
	const [isAnimating, setIsAnimating] = useState(false)
	const [isMobile, setIsMobile] = useState(false)
	const [dpr, setDpr] = useState(1)
	const [lowfps, setLowfps] = useState(false)

	const pl = useRef<pointLightType>(null)
	const al = useRef<ambientLightType>(null)

	const timeline = gsap.timeline()
	const toggleIsAnimating = (stat?: boolean) =>
		setIsAnimating((prev) => (stat !== undefined ? stat : !prev))

	const { clickS, dingS, rainS, powerS, pbS, cameraS, riff, holoClick } =
		useSounds()
	const { changeMusic, togglePlaying, isPlaying, musicInd } = useMusics(clickS)
	const { pics, changePic } = usePics(isAnimating)

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
		toggleIsAnimating,
		cameraS,
		clickS,
		dingS,
		isMobile,
		isAnimating,
		togglePlaying,
	)

	const toggleGhosting = (stat: boolean) =>
		ghosting(
			stat,
			powerS,
			rainS,
			setIsAnimating,
			setGhosted,
			togglePlaying,
			pl,
			al,
			pbS,
		)

	useEffect(() => {
		if (pics.every((val) => val === 3)) toggleGhosting(true)
		else if (ghosted) toggleGhosting(false)
	}, [pics])

	useEffect(() => {
		window.innerWidth < 768 ? setIsMobile(true) : setIsMobile(false)
	}, [])

	return (
		<>
			{start && <Nav />}
			<Canvas
				className="w-full h-full bg-transparent z-10"
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
				<Suspense fallback={null}>{start && <Dog />}</Suspense>
				<Suspense fallback={null}>{ghosted && <Rain />}</Suspense>
			</Canvas>
		</>
	)
}

export default Home
