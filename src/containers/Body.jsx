import React from 'react'

import { About, Skills, Exp } from './'

const Body = ({ tab }) => {
  return (
    <>
      {tab === 1 && <About />}
      {tab === 2 && <Skills />}
      {tab === 3 && <Exp />}
    </>
  )
}

export default Body
