import React, { useState } from 'react'
import { Html } from '@react-three/drei'

import { Button } from '../components'
import { Header, Body, Footer } from '../containers'
import { close } from '../assets/icons'
import { about } from '../constants'
import { useSounds } from '../hooks'

const About = ({ handleClose }) => {
  const [tab, setTab] = useState(1)
  const { clickS } = useSounds()

  const handleTabs = (num) => {
    if (clickS.current.paused) clickS.current.play()
    setTab(num)
  }

  return (
    <Html
      transform
      occlude="blending"
      rotation={[0, 0, 0]}
      position={[-0.357182, 17.9479, 7.101]}
      scale={0.2}
    >
      <main className="flex flex-col items-center w-[1800px] h-[950px] bg-bgColor select-none">
        <nav className="flex w-[30%] md:w-[50%] gap-20 justify-between h-[10%] md:text-[40px] text-[30px] text-gray-500">
          <Button active={tab === 1 && true} func={handleTabs} tab={1}>
            About
          </Button>
          <Button active={tab === 2 && true} func={handleTabs} tab={2}>
            Skills
          </Button>
          <Button active={tab === 3 && true} func={handleTabs} tab={3}>
            Exp
          </Button>
          <Button func={handleClose}>
            <img className="md:w-[40px] w-[35px]" src={close} alt="close" />
          </Button>
        </nav>
        <header className="w-[60%] md:w-full h-[15%] flex flex-row">
          <Header
            text={
              tab === 1 ? about.header : tab === 2 ? 'Skills' : 'Experience'
            }
          />
        </header>
        <section className="w-[60%] md:w-full h-[55%] flex flex-row">
          <Body tab={tab} />
        </section>
        <section className="w-[60%] md:w-full h-[20%] flex flex-row pb-4">
          <Footer />
        </section>
      </main>
    </Html>
  )
}

export default About
