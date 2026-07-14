import { MutableRefObject, SetStateAction } from 'react'

export const changeMusic = (
	action: number,
	ind: number = -1,
	timeout: boolean = false,
	clickS: MutableRefObject<HTMLAudioElement>,
	scene: number,
	playing: boolean,
	musics: MutableRefObject<HTMLAudioElement>[],
	musicInd: number,
	setMusicInd: (value: SetStateAction<number>) => void,
	setPlaying: (value: SetStateAction<boolean>) => void,
	toggleChangeScene: (snum: number, gif?: boolean) => void,
) => {
	if (clickS.current.paused) clickS.current.play()
	if (scene === 3 || timeout) {
		switch (action) {
			case -1:
				musics[musicInd].current.pause()
				if (musicInd === 0) setMusicInd(musics.length - 1)
				else setMusicInd(musicInd - 1)
				break
			case 0:
				if (playing) musics[musicInd].current.pause()
				else {
					musics[musicInd].current.play()
				}
				setPlaying(!playing)
				break
			case 1:
				musics[musicInd].current.pause()
				if (musicInd === musics.length - 1) setMusicInd(0)
				else setMusicInd(musicInd + 1)
				break
			case 2:
				musics[musicInd].current.pause()
				setMusicInd(ind)
		}
	} else if (scene === 0) {
		toggleChangeScene(3)
	}
}
