import React from 'react'

import { about } from '../constants'

const About = () => {
  return (
    <>
      <div className="w-[25%] flex flex-col text-primary text-[20px] md:text-[25px] items-end justify-between pt-4 pb-4">
        <h2 className="text-right">{'<p>'}</h2>
        <h2 className="text-rignt">{'</p>'}</h2>
      </div>
      <div className="w-[50%] flex items-center pl-4 text-[28px] md:text-[35px] text-white">
        <p className="text-justify">{about.info}</p>
      </div>
    </>
  )
}

export default About
