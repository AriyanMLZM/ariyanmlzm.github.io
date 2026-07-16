import { Icon } from '@iconify/react'
import { useState } from 'react'

const Button = ({
	func,
	active = false,
	children,
	className = '',
}: {
	func: any
	active?: boolean
	children: React.ReactNode
	className?: string
}) => {
	return (
		<button
			type="button"
			className={`hover:text-primary px-[8px] py-[4px] flex items-center justify-center ${active && 'text-primary'} ${className}`}
			onClick={() => func()}
		>
			{children}
		</button>
	)
}

const Nav = ({
	toggleRain,
	changeScene,
	togglePlaying,
	scene,
	isPlaying,
	isRain,
}: {
	toggleRain: (config: { stat?: boolean; withEffect?: boolean }) => void
	changeScene: (snum: number) => void
	togglePlaying: () => void
	scene: number
	isPlaying: boolean
	isRain: boolean
}) => {
	const [isClose, setIsClose] = useState(true)

	return (
		<nav className="fixed top-[5px] left-[5px] md:text-[20px] text-[16px] text-white z-20 bg-black/50 flex rounded-[20px]">
			<Button func={() => setIsClose((prev) => !prev)} active={!isClose}>
				{isClose ? (
					<Icon icon="mingcute:right-fill" className="text-[30px]" />
				) : (
					<Icon icon="mingcute:left-fill" className="text-[30px]" />
				)}
			</Button>
			{!isClose && (
				<div className="flex">
					<Button func={() => changeScene(1)} active={scene === 1}>
						About
					</Button>
					<Button func={() => changeScene(2)} active={scene === 2}>
						Projects
					</Button>
					<Button func={() => changeScene(3)} active={scene === 3}>
						Musics
					</Button>
					<Button func={() => togglePlaying()} active={isPlaying}>
						<Icon icon="ic:round-music-note" className="text-[25px]" />
					</Button>
					<Button func={() => toggleRain({ withEffect: true })} active={isRain}>
						<Icon icon="lets-icons:rain-fill" className="text-[25px]" />
					</Button>
				</div>
			)}
		</nav>
	)
}

export default Nav
