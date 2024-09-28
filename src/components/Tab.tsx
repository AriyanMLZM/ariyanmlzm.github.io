import React from 'react'
import { Html } from '@react-three/drei'

const Tab = ({ props }) => {
  return (
    <Html>
      <button
        type="button"
        onClick={() => props.handleClick(props.ind)}
        className="md:hover:text-white text-black text-[20px] font-mono"
      >
        {props.text}
      </button>
    </Html>
  )
}

export default Tab
