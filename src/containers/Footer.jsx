import React from 'react'

import { about } from '../constants'

import { github, gmail, phone } from '../assets/icons'

const Footer = () => {
  return (
    <>
      <div className="w-[25%] flex flex-col text-orange-600 text-[20px] md:text-[25px] items-end justify-between pt-4 pb-4">
        <h2 className="text-right">{'<footer>'}</h2>
        <h2 className="text-rignt">{'</footer>'}</h2>
      </div>
      <div className="w-[50%] flex gap-20 items-center justify-center pl-4">
        <a href={about.github} target="_blank" rel="noopener noreferrer">
          <img className="md:w-[80px] w-[60px]" src={github} alt="github" />
        </a>
        <a
          href={`mailto:${about.gmail}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="md:w-[80px] w-[60px]" src={gmail} alt="gmail" />
        </a>
        <a
          href={`tel:${about.phone}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="md:w-[80px] w-[60px]" src={phone} alt="phone" />
        </a>
      </div>
    </>
  )
}

export default Footer
