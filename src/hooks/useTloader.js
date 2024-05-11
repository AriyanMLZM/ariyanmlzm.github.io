import { useTexture } from '@react-three/drei'
import * as Three from 'three'

const useTloader = (fileName) => {
  const tex = useTexture(`./textures/${fileName}`)
  tex.flipY = false
  // tex.encoding = Three.sRGBEncoding
  const texm = new Three.MeshStandardMaterial({
    map: tex,
  })

  return texm
}

export default useTloader
