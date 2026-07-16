import { useState } from 'react'

const usePics = (isAnimating: boolean) => {
	const [pics, setPics] = useState<[number, number, number, number]>([
		0, 0, 0, 0,
	])

	const changePic = (pnum: number) => {
		if (!isAnimating)
			setPics((prev) => {
				const updated = [...prev] as [number, number, number, number]
				updated[pnum] = updated[pnum] === 3 ? 0 : updated[pnum] + 1
				return updated
			})
	}

	return { pics, changePic }
}

export default usePics
