import { MutableRefObject, RefObject, SetStateAction } from 'react'
import {
	PointLight as pointLightType,
	AmbientLight as ambientLightType,
} from 'three'
import { gsap } from 'gsap'

const ghosting = (
	stat: boolean,
	powerS: MutableRefObject<HTMLAudioElement>,
	rainS: MutableRefObject<HTMLAudioElement>,
	setIsAnimating: (value: SetStateAction<boolean>) => void,
	setGhosted: (value: SetStateAction<boolean>) => void,
	togglePlaying: (stat?: boolean) => void,
	pl: RefObject<pointLightType>,
	al: RefObject<ambientLightType>,
	pbS: MutableRefObject<HTMLAudioElement>,
) => {
	setIsAnimating(true)
	if (stat) {
		if (powerS.current.paused) powerS.current.play()
		togglePlaying(false)
		gsap.to(pl.current, {
			intensity: 0,
			duration: 1,
			ease: 'power2.in',
			onComplete: () => setIsAnimating(false),
		})
		gsap.to(al.current, {
			intensity: 0.25,
			duration: 1,
			ease: 'power2.in',
			onComplete: () => setIsAnimating(false),
		})
		rainS.current.currentTime = 0
		rainS.current.play()
		setGhosted(true)
		return
	}
	if (pbS.current.paused) pbS.current.play()
	gsap.to(pl.current, {
		intensity: 40,
		duration: 4,
	})
	gsap.to(al.current, {
		intensity: 1,
		duration: 4,
		onComplete: () => setIsAnimating(false),
	})
	rainS.current.pause()
	setGhosted(false)
}

export default ghosting
