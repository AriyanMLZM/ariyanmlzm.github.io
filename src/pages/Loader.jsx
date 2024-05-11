import React from 'react'
import { Html, useProgress } from '@react-three/drei'

const Loader = () => {
  const { progress } = useProgress()
  return (
    <Html center className='h-screen'>
      <div className={`flex flex-col items-center justify-center w-screen h-[90%] overflow-hidden select-none`}>
        <div className="h-[30%] flex flex-col justify-center items-center">
          <h1 className="text-primary md:text-[50px] text-[30px] font-mono">
            Hi, I'm Ariyan!
          </h1>
          <h1 className="text-white md:text-[40px] text-[22px] font-mono">
            Welcome to my portfolio
          </h1>
        </div>
        <div className="h-[30%] flex flex-col justify-center items-center">
          <div className="flex justify-center items-center md:w-[90px] md:h-[90px] w-[70px] h-[70px] rounded-full border-t-primary border-t-4 animate-spin">
            <div className="flex justify-center items-center md:w-[65px] md:h-[65px] w-[45px] h-[45px] border-b-white border-b-4 rounded-full"></div>
          </div>
          <h1 className="text-white md:text-[25px] text-[18px] font-mono mt-5">
            {progress.toFixed(1)} %
          </h1>
        </div>
        <div className="h-[20%] flex justify-center text-white md:text-[30px] text-[20px] font-mono">
          <h1>
            Hang on, loading 3d model...
          </h1>
        </div>
      </div>
    </Html>
  )
}

export default Loader
