import { useRef } from 'react'

import {
  music1,
  music2,
  music3,
  music4,
  music5,
  music6,
} from '../assets/musics'

const useMusics = () => {
  const m1 = useRef(new Audio(music1))
  const m2 = useRef(new Audio(music2))
  const m3 = useRef(new Audio(music3))
  const m4 = useRef(new Audio(music4))
  const m5 = useRef(new Audio(music5))
  const m6 = useRef(new Audio(music6))

  const musics = [m1, m2, m3, m4, m5, m6]

  musics.map((item) => {
    item.current.volume = 0.9
    item.current.loop = true
  })

  return musics
}

export default useMusics
