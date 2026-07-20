import { Html } from '@react-three/drei'
import { v4 as uuid } from 'uuid'

import { musics } from '../constants'
import { Music } from '../containers'
import { CloseIcon } from '../components'
import { Icon } from '@iconify/react'
import { useLang } from '../hooks'

const Musics = ({
	ind,
	play,
	handleClose,
	changeMusic,
}: {
	ind: number
	play: boolean
	handleClose: () => void
	changeMusic: (action: number, ind?: number, timeout?: boolean) => void
}) => {
	const { tMenu } = useLang()

	return (
		<Html
			transform
			occlude="blending"
			position={[-10.781, 4.75, -0.45]}
			rotation={[0, -Math.PI / 2, 0]}
			scale={0.2}
		>
			<section className="bg-[#111] flex w-[458px] h-[575px] flex-col select-none animate-show-up">
				<section className="flex justify-around items-center">
					<Icon icon="basil:music-solid" className="text-white text-[40px]" />
					<h1 className="text-purple-500 font-bold text-[30px] w-[200px] text-center">
						{play ? tMenu(($) => $.playing) : tMenu(($) => $.paused)}
					</h1>
					<button
						onClick={handleClose}
						type="button"
						className="w-[80px] h-[80px] flex justify-center items-center"
					>
						<CloseIcon className="hover:text-purple-500" />
					</button>
				</section>
				<section className="flex flex-col items-center">
					{musics.map((music, index) => (
						<Music
							music={music}
							index={index}
							active={index === ind ? true : false}
							changeMusic={changeMusic}
							key={uuid()}
						/>
					))}
				</section>
			</section>
		</Html>
	)
}

export default Musics
