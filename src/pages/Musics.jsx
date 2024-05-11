import React from 'react'
import { Html } from '@react-three/drei'
import { v4 as uuid } from 'uuid'

import { music, close } from '../assets/icons'
import { musics } from '../constants'
import { Music } from '../containers'

const Musics = ({ ind, play, handleClose, changeMusic }) => {
  return (
    <Html
      transform
      occlude="blending"
      position={[-10.781, 4.75, -0.45]}
      rotation={[0, -Math.PI / 2, 0]}
      scale={0.2}
    >
      <div className="bg-[#111] flex w-[458px] h-[575px] flex-col select-none">
        <section className="flex justify-around items-center">
          <img
            src={music}
            alt="music"
            width={'40px'}
            className="select-none pointer-events-none"
          />
          <h1 className="text-purple-500 font-bold text-[30px] font-mono w-[200px] text-center">
            {play ? 'Playing' : 'Paused'}
          </h1>
          <button
            onClick={handleClose}
            type="button"
            className="w-[80px] h-[80px] flex justify-center items-center"
          >
            <img width={'30px'} src={close} alt="" />
          </button>
        </section>
        <section className="flex flex-col items-center">
          {musics.map((music, index) => (
            <Music
              music={music}
              index={index}
              active={index === ind ? true : false}
              changeMusic={changeMusic}
              key={uuid()}
            />
          ))}
        </section>
      </div>
    </Html>
  )
}

export default Musics
