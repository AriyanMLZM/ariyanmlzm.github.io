import React from 'react'

import { skills } from '../assets/imgs'

const Skills = () => {
  return (
    <>
      <div className="w-[25%] flex flex-col text-primary text-[20px] md:text-[25px] items-end justify-between pt-4 pb-4">
        <h2 className="text-right">{'<img>'}</h2>
        <h2 className="text-rignt">{'</img>'}</h2>
      </div>
      <div className=" relative w-[50%] flex justify-center items-center">
        <div className=" absolute z-0 w-[80%] md:h-[577px] h-[345px] rounded-[20px] bg-gray-700 animate-pulse" />
        <img
          src={skills}
          alt="skills"
          draggable={false}
          className=" absolute z-1 select-none pointer-events-none w-full"
          loading='lazy'
        />
      </div>
    </>
  )
}

export default Skills
