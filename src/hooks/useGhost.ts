import { MutableRefObject, RefObject, useState } from 'react'
import {
	type PointLight as pointLightType,
	type AmbientLight as ambientLightType,
} from 'three'
import { gsap } from 'gsap'

const useGhost = (
	powerS: MutableRefObject<HTMLAudioElement>,
	toggleAnimating: (stat?: boolean) => void,
	pl: RefObject<pointLightType>,
	al: RefObject<ambientLightType>,
	pbS: MutableRefObject<HTMLAudioElement>,
	toggleRain: (config: { stat: boolean }) => void,
) => {
	const [ghosted, setGhosted] = useState(false)

	const ghosting = (stat: boolean) => {
		toggleAnimating(true)
		if (stat) {
			if (powerS.current.paused) powerS.current.play()
			toggleRain({ stat: true })
			gsap.to(pl.current, {
				intensity: 0,
				duration: 1,
				ease: 'power2.in',
			})
			gsap.to(al.current, {
				intensity: 0.25,
				duration: 1,
				ease: 'power2.in',
				onComplete: () => {
					toggleAnimating(false)
					setGhosted(true)
				},
			})
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
			onComplete: () => toggleAnimating(false),
		})
		toggleRain({ stat: false })
		setGhosted(false)
	}

	return { ghosted, ghosting }
}

export default useGhost
