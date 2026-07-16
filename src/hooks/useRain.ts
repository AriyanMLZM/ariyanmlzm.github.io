import { MutableRefObject, RefObject, useState } from 'react'
import { type AmbientLight as ambientLightType } from 'three'
import { gsap } from 'gsap'

const useRain = (
	togglePlaying: (stat?: boolean) => void,
	rainS: MutableRefObject<HTMLAudioElement>,
	al: RefObject<ambientLightType>,
	toggleAnimating: (stat?: boolean) => void,
) => {
	const [isRain, setIsRain] = useState(false)

	const rain = (withEffect?: boolean) => {
		togglePlaying(false)
		rainS.current.currentTime = 0
		rainS.current.play()
		setIsRain(true)
		if (withEffect) {
			gsap.to(al.current, {
				intensity: 0.5,
				duration: 1,
				ease: 'power2.in',
				onComplete: () => toggleAnimating(false),
			})
		}
	}
	const unRain = (withEffect?: boolean) => {
		rainS.current.pause()
		setIsRain(false)
		if (withEffect) {
			gsap.to(al.current, {
				intensity: 1,
				duration: 4,
				onComplete: () => toggleAnimating(false),
			})
		}
	}

	const toggleRain = (props: { withEffect?: boolean; stat?: boolean }) => {
		if (props.stat !== undefined) {
			if (props.stat) rain(props.withEffect)
			else unRain(props.withEffect)
		} else {
			if (!isRain) rain(props.withEffect)
			else unRain(props.withEffect)
		}
	}

	return { isRain, toggleRain }
}

export default useRain
