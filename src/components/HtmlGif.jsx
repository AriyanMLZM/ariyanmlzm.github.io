import React from 'react'
import { Html } from '@react-three/drei'

const HtmlGif = ({
  rot,
  pos,
  width,
  height,
  fileName,
  scale = 0.2,
  changeScene = () => {},
  snum = null,
}) => {
  return (
    <Html
      transform
      occlude="blending"
      rotation={rot}
      position={pos}
      scale={scale}
    >
      <div
        onClick={() => changeScene(snum, true)}
        className="flex justify-center items-center"
        style={{ width: width, height: height }}
      >
        <video
          className="pointer-events-none select-none w-full"
          draggable={false}
          autoPlay
          loop
          src={`./gifs/${fileName}`}
          controlsList="nodownlaod"
        ></video>
      </div>
    </Html>
  )
}

export default HtmlGif
