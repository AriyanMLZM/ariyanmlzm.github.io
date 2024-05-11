import React from 'react'

const Header = ({ text }) => {
  return (
    <>
      <div className="w-[25%] flex flex-col text-yellow-400 md:text-[25px] text-[20px] items-end justify-between pt-4 pb-4">
        <h2 className="text-right">{'<h1>'}</h2>
        <h2 className="text-rignt">{'</h1>'}</h2>
      </div>
      <div className="flex md:text-[50px] text-[35px] w-[50%] pl-4 h-full items-center font-bold">
        <h1 className="text-white">{text}</h1>
      </div>
    </>
  )
}

export default Header
