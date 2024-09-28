import { useRef } from 'react'

import {
  click,
  camera,
  power,
  ding,
  dog,
  rain,
  guitar,
  holo,
  p_back,
} from '../assets/sounds'

const useSounds = () => {
  const clickS = useRef(new Audio(click))
  const cameraS = useRef(new Audio(camera))
  const powerS = useRef(new Audio(power))
  const dingS = useRef(new Audio(ding))
  const dogS = useRef(new Audio(dog))
  const guitarS = useRef(new Audio(guitar))
  const rainS = useRef(new Audio(rain))
  const pbS = useRef(new Audio(p_back))
  const holoS = useRef(new Audio(holo))

  rainS.current.loop = true

  return { clickS, cameraS, powerS, dogS, dingS, guitarS, rainS, holoS, pbS }
}

export default useSounds
