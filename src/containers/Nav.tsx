import { Icon } from '@iconify/react'
import { gsap } from 'gsap'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

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
	const toggleRef = useRef<HTMLSpanElement>(null)
	const menuRef = useRef<HTMLDivElement>(null)
	const { t } = useTranslation('menu')

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
			<Button func={() => setIsClose((prev) => !prev)} active={!isClose}>
				<span ref={toggleRef} className="inline-flex">
					<Icon icon="mingcute:right-fill" className="text-[30px]" />
				</span>
			</Button>
			<div
				ref={menuRef}
				className="flex overflow-hidden pointer-events-none invisible opacity-0"
				aria-hidden={isClose}
			>
				{!isClose && (
					<>
						<Button func={() => changeScene(1)} active={scene === 1}>
							{t(($) => $.about)}
						</Button>
						<Button func={() => changeScene(2)} active={scene === 2}>
							{t(($) => $.projects)}
						</Button>
						<Button func={() => changeScene(3)} active={scene === 3}>
							{t(($) => $.musics)}
						</Button>
						<Button func={() => togglePlaying()} active={isPlaying}>
							<Icon icon="ic:round-music-note" className="text-[25px]" />
						</Button>
						<Button
							func={() => toggleRain({ withEffect: true })}
							active={isRain}
						>
							<Icon icon="lets-icons:rain-fill" className="text-[25px]" />
						</Button>
					</>
				)}
			</div>
		</nav>
	)
}

export default Nav
