import React from 'react'

import { Html } from '@react-three/drei'

const Start = ({ func }) => {
  return (
    <Html center position={[0, 50, 0]}>
      <div className="bg-black font-light w-screen h-screen flex justify-center items-center">
        <button
          type="button"
          onClick={func}
          className="hover:text-black font-mono hover:bg-primary border-[2px] rounded-[20px] border-primary text-primary md:w-[200px] w-[150px] md:text-[50px] text-[40px] flex items-center justify-center"
        >
          Start
        </button>
      </div>
    </Html>
  )
}

export default Start
