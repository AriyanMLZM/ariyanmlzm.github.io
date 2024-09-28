import { Html } from '@react-three/drei'

import { Ixyz } from '../types'

const HtmlGif = ({
	rot,
	pos,
	width,
	height,
	fileName,
	scale = 0.2,
	changeScene,
	snum = -1,
}: {
	rot: Ixyz
	pos: Ixyz
	width: string
	height: string
	scale?: number
	fileName: string
	snum?: number
	changeScene?: (snum: number, gif: boolean) => void
}) => {
	return (
		<Html
			transform
			occlude="blending"
			rotation={rot}
			position={pos}
			scale={scale}
		>
			<div
				onClick={() => {
					if (changeScene) changeScene(snum, true)
				}}
				className="flex justify-center items-center"
				style={{ width: width, height: height }}
			>
				<video
					className="pointer-events-none select-none w-full"
					draggable={false}
					autoPlay
					loop
					src={`./gifs/${fileName}`}
					controlsList="nodownlaod"
				></video>
			</div>
		</Html>
	)
}

export default HtmlGif
