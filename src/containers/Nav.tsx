import { Icon } from '@iconify/react'
import { gsap } from 'gsap'
import { useEffect, useRef, useState } from 'react'
import { Button2, LangSelector } from '../components'
import { useLang } from '../hooks'

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
	const toggleRef = useRef<HTMLSpanElement>(null)
	const menuRef = useRef<HTMLDivElement>(null)
	const { tMenu } = useLang()

	useEffect(() => {
		const toggle = toggleRef.current
		const menu = menuRef.current
		if (!toggle || !menu) return

		gsap.killTweensOf([toggle, menu, menu.children])

		const tl = gsap.timeline()

		tl.to(
			toggle,
			{
				rotation: isClose ? 0 : 180,
				duration: 0.35,
				ease: 'back.out(1.7)',
			},
			0,
		)

		if (isClose) {
			tl.to(
				menu,
				{
					x: -16,
					autoAlpha: 0,
					duration: 0.25,
					ease: 'power2.in',
					pointerEvents: 'none',
				},
				0,
			)
		} else {
			tl.fromTo(
				menu,
				{ x: -16, autoAlpha: 0 },
				{
					x: 0,
					autoAlpha: 1,
					duration: 0.35,
					ease: 'power2.out',
					pointerEvents: 'auto',
				},
				0,
			)
			tl.from(
				menu.children,
				{
					opacity: 0,
					x: -10,
					duration: 0.25,
					stagger: 0.05,
					ease: 'power2.out',
				},
				0.12,
			)
		}
	}, [isClose])

	return (
		<nav className="fixed top-[5px] left-[5px] md:text-[20px] text-[16px] text-white z-20 bg-black/50 flex rounded-[20px]">
			<Button2 func={() => setIsClose((prev) => !prev)} active={!isClose}>
				<span ref={toggleRef} className="inline-flex">
					<Icon
						icon="mingcute:right-fill"
						className="md:text-[30px] text-[25px]"
					/>
				</span>
			</Button2>
			<div
				ref={menuRef}
				className="md:flex overflow-hidden pointer-events-none invisible opacity-0"
				aria-hidden={isClose}
			>
				{!isClose && (
					<>
						<div className="flex">
							<Button2 func={() => changeScene(1)} active={scene === 1}>
								{tMenu(($) => $.about)}
							</Button2>
							<Button2 func={() => changeScene(2)} active={scene === 2}>
								{tMenu(($) => $.projects)}
							</Button2>
							<Button2 func={() => changeScene(3)} active={scene === 3}>
								{tMenu(($) => $.musics)}
							</Button2>
							<Button2 func={() => togglePlaying()} active={isPlaying}>
								<Icon
									icon="ic:round-music-note"
									className="md:text-[25px] text-[22px]"
								/>
							</Button2>
							<Button2
								func={() => toggleRain({ withEffect: true })}
								active={isRain}
							>
								<Icon
									icon="lets-icons:rain-fill"
									className="md:text-[25px] text-[22px]"
								/>
							</Button2>
						</div>
						<LangSelector />
					</>
				)}
			</div>
		</nav>
	)
}

export default Nav
