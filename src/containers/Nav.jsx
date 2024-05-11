import React from 'react'

import { Tab } from '../components'

const Nav = ({ props }) => {
  const handleClick = (ind) => {
    props.chnageScene(ind)
  }

  return (
    <>
      <Tab props={{ text: 'About', ind: 1, handleClick }} />
    </>
  )
}

export default Nav
