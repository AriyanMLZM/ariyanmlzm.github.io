import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  OrbitControls,
  PerspectiveCamera,
  PerformanceMonitor,
} from '@react-three/drei'
import { gsap } from 'gsap'
import round from 'lodash/round'

import { Dog, Model1, Model2, Rain } from '../models'
import { Gifs } from '../containers'
import { Aboutme, Projects, Start, Loader, Musics } from './'
import { useMusics, useSounds } from '../hooks'

const Home = () => {
  const [start, setStart] = useState(false)
  const [musicInd, setMusicInd] = useState(0)
  const [playing, setPlaying] = useState(true)
  const [pic1, setPic1] = useState(0)
  const [pic2, setPic2] = useState(0)
  const [pic3, setPic3] = useState(0)
  const [pic4, setPic4] = useState(0)
  const [ghosted, setGhosted] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [scene, setScene] = useState(0)
  const [cpx, setCpx] = useState(0)
  const [cpy, setCpy] = useState(0)
  const [cpz, setCpz] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [show, setShow] = useState(false)
  const [dpr, setDpr] = useState(1)
  const [lowfps, setLowfps] = useState(false)

  const controlRef = useRef()
  const cameraRef = useRef()
  const pl = useRef()
  const al = useRef()

  const musics = useMusics()
  const { clickS, guitarS, dingS, rainS, powerS, pbS, holoS, cameraS } =
    useSounds()

  const timeline = gsap.timeline()

  const handleStart = () => {
    setShow(true)
    controlRef.current.target.x = 0
    controlRef.current.target.y = 8
    controlRef.current.target.z = 0
    cameraS.current.play()
    setIsAnimating(true)
    timeline.fromTo(
      cameraRef.current.position,
      {
        x: isMobile ? -71.61 : -66.68,
        y: isMobile ? 55.52 : 40.08,
        z: isMobile ? 83.73 : 35.45,
      },
      {
        x: isMobile ? 76.94 : 70.98,
        y: isMobile ? 7.64 : 17.02,
        z: isMobile ? -20.33 : 40.17,
        duration: 4,
        onComplete: () => {
          controlRef.current.enableZoom = true
          controlRef.current.enableRotate = true
          controlRef.current.maxPolarAngle = Math.PI / 1.94
          controlRef.current.minPolarAngle = Math.PI / 4
          musics[0].current.play()
          dingS.current.play()
          setStart(true)
          setIsAnimating(false)
        },
      },
      0
    )
  }

  const changeMusic = (action, ind = -1, timeout = false) => {
    if (clickS.current.paused) clickS.current.play()
    if (scene === 3 || timeout) {
      switch (action) {
        case -1:
          musics[musicInd].current.pause()
          if (musicInd === 0) setMusicInd(musics.length - 1)
          else setMusicInd(musicInd - 1)
          break
        case 0:
          if (playing) musics[musicInd].current.pause()
          else {
            musics[musicInd].current.play()
          }
          setPlaying(!playing)
          break
        case 1:
          musics[musicInd].current.pause()
          if (musicInd === musics.length - 1) setMusicInd(0)
          else setMusicInd(musicInd + 1)
          break
        case 2:
          musics[musicInd].current.pause()
          setMusicInd(ind)
      }
    } else if (scene === 0) {
      changeScene(3)
    }
  }

  useEffect(() => {
    if (start) {
      musics[musicInd].current.currentTime = 0
      musics[musicInd].current.play()
      if (!playing) setPlaying(true)
    }
  }, [musicInd])

  const changePic = (pnum) => {
    if (!isAnimating) {
      switch (pnum) {
        case 1:
          if (pic1 === 3) setPic1(0)
          else setPic1(pic1 + 1)
          break
        case 2:
          if (pic2 === 3) setPic2(0)
          else setPic2(pic2 + 1)
          break
        case 3:
          if (pic3 === 3) setPic3(0)
          else setPic3(pic3 + 1)
          break
        case 4:
          if (pic4 === 3) setPic4(0)
          else setPic4(pic4 + 1)
          break
      }
    }
  }

  const riff = () => {
    if (guitarS.current.paused) guitarS.current.play()
  }
  const holoClick = () => {
    if (holoS.current.paused) holoS.current.play()
  }

  const ghosting = () => {
    setIsAnimating(true)
    if (powerS.current.paused) powerS.current.play()
    if (playing) {
      musics[musicInd].current.pause()
      setPlaying(false)
    }
    gsap.to(pl.current, {
      intensity: 0,
      duration: 1,
      ease: 'power2.in',
      onComplete: () => setIsAnimating(false),
    })
    gsap.to(al.current, {
      intensity: 0.25,
      duration: 1,
      ease: 'power2.in',
      onComplete: () => setIsAnimating(false),
    })
    rainS.current.currentTime = 0
    rainS.current.play()
    setGhosted(true)
  }

  const unghosting = () => {
    setIsAnimating(true)
    if (pbS.current.paused) pbS.current.play()
    gsap.to(pl.current, {
      intensity: 40,
      duration: 4,
    })
    gsap.to(al.current, {
      intensity: 1,
      duration: 4,
      onComplete: () => setIsAnimating(false),
    })
    rainS.current.pause()
    setGhosted(false)
  }

  const changeScene = (snum, gif = false) => {
    if (scene === 0 && !isAnimating) {
      if (gif) {
        switch (snum) {
          case 1:
            if (cameraRef.current.position.z < 0) return
            break
          case 2:
            if (cameraRef.current.position.z > 0) return
            break
          case 3:
            if (cameraRef.current.position.x > 0) return
            break
        }
      }
      if (clickS.current.paused) clickS.current.play()
      setIsAnimating(true)
      setCpx(cameraRef.current.position.x)
      setCpy(cameraRef.current.position.y)
      setCpz(cameraRef.current.position.z)
      if (cameraS.current.paused) cameraS.current.play()
      controlRef.current.enableRotate = false
      controlRef.current.enableZoom = false
      switch (snum) {
        case 1:
          timeline
            .to(
              cameraRef.current.position,
              {
                x: -0.4,
                y: 17.98,
                z: 60,
                duration: 1,
              },
              0
            )
            .to(
              cameraRef.current.position,
              {
                x: -0.4,
                y: 17.98,
                z: 25,
                delay: 0.5,
                duration: 1,
                onComplete: () => {
                  controlRef.current.maxDistance = 50
                  controlRef.current.minDistance = 15
                  controlRef.current.enableZoom = true
                  setScene(snum)
                  setIsAnimating(false)
                  cameraS.current.pause()
                  cameraS.current.currentTime = 0
                },
              },
              1
            )
            .to(
              controlRef.current.target,
              {
                x: -0.4,
                y: 17.98,
                z: 0,
                duration: 2,
              },
              0
            )
          break
        case 2:
          timeline
            .to(
              cameraRef.current.position,
              {
                x: -0.7,
                y: 5.05,
                z: -60,
                duration: 1,
              },
              0
            )
            .to(
              cameraRef.current.position,
              {
                x: -0.7,
                y: 5.05,
                z: -25,
                duration: 1,
                delay: 0.5,
                onComplete: () => {
                  controlRef.current.maxDistance = 40
                  controlRef.current.minDistance = 15
                  controlRef.current.enableZoom = true
                  setScene(snum)
                  setIsAnimating(false)
                  cameraS.current.pause()
                  cameraS.current.currentTime = 0
                },
              },
              1
            )
            .to(
              controlRef.current.target,
              {
                x: -0.7,
                y: 5.05,
                z: 0,
                duration: 2,
              },
              0
            )
          break
        case 3:
          timeline
            .to(
              cameraRef.current.position,
              {
                x: -60,
                y: 4.71,
                z: -0.44,
                duration: 1,
              },
              0
            )
            .to(
              cameraRef.current.position,
              {
                x: -25,
                y: 4.71,
                z: -0.44,
                duration: 1,
                delay: 0.5,
                onComplete: () => {
                  controlRef.current.maxDistance = 40
                  controlRef.current.minDistance = 15
                  controlRef.current.enableZoom = true
                  setScene(snum)
                  setIsAnimating(false)
                  cameraS.current.pause()
                  cameraS.current.currentTime = 0
                },
              },
              1
            )
            .to(
              controlRef.current.target,
              {
                x: 0,
                y: 4.71,
                z: -0.44,
                duration: 2,
              },
              0
            )
          break
        case 4:
          timeline.to(
            cameraRef.current.position,
            {
              x: isMobile ? 94.82 : 60,
              y: isMobile ? 68.89 : 110,
              z: isMobile ? 41.21 : 0,
              duration: 1,
              onComplete: () => {
                controlRef.current.enableZoom = true
                controlRef.current.enableRotate = true
                setIsAnimating(false)
                cameraS.current.pause()
                cameraS.current.currentTime = 0
              },
            },
            0
          )
          break
      }
    }
  }

  const handleClose = () => {
    setIsAnimating(true)
    setScene(0)
    if (clickS.current.paused) clickS.current.play()
    if (cameraS.current.paused) cameraS.current.play()
    controlRef.current.enableZoom = false
    controlRef.current.maxDistance = 120
    controlRef.current.minDistance = 30
    gsap.to(controlRef.current.target, {
      x: 0,
      y: 8,
      z: 0,
      duration: 2,
    })
    gsap.to(cameraRef.current.position, {
      x: cpx,
      y: cpy,
      z: cpz,
      duration: 2,
      onComplete: () => {
        setIsAnimating(false)
        controlRef.current.enableRotate = true
        controlRef.current.enableZoom = true
        cameraS.current.pause()
        cameraS.current.currentTime = 0
      },
    })
  }

  useEffect(() => {
    if (pic1 === 3 && pic2 === 3 && pic3 === 3 && pic4 === 3) ghosting()
    else {
      if (ghosted) unghosting()
    }
  }, [pic1, pic2, pic3, pic4])

  useEffect(() => {
    window.innerWidth < 768 ? setIsMobile(true) : setIsMobile(false)
  }, [])

  return (
    <Canvas
      className="w-full h-full bg-transparent"
      dpr={dpr}
      gl={{
        powerPreference: 'high-performance',
        antialias: lowfps ? false : true,
        stencil: lowfps ? false : true,
      }}
    >
      <PerformanceMonitor
        onChange={({ factor }) => {
          var tempDpr = round(0.5 + 1.5 * factor, 1)
          if (tempDpr <= 1.2) setLowfps(true)
          else setLowfps(false)
          if (tempDpr > 1.5) setDpr(1.5)
          else setDpr(tempDpr)
        }}
      />
      <Suspense fallback={<Loader />}>
        {!show && <Start func={handleStart} />}
        <PerspectiveCamera
          ref={cameraRef}
          position={[0, 40, 0]}
          near={0.1}
          far={1000}
          fov={25}
          makeDefault
        />
        <pointLight color={'#fff'} position={[-11.5, 6, 12]} intensity={20} />
        <pointLight
          color={'#fff'}
          position={[0, 6, 0]}
          intensity={40}
          ref={pl}
        />
        <ambientLight intensity={1} ref={al} />
        <Model1
          funcs={{
            changeMusic,
            riff,
            changePic,
            holoClick,
            changeScene,
          }}
          ghosted={ghosted}
        />
        <Model2
          funcs={{
            changeMusic,
            riff,
            changePic,
            holoClick,
            changeScene,
          }}
          ind={{ pic1, pic2, pic3, pic4 }}
          ghosted={ghosted}
        />
        {start && !ghosted && !isMobile && (
          <Gifs changeScene={changeScene} isMobile={isMobile} />
        )}
        {scene === 1 && <Aboutme handleClose={handleClose} />}
        {scene === 2 && <Projects handleClose={handleClose} />}
        {scene === 3 && (
          <Musics
            handleClose={handleClose}
            play={playing}
            ind={musicInd}
            changeMusic={changeMusic}
          />
        )}
        <OrbitControls
          maxDistance={120}
          minDistance={30}
          target={[0, 60, 0]}
          enablePan={false}
          enableZoom={false}
          enableRotate={false}
          ref={controlRef}
        />
      </Suspense>
      <Suspense fallback={null}>{start && <Dog />}</Suspense>
      <Suspense fallback={null}>{ghosted && <Rain />}</Suspense>
    </Canvas>
  )
}

export default Home
