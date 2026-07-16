import { MutableRefObject, RefObject, useState } from 'react'
import { type AmbientLight as ambientLightType } from 'three'
import { gsap } from 'gsap'

const useRain = (
	togglePlaying: (stat?: boolean) => void,
	rainS: MutableRefObject<HTMLAudioElement>,
	al: RefObject<ambientLightType>,
	toggleAnimating: (stat?: boolean) => void,
	isAnimating: boolean,
) => {
	const [isRain, setIsRain] = useState(false)

	const rain = (withEffect?: boolean) => {
		if (!withEffect || !isAnimating) {
			togglePlaying(false)
			rainS.current.currentTime = 0
			rainS.current.play()
			setIsRain(true)
			if (withEffect) {
				toggleAnimating(true)
				gsap.to(al.current, {
					intensity: 0.5,
					duration: 1,
					ease: 'power2.in',
					onComplete: () => toggleAnimating(false),
				})
			}
		}
	}
	const unRain = (withEffect?: boolean) => {
		if (!withEffect || !isAnimating) {
			rainS.current.pause()
			setIsRain(false)
			if (withEffect) {
				toggleAnimating(true)
				gsap.to(al.current, {
					intensity: 1,
					duration: 2,
					onComplete: () => toggleAnimating(false),
				})
			}
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
