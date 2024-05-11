import React, { useEffect, useRef, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

import modelGltf from '../assets/3d/dog.glb'
import { useSounds } from '../hooks'

const Dog = () => {
  const { scene, animations } = useGLTF(modelGltf)
  const modelRef = useRef()
  const { actions } = useAnimations(animations, modelRef)
  const [act, setAct] = useState(0)

  const { dogS } = useSounds()

  useEffect(() => {
    if (act === 0) {
      actions['0|rollover_0'].stop()
      actions['0|sitting_0'].play()
      actions['0|shake_0'].play()
    } else {
      actions['0|sitting_0'].stop()
      actions['0|shake_0'].stop()
      actions['0|rollover_0'].play()
    }
  }, [act])

  const changeAct = () => {
    if (dogS.current.paused) dogS.current.play()
    if (act !== 1) {
      setAct(1)
      setTimeout(() => {
        setAct(0)
      }, 8000)
    }
  }

  return (
    <mesh
      onClick={(ev) => {
        ev.stopPropagation()
        changeAct()
      }}
      scale={[0.04, 0.04, 0.04]}
      position={[-10, 0.2, 10]}
      rotation={[0, -0.5, 0]}
      ref={modelRef}
    >
      <primitive object={scene} />
    </mesh>
  )
}

export default Dog
