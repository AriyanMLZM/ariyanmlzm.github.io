import React, { useState } from 'react'
import { Html } from '@react-three/drei'

import { List, Project } from '../containers'
import { useSounds } from '../hooks'

const Projects = ({ handleClose }) => {
  const [index, setIndex] = useState(-1)
  const { clickS } = useSounds()

  const handleClick = (ind) => {
    if (clickS.current.paused) clickS.current.play()
    setIndex(ind)
  }

  return (
    <Html
      transform
      occlude="blending"
      rotation={[0, Math.PI, 0]}
      position={[-0.7, 5.05, -12.021]}
      scale={0.2}
    >
      <main className="flex flex-col items-center w-[870px] h-[785px] bg-bgColor select-none">
        {index === -1 && <List func={handleClick} func2={handleClose} />}
        {index !== -1 && <Project index={index} func={handleClick} />}
      </main>
    </Html>
  )
}

export default Projects
