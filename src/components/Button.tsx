import React, { ReactNode } from 'react'

const Button = ({ children, active = false, tab, func }: {
  children: ReactNode; active?: boolean, tab?: number, func: any
}) => {
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
