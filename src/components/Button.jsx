import React from 'react'

const Button = ({ children, active = false, tab = null, func }) => {
  return (
    <button
      type="button"
      className={`${!active && 'md:hover:text-white'} ${
        active && 'text-primary'
      }`}
      onClick={() => func(tab)}
    >
      {children}
    </button>
  )
}

export default Button
