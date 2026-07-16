import { MutableRefObject, useRef, useState } from 'react'

import {
	music1,
	music2,
	music3,
	music4,
	music5,
	music6,
} from '../assets/musics'

const useMusics = (clickS: MutableRefObject<HTMLAudioElement>) => {
	const [isPlaying, setIsPlaying] = useState(false)
	const [musicInd, setMusicInd] = useState(0)

	const m1 = useRef(new Audio(music1))
	const m2 = useRef(new Audio(music2))
	const m3 = useRef(new Audio(music3))
	const m4 = useRef(new Audio(music4))
	const m5 = useRef(new Audio(music5))
	const m6 = useRef(new Audio(music6))

	const musics = [m1, m2, m3, m4, m5, m6]
	musics.forEach((item) => {
		item.current.volume = 0.9
		item.current.loop = true
	})

	const togglePlaying = (stat?: boolean) => {
		if (stat !== undefined) {
			if (stat && !isPlaying) {
				musics[musicInd].current.play()
				setIsPlaying(true)
			} else if (!stat && isPlaying) {
				musics[musicInd].current.pause()
				setIsPlaying(false)
			}
		} else {
			if (isPlaying) musics[musicInd].current.pause()
			else {
				musics[musicInd].current.play()
			}
			setIsPlaying((prev) => !prev)
		}
	}

	const changeMusic = (action: number, ind: number = -1) => {
		if (clickS.current.paused) clickS.current.play()
		let indexed = 0
		switch (action) {
			case -1:
				musics[musicInd].current.pause()
				indexed = musicInd === 0 ? musics.length - 1 : musicInd - 1
				musics[indexed].current.currentTime = 0
				musics[indexed].current.play()
				setMusicInd(indexed)
				setIsPlaying(true)
				break
			case 0:
				togglePlaying()
				break
			case 1:
				musics[musicInd].current.pause()
				indexed = musicInd === musics.length - 1 ? 0 : musicInd + 1
				musics[indexed].current.currentTime = 0
				musics[indexed].current.play()
				setMusicInd(indexed)
				setIsPlaying(true)
				break
			case 2:
				musics[musicInd].current.pause()
				musics[ind].current.currentTime = 0
				musics[ind].current.play()
				setMusicInd(ind)
				setIsPlaying(true)
		}
	}

	return { musics, changeMusic, togglePlaying, isPlaying, musicInd }
}

export default useMusics
