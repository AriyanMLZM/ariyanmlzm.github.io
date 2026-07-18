import { useState } from 'react'
import { Html } from '@react-three/drei'

import { Button, CloseIcon } from '../components'
import { Header, Body, Footer } from '../containers'
import { useSounds } from '../hooks'
import { useTranslation } from 'react-i18next'

const About = ({ handleClose }: { handleClose: () => void }) => {
	const [tab, setTab] = useState(1)
	const { clickS } = useSounds()
	const { t: tAbout } = useTranslation('about')
	const { t: tMenu } = useTranslation('menu')

	const handleTabs = (num: number) => {
		if (clickS.current.paused) clickS.current.play()
		setTab(num)
	}

	return (
		<Html
			transform
			occlude="blending"
			rotation={[0, 0, 0]}
			position={[-0.357182, 17.9479, 7.101]}
			scale={0.2}
		>
			<section className="flex flex-col items-center w-[1800px] h-[950px] bg-bgColor select-none animate-show-up">
				<nav className="flex w-[30%] md:w-[50%] gap-20 justify-between h-[10%] md:text-[40px] text-[30px] text-gray-500">
					<Button active={tab === 1 && true} func={handleTabs} tab={1}>
						{tMenu('about')}
					</Button>
					<Button active={tab === 2 && true} func={handleTabs} tab={2}>
						{tMenu('skills')}
					</Button>
					<Button active={tab === 3 && true} func={handleTabs} tab={3}>
						{tMenu('exp')}
					</Button>
					<Button func={handleClose}>
						<CloseIcon className="text-[65px]" />
					</Button>
				</nav>
				<header className="w-[60%] md:w-full h-[15%] flex flex-row">
					<Header
						text={
							tab === 1
								? tAbout('header')
								: tab === 2
									? tMenu('skills')
									: tMenu('exp')
						}
					/>
				</header>
				<section className="w-[60%] md:w-full h-[55%] flex flex-row">
					<Body tab={tab} />
				</section>
				<section className="w-[60%] md:w-full h-[20%] flex flex-row pb-4">
					<Footer />
				</section>
			</section>
		</Html>
	)
}

export default About
