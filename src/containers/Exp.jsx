import React from 'react'
import { v4 as uuid } from 'uuid'

import { about } from '../constants'

const Exp = () => {
  return (
    <>
      <div className="w-[25%] flex flex-col text-primary text-[20px] md:text-[25px] items-end justify-between pt-4 pb-4">
        <h2 className="text-right">{'<p>'}</h2>
        <h2 className="text-rignt">{'</p>'}</h2>
      </div>
      <div className="w-[50%] flex flex-col justify-center pl-4 text-[28px] md:text-[35px]">
        {about.exp.map((item) => (
          <div className="mb-6" key={uuid()}>
            <h1 className="text-white font-bold" key={uuid()}>
              {item.title}
            </h1>
            <h2 className="text-gray-500" key={uuid()}>
              {item.text}
            </h2>
          </div>
        ))}
      </div>
    </>
  )
}

export default Exp
