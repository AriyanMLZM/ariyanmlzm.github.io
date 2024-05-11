import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

import modelGltf from '../assets/3d/build2.glb'
import { screens } from '../constants'

const Model2 = ({ funcs, ind, ghosted }) => {
  const { nodes, materials, animations } = useGLTF(modelGltf)
  const group = useRef()
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    if (!ghosted) {
      actions['neom_anthenaAction'].play()
      actions['bcubeAction'].play()
      actions['pcubeAction'].play()
      actions['bfanAction'].play()
      actions['pfanAction'].play()
      actions['holo2Action'].play()
    } else {
      actions['neom_anthenaAction'].stop()
      actions['bcubeAction'].stop()
      actions['pcubeAction'].stop()
      actions['bfanAction'].stop()
      actions['pfanAction'].stop()
      actions['holo2Action'].stop()
    }
  }, [ghosted])

  return (
    <group ref={group} dispose={null}>
      <group name="Scene" onClick={(ev) => ev.stopPropagation()}>
        <mesh
          name="arcade_neon"
          onClick={() => funcs.changeScene(3)}
          geometry={nodes.arcade_neon.geometry}
          material={materials.light_purple}
        />
        <mesh
          name="arcade_screen"
          onClick={() => funcs.changeScene(3)}
          geometry={nodes.arcade_screen.geometry}
          material={ghosted ? materials['screen_gp'] : materials['screenm.005']}
        />
        <mesh
          name="bcube"
          geometry={nodes.bcube.geometry}
          material={materials['light_bcube.005']}
          position={[-9.8, 13.797, 7.029]}
          rotation={[0, -1.571, 0]}
          scale={[0.301, 1.262, 5.648]}
        />
        <group
          name="bfan"
          position={[-0.5, 12.137, -9.429]}
          rotation={[0, 0, 0.106]}
          scale={[0.029, 0.005, 0.012]}
        >
          <mesh
            name="Cube019"
            geometry={nodes.Cube019.geometry}
            material={materials['light_bfan.005']}
          />
          <mesh
            name="Cube019_1"
            geometry={nodes.Cube019_1.geometry}
            material={materials['fan2_gray.005']}
          />
        </group>
        <mesh
          name="blener"
          geometry={nodes.blener.geometry}
          material={materials.light_blue}
        />
        <mesh
          name="cpp"
          geometry={nodes.cpp.geometry}
          material={materials.light_blue}
        />
        <mesh
          name="Electric_Guitar_Cube001"
          onClick={funcs.riff}
          geometry={nodes.Electric_Guitar_Cube001.geometry}
          material={materials.light_purple}
        />
        <group name="frame21" onClick={() => funcs.changeScene(1)}>
          <mesh
            name="Cube003"
            geometry={nodes.Cube003.geometry}
            material={materials['light_sign_green.005']}
          />
          <mesh
            name="Cube003_1"
            geometry={nodes.Cube003_1.geometry}
            material={materials['light_text.001']}
          />
        </group>
        <group
          name="frame31"
          onClick={(ev) => {
            ev.stopPropagation()
            funcs.changeScene(2)
          }}
        >
          <mesh
            name="Cube004"
            geometry={nodes.Cube004.geometry}
            material={materials['light_sign_pink.005']}
          />
          <mesh
            name="Cube004_1"
            geometry={nodes.Cube004_1.geometry}
            material={materials['light_text.001']}
          />
        </group>
        <group name="frame41" onClick={() => funcs.changeScene(4)}>
          <mesh
            name="Cube020"
            geometry={nodes.Cube020.geometry}
            material={materials['light_sign_blue.005']}
          />
          <mesh
            name="Cube020_1"
            geometry={nodes.Cube020_1.geometry}
            material={materials['light_text.001']}
          />
        </group>
        <group name="frame51" onClick={() => funcs.changeScene(3)}>
          <mesh
            name="Cube034"
            geometry={nodes.Cube034.geometry}
            material={materials['light_sign_orange.005']}
          />
          <mesh
            name="Cube034_1"
            geometry={nodes.Cube034_1.geometry}
            material={materials['light_text.001']}
          />
        </group>
        <mesh
          name="holo2"
          geometry={nodes.holo2.geometry}
          material={
            ghosted ? materials['light_purple'] : materials['light_holo']
          }
          position={[-0.49, 0, -0.3]}
        />
        <mesh
          name="left_btn"
          onClick={() => funcs.changeMusic(-1)}
          geometry={nodes.left_btn.geometry}
          material={materials.light_purple}
        />
        <mesh
          name="neom_anthena"
          geometry={nodes.neom_anthena.geometry}
          material={
            ghosted ? materials['light_purple'] : materials['light_blue']
          }
          position={[2.876, 14.748, -7.175]}
          scale={[0.483, 0.137, 0.483]}
        />
        <mesh
          name="neon_power"
          geometry={nodes.neon_power.geometry}
          material={
            ghosted ? materials['light_purple'] : materials['light_blue']
          }
        />
        <mesh
          name="neon_proj"
          onClick={funcs.holoClick}
          geometry={nodes.neon_proj.geometry}
          material={
            ghosted ? materials['light_purple'] : materials['light_blue']
          }
        />
        <mesh
          name="neon_tv"
          onClick={() => funcs.changeScene(1)}
          geometry={nodes.neon_tv.geometry}
          material={materials['light_blue.001']}
        />
        <mesh
          name="neon_vending"
          onClick={() => funcs.changeScene(2)}
          geometry={nodes.neon_vending.geometry}
          material={materials.light_blue}
        />
        <mesh
          name="neon_welcome"
          geometry={nodes.neon_welcome.geometry}
          material={materials.light_blue}
        />
        <mesh
          name="pcube"
          geometry={nodes.pcube.geometry}
          material={materials['light_pcube.005']}
          position={[-8.998, 13.883, 7.029]}
          rotation={[0, -1.571, 0]}
          scale={[0.301, 1.262, 5.648]}
        />
        <group
          name="pfan"
          position={[-8.688, 12.137, -0.529]}
          rotation={[-0.106, 0, 0]}
          scale={[0.029, 0.005, 0.012]}
        >
          <mesh
            name="Cube024"
            geometry={nodes.Cube024.geometry}
            material={materials.light_purple}
          />
          <mesh
            name="Cube024_1"
            geometry={nodes.Cube024_1.geometry}
            material={materials['fan2_gray.005']}
          />
        </group>
        <mesh
          name="pic_sign_screen"
          onClick={() => funcs.changePic(1)}
          geometry={nodes.pic_sign_screen.geometry}
          material={materials[screens.s1[ind.pic1]]}
        />
        <mesh
          name="pic_sign_screen1"
          onClick={() => funcs.changePic(2)}
          geometry={nodes.pic_sign_screen1.geometry}
          material={materials[screens.s2[ind.pic2]]}
        />
        <mesh
          name="pic_sign_screen2"
          onClick={() => funcs.changePic(3)}
          geometry={nodes.pic_sign_screen2.geometry}
          material={materials[screens.s3[ind.pic3]]}
        />
        <mesh
          name="pic_sign_screen3"
          onClick={() => funcs.changePic(4)}
          geometry={nodes.pic_sign_screen3.geometry}
          material={materials[screens.s4[ind.pic4]]}
        />
        <mesh
          name="python"
          geometry={nodes.python.geometry}
          material={materials.light_blue}
        />
        <mesh
          name="react"
          geometry={nodes.react.geometry}
          material={materials.light_blue}
        />
        <mesh
          name="right_btn"
          onClick={() => funcs.changeMusic(1)}
          geometry={nodes.right_btn.geometry}
          material={materials.light_purple}
        />
        <mesh
          name="screen_bill"
          geometry={nodes.screen_bill.geometry}
          material={ghosted ? materials['screen_gp2'] : materials['screen_pic']}
        />
        <mesh
          name="sign_ligh_1"
          geometry={nodes.sign_ligh_1.geometry}
          material={materials['light_bulb.005']}
        />
        <mesh
          name="sign_light_2"
          geometry={nodes.sign_light_2.geometry}
          material={materials['light_bulb.005']}
        />
        <mesh
          name="stop_btn"
          onClick={() => funcs.changeMusic(0)}
          geometry={nodes.stop_btn.geometry}
          material={materials.light_purple}
        />
        <mesh
          name="tv_screen"
          onClick={() => funcs.changeScene(1)}
          geometry={nodes.tv_screen.geometry}
          material={ghosted ? materials['screen_gb'] : materials['screena.005']}
        />
        <mesh
          name="vending_screen"
          onClick={() => funcs.changeScene(2)}
          geometry={nodes.vending_screen.geometry}
          material={ghosted ? materials['screen21'] : materials['screenp.005']}
        />
        <mesh
          name="titles"
          geometry={nodes.titles.geometry}
          material={materials['light_text.005']}
        />
        <mesh
          name="drag_text"
          geometry={nodes.drag_text.geometry}
          material={materials['shader_white.006']}
        />
        <mesh
          name="kl"
          geometry={nodes.kl.geometry}
          material={materials['light_ktchen.006']}
        />
        <mesh
          name="kl001"
          geometry={nodes.kl001.geometry}
          material={materials['light_ktchen.006']}
        />
        <mesh
          name="kl002"
          geometry={nodes.kl002.geometry}
          material={materials['light_ktchen.006']}
        />
        <mesh
          name="kl003"
          geometry={nodes.kl003.geometry}
          material={materials['light_ktchen.006']}
        />
        <mesh
          name="kl004"
          geometry={nodes.kl004.geometry}
          material={materials['light_ktchen.006']}
        />
        <group name="neon_shows_left" onClick={() => funcs.changeScene(2)}>
          <mesh
            name="mesh1848869498002"
            geometry={nodes.mesh1848869498002.geometry}
            material={materials['mrrobot.005']}
          />
          <mesh
            name="mesh1848869498002_1"
            geometry={nodes.mesh1848869498002_1.geometry}
            material={materials['mindhunter.005']}
          />
          <mesh
            name="mesh1848869498002_2"
            geometry={nodes.mesh1848869498002_2.geometry}
            material={materials['severance.005']}
          />
        </group>
        <group name="neon_shows_right" onClick={() => funcs.changeScene(2)}>
          <mesh
            name="mesh1848869498003"
            geometry={nodes.mesh1848869498003.geometry}
            material={materials['blackmirror.005']}
          />
          <mesh
            name="mesh1848869498003_1"
            geometry={nodes.mesh1848869498003_1.geometry}
            material={materials['theoffice.005']}
          />
          <mesh
            name="mesh1848869498003_2"
            geometry={nodes.mesh1848869498003_2.geometry}
            material={materials['truedet.005']}
          />
        </group>
        <mesh
          name="burger_sign"
          geometry={nodes.burger_sign.geometry}
          material={materials['light_burger_red.005']}
        />
        <mesh
          name="name_sign"
          geometry={nodes.name_sign.geometry}
          material={materials['light_name_sign.005']}
        />
        <group name="neon_burger">
          <mesh
            name="bread001"
            geometry={nodes.bread001.geometry}
            material={materials['light_bread_orange.005']}
          />
          <mesh
            name="bread001_1"
            geometry={nodes.bread001_1.geometry}
            material={materials['light_bread_middle.005']}
          />
        </group>
      </group>
    </group>
  )
}

export default Model2
