import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

import modelGltf from '../assets/3d/build.glb'
import { useTloader } from '../hooks'

const Model1 = ({ funcs, ghosted }) => {
  const { nodes, animations } = useGLTF(modelGltf)
  const group = useRef()
  const { actions } = useAnimations(animations, group)

  const texmw = useTloader('wallt.jpg')
  const texmf = useTloader('floort.jpg')
  const texm = useTloader('baked.jpg')
  const texm2 = useTloader('baked2.jpg')
  const texm3 = useTloader('baked3.jpg')
  const texm4 = useTloader('baked4.jpg')
  const texm5 = useTloader('baked5.jpg')
  const texm6 = useTloader('baked6.jpg')
  const texm7 = useTloader('baked7.jpg')
  const texm8 = useTloader('baked8.jpg')

  useEffect(() => {
    if (!ghosted) actions['anthenaAction'].play()
    else actions['anthenaAction'].stop()
  }, [ghosted])

  return (
    <group ref={group} dispose={null}>
      <group name="Scene" onClick={(ev) => ev.stopPropagation()}>
        <mesh name="floor" geometry={nodes.floor.geometry} material={texmf} />
        <mesh name="desk" geometry={nodes.desk.geometry} material={texm} />
        <mesh name="wall" geometry={nodes.wall.geometry} material={texmw} />
        <mesh
          name="billboard"
          geometry={nodes.billboard.geometry}
          material={texm8}
        />
        <group name="shade">
          <mesh
            name="Cylinder001"
            geometry={nodes.Cylinder001.geometry}
            material={texm6}
          />
          <mesh
            name="Cylinder001_1"
            geometry={nodes.Cylinder001_1.geometry}
            material={texm6}
          />
          <mesh
            name="Cylinder001_2"
            geometry={nodes.Cylinder001_2.geometry}
            material={texm6}
          />
        </group>
        <mesh name="kr" geometry={nodes.kr.geometry} material={texm7} />
        <mesh name="kr001" geometry={nodes.kr001.geometry} material={texm7} />
        <mesh name="kr002" geometry={nodes.kr002.geometry} material={texm7} />
        <mesh name="kr003" geometry={nodes.kr003.geometry} material={texm7} />
        <mesh name="kr004" geometry={nodes.kr004.geometry} material={texm7} />
        <mesh name="planks" geometry={nodes.planks.geometry} material={texm3} />
        <mesh
          name="name_sign_frame"
          geometry={nodes.name_sign_frame.geometry}
          material={texm2}
        ></mesh>
        <group name="bone">
          <mesh
            name="Cube001"
            geometry={nodes.Cube001.geometry}
            material={texm3}
          />
          <mesh
            name="Cube001_1"
            geometry={nodes.Cube001_1.geometry}
            material={texm3}
          />
        </group>
        <mesh
          name="frame2"
          onClick={() => funcs.changeScene(1)}
          geometry={nodes.frame2.geometry}
          material={texm3}
        />
        <mesh
          name="frame3"
          onClick={(ev) => {
            ev.stopPropagation()
            funcs.changeScene(2)
          }}
          geometry={nodes.frame3.geometry}
          material={texm3}
        />
        <mesh
          name="frame4"
          onClick={() => funcs.changeScene(4)}
          geometry={nodes.frame4.geometry}
          material={texm3}
        />
        <mesh
          name="frame5"
          onClick={() => funcs.changeScene(3)}
          geometry={nodes.frame5.geometry}
          material={texm3}
        />
        <group name="tv" onClick={() => funcs.changeScene(1)}>
          <mesh
            name="Cube007"
            geometry={nodes.Cube007.geometry}
            material={texm}
          />
          <mesh
            name="Cube007_1"
            geometry={nodes.Cube007_1.geometry}
            material={texm}
          />
        </group>
        <mesh
          name="hologram_proj"
          onClick={funcs.holoClick}
          geometry={nodes.hologram_proj.geometry}
          material={texm}
        />
        <mesh
          name="anthena"
          geometry={nodes.anthena.geometry}
          material={texm}
          position={[2.897, 14.782, -7.136]}
          scale={[0.483, 0.137, 0.483]}
        />
        <mesh
          name="anthena_holder"
          geometry={nodes.anthena_holder.geometry}
          material={texm}
        />
        <mesh name="power" geometry={nodes.power.geometry} material={texm2} />
        <mesh name="pline" geometry={nodes.pline.geometry} material={texm} />
        <mesh
          name="fan_frame"
          geometry={nodes.fan_frame.geometry}
          material={texm2}
        />
        <mesh
          name="fan_frame001"
          geometry={nodes.fan_frame001.geometry}
          material={texm2}
        />
        <group name="kitchenStove">
          <mesh
            name="kitchenStove_2"
            geometry={nodes.kitchenStove_2.geometry}
            material={texm7}
          />
          <mesh
            name="kitchenStove_2_1"
            geometry={nodes.kitchenStove_2_1.geometry}
            material={texm7}
          />
          <mesh
            name="kitchenStove_2_2"
            geometry={nodes.kitchenStove_2_2.geometry}
            material={texm7}
          />
          <mesh
            name="kitchenStove_2_3"
            geometry={nodes.kitchenStove_2_3.geometry}
            material={texm7}
          />
        </group>
        <group name="Environment_CanFridge">
          <mesh
            name="Environment_CanFridge_Environment_CanFridge_Atlas"
            geometry={
              nodes.Environment_CanFridge_Environment_CanFridge_Atlas.geometry
            }
            material={texm6}
          />
          <mesh
            name="Environment_CanFridge_Environment_CanFridge_Atlas_1"
            geometry={
              nodes.Environment_CanFridge_Environment_CanFridge_Atlas_1.geometry
            }
            material={texm6}
          />
          <mesh
            name="Environment_CanFridge_Environment_CanFridge_Atlas_2"
            geometry={
              nodes.Environment_CanFridge_Environment_CanFridge_Atlas_2.geometry
            }
            material={texm6}
          />
          <mesh
            name="Environment_CanFridge_Environment_CanFridge_Atlas_3"
            geometry={
              nodes.Environment_CanFridge_Environment_CanFridge_Atlas_3.geometry
            }
            material={texm6}
          />
          <mesh
            name="Environment_CanFridge_Environment_CanFridge_Atlas_4"
            geometry={
              nodes.Environment_CanFridge_Environment_CanFridge_Atlas_4.geometry
            }
            material={texm6}
          />
          <mesh
            name="Environment_CanFridge_Environment_CanFridge_Atlas_5"
            geometry={
              nodes.Environment_CanFridge_Environment_CanFridge_Atlas_5.geometry
            }
            material={texm6}
          />
        </group>
        <group name="flower_stand">
          <mesh
            name="mesh329520873"
            geometry={nodes.mesh329520873.geometry}
            material={texm4}
          />
          <mesh
            name="mesh329520873_1"
            geometry={nodes.mesh329520873_1.geometry}
            material={texm4}
          />
          <mesh
            name="mesh329520873_2"
            geometry={nodes.mesh329520873_2.geometry}
            material={texm4}
          />
          <mesh
            name="mesh329520873_3"
            geometry={nodes.mesh329520873_3.geometry}
            material={texm4}
          />
          <mesh
            name="mesh329520873_4"
            geometry={nodes.mesh329520873_4.geometry}
            material={texm4}
          />
          <mesh
            name="mesh329520873_5"
            geometry={nodes.mesh329520873_5.geometry}
            material={texm4}
          />
          <mesh
            name="mesh329520873_6"
            geometry={nodes.mesh329520873_6.geometry}
            material={texm4}
          />
          <mesh
            name="mesh329520873_7"
            geometry={nodes.mesh329520873_7.geometry}
            material={texm4}
          />
          <mesh
            name="mesh329520873_8"
            geometry={nodes.mesh329520873_8.geometry}
            material={texm4}
          />
          <mesh
            name="mesh329520873_9"
            geometry={nodes.mesh329520873_9.geometry}
            material={texm4}
          />
          <mesh
            name="mesh329520873_10"
            geometry={nodes.mesh329520873_10.geometry}
            material={texm4}
          />
          <mesh
            name="mesh329520873_11"
            geometry={nodes.mesh329520873_11.geometry}
            material={texm4}
          />
          <mesh
            name="mesh329520873_12"
            geometry={nodes.mesh329520873_12.geometry}
            material={texm4}
          />
          <mesh
            name="mesh329520873_13"
            geometry={nodes.mesh329520873_13.geometry}
            material={texm4}
          />
          <mesh
            name="mesh329520873_14"
            geometry={nodes.mesh329520873_14.geometry}
            material={texm4}
          />
          <mesh
            name="mesh329520873_15"
            geometry={nodes.mesh329520873_15.geometry}
            material={texm4}
          />
          <mesh
            name="mesh329520873_16"
            geometry={nodes.mesh329520873_16.geometry}
            material={texm4}
          />
          <mesh
            name="mesh329520873_17"
            geometry={nodes.mesh329520873_17.geometry}
            material={texm4}
          />
          <mesh
            name="mesh329520873_18"
            geometry={nodes.mesh329520873_18.geometry}
            material={texm4}
          />
        </group>
        <group name="FlowerPot2">
          <mesh
            name="FlowerPot2_1"
            geometry={nodes.FlowerPot2_1.geometry}
            material={texm5}
          />
          <mesh
            name="FlowerPot2_2"
            geometry={nodes.FlowerPot2_2.geometry}
            material={texm5}
          />
          <mesh
            name="FlowerPot2_3"
            geometry={nodes.FlowerPot2_3.geometry}
            material={texm5}
          />
          <mesh
            name="FlowerPot2_4"
            geometry={nodes.FlowerPot2_4.geometry}
            material={texm5}
          />
        </group>
        <group name="Node">
          <mesh
            name="Node-Mesh"
            geometry={nodes['Node-Mesh'].geometry}
            material={texm6}
          />
          <mesh
            name="Node-Mesh_1"
            geometry={nodes['Node-Mesh_1'].geometry}
            material={texm6}
          />
          <mesh
            name="Node-Mesh_2"
            geometry={nodes['Node-Mesh_2'].geometry}
            material={texm6}
          />
          <mesh
            name="Node-Mesh_3"
            geometry={nodes['Node-Mesh_3'].geometry}
            material={texm6}
          />
          <mesh
            name="Node-Mesh_4"
            geometry={nodes['Node-Mesh_4'].geometry}
            material={texm6}
          />
          <mesh
            name="Node-Mesh_5"
            geometry={nodes['Node-Mesh_5'].geometry}
            material={texm6}
          />
        </group>
        <mesh
          name="Node001"
          geometry={nodes.Node001.geometry}
          material={texm5}
        />
        <mesh
          name="Node002"
          geometry={nodes.Node002.geometry}
          material={texm5}
        />
        <mesh
          name="Node003"
          geometry={nodes.Node003.geometry}
          material={texm5}
        />
        <group name="Circle003_Circle004">
          <mesh
            name="Circle003_Circle004-Mesh"
            geometry={nodes['Circle003_Circle004-Mesh'].geometry}
            material={texm5}
          />
          <mesh
            name="Circle003_Circle004-Mesh_1"
            geometry={nodes['Circle003_Circle004-Mesh_1'].geometry}
            material={texm5}
          />
          <mesh
            name="Circle003_Circle004-Mesh_2"
            geometry={nodes['Circle003_Circle004-Mesh_2'].geometry}
            material={texm5}
          />
          <mesh
            name="Circle003_Circle004-Mesh_3"
            geometry={nodes['Circle003_Circle004-Mesh_3'].geometry}
            material={texm5}
          />
          <mesh
            name="Circle003_Circle004-Mesh_4"
            geometry={nodes['Circle003_Circle004-Mesh_4'].geometry}
            material={texm5}
          />
          <mesh
            name="Circle003_Circle004-Mesh_5"
            geometry={nodes['Circle003_Circle004-Mesh_5'].geometry}
            material={texm5}
          />
        </group>
        <group name="Circle003_Circle001">
          <mesh
            name="Circle003_Circle004-Mesh001"
            geometry={nodes['Circle003_Circle004-Mesh001'].geometry}
            material={texm5}
          />
          <mesh
            name="Circle003_Circle004-Mesh001_1"
            geometry={nodes['Circle003_Circle004-Mesh001_1'].geometry}
            material={texm5}
          />
          <mesh
            name="Circle003_Circle004-Mesh001_2"
            geometry={nodes['Circle003_Circle004-Mesh001_2'].geometry}
            material={texm5}
          />
          <mesh
            name="Circle003_Circle004-Mesh001_3"
            geometry={nodes['Circle003_Circle004-Mesh001_3'].geometry}
            material={texm5}
          />
          <mesh
            name="Circle003_Circle004-Mesh001_4"
            geometry={nodes['Circle003_Circle004-Mesh001_4'].geometry}
            material={texm5}
          />
          <mesh
            name="Circle003_Circle004-Mesh001_5"
            geometry={nodes['Circle003_Circle004-Mesh001_5'].geometry}
            material={texm5}
          />
        </group>
        <group name="Circle003_Circle002">
          <mesh
            name="Circle003_Circle004-Mesh002"
            geometry={nodes['Circle003_Circle004-Mesh002'].geometry}
            material={texm5}
          />
          <mesh
            name="Circle003_Circle004-Mesh002_1"
            geometry={nodes['Circle003_Circle004-Mesh002_1'].geometry}
            material={texm5}
          />
          <mesh
            name="Circle003_Circle004-Mesh002_2"
            geometry={nodes['Circle003_Circle004-Mesh002_2'].geometry}
            material={texm5}
          />
          <mesh
            name="Circle003_Circle004-Mesh002_3"
            geometry={nodes['Circle003_Circle004-Mesh002_3'].geometry}
            material={texm5}
          />
          <mesh
            name="Circle003_Circle004-Mesh002_4"
            geometry={nodes['Circle003_Circle004-Mesh002_4'].geometry}
            material={texm5}
          />
          <mesh
            name="Circle003_Circle004-Mesh002_5"
            geometry={nodes['Circle003_Circle004-Mesh002_5'].geometry}
            material={texm5}
          />
        </group>
        <group name="Circle001">
          <mesh
            name="Circle001-Mesh"
            geometry={nodes['Circle001-Mesh'].geometry}
            material={texm3}
          />
          <mesh
            name="Circle001-Mesh_1"
            geometry={nodes['Circle001-Mesh_1'].geometry}
            material={texm3}
          />
          <mesh
            name="Circle001-Mesh_2"
            geometry={nodes['Circle001-Mesh_2'].geometry}
            material={texm3}
          />
        </group>
        <group name="Circle002">
          <mesh
            name="Circle001-Mesh001"
            geometry={nodes['Circle001-Mesh001'].geometry}
            material={texm3}
          />
          <mesh
            name="Circle001-Mesh001_1"
            geometry={nodes['Circle001-Mesh001_1'].geometry}
            material={texm3}
          />
          <mesh
            name="Circle001-Mesh001_2"
            geometry={nodes['Circle001-Mesh001_2'].geometry}
            material={texm3}
          />
        </group>
        <group name="fries">
          <mesh
            name="fries_3"
            geometry={nodes.fries_3.geometry}
            material={texm3}
          />
          <mesh
            name="fries_3_1"
            geometry={nodes.fries_3_1.geometry}
            material={texm3}
          />
        </group>
        <group name="stoolBar">
          <mesh
            name="stoolBar_2"
            geometry={nodes.stoolBar_2.geometry}
            material={texm5}
          />
          <mesh
            name="stoolBar_2_1"
            geometry={nodes.stoolBar_2_1.geometry}
            material={texm5}
          />
        </group>
        <group name="stoolBar001">
          <mesh
            name="stoolBar_2001"
            geometry={nodes.stoolBar_2001.geometry}
            material={texm5}
          />
          <mesh
            name="stoolBar_2001_1"
            geometry={nodes.stoolBar_2001_1.geometry}
            material={texm5}
          />
        </group>
        <group name="stoolBar002">
          <mesh
            name="stoolBar_2002"
            geometry={nodes.stoolBar_2002.geometry}
            material={texm5}
          />
          <mesh
            name="stoolBar_2002_1"
            geometry={nodes.stoolBar_2002_1.geometry}
            material={texm5}
          />
        </group>
        <group name="stoolBar003">
          <mesh
            name="stoolBar_2003"
            geometry={nodes.stoolBar_2003.geometry}
            material={texm5}
          />
          <mesh
            name="stoolBar_2003_1"
            geometry={nodes.stoolBar_2003_1.geometry}
            material={texm5}
          />
        </group>
        <group name="stoolBar004">
          <mesh
            name="stoolBar_2004"
            geometry={nodes.stoolBar_2004.geometry}
            material={texm5}
          />
          <mesh
            name="stoolBar_2004_1"
            geometry={nodes.stoolBar_2004_1.geometry}
            material={texm5}
          />
        </group>
        <mesh
          name="bottleKetchup"
          geometry={nodes.bottleKetchup.geometry}
          material={texm3}
        />
        <group name="germany">
          <mesh
            name="Flag_Cylinder-Mesh"
            geometry={nodes['Flag_Cylinder-Mesh'].geometry}
            material={texm6}
          />
          <mesh
            name="Flag_Cylinder-Mesh_1"
            geometry={nodes['Flag_Cylinder-Mesh_1'].geometry}
            material={texm6}
          />
          <mesh
            name="Flag_Cylinder-Mesh_2"
            geometry={nodes['Flag_Cylinder-Mesh_2'].geometry}
            material={texm6}
          />
          <mesh
            name="Flag_Cylinder-Mesh_3"
            geometry={nodes['Flag_Cylinder-Mesh_3'].geometry}
            material={texm6}
          />
          <mesh
            name="Flag_Cylinder-Mesh_4"
            geometry={nodes['Flag_Cylinder-Mesh_4'].geometry}
            material={texm6}
          />
        </group>
        <group name="eng">
          <mesh
            name="Flag_Cylinder-Mesh003"
            geometry={nodes['Flag_Cylinder-Mesh003'].geometry}
            material={texm6}
          />
          <mesh
            name="Flag_Cylinder-Mesh003_1"
            geometry={nodes['Flag_Cylinder-Mesh003_1'].geometry}
            material={texm6}
          />
          <mesh
            name="Flag_Cylinder-Mesh003_2"
            geometry={nodes['Flag_Cylinder-Mesh003_2'].geometry}
            material={texm6}
          />
          <mesh
            name="Flag_Cylinder-Mesh003_3"
            geometry={nodes['Flag_Cylinder-Mesh003_3'].geometry}
            material={texm6}
          />
          <mesh
            name="Flag_Cylinder-Mesh003_4"
            geometry={nodes['Flag_Cylinder-Mesh003_4'].geometry}
            material={texm6}
          />
        </group>
        <group name="iran">
          <mesh
            name="Flag_Cylinder-Mesh004"
            geometry={nodes['Flag_Cylinder-Mesh004'].geometry}
            material={texm6}
          />
          <mesh
            name="Flag_Cylinder-Mesh004_1"
            geometry={nodes['Flag_Cylinder-Mesh004_1'].geometry}
            material={texm6}
          />
          <mesh
            name="Flag_Cylinder-Mesh004_2"
            geometry={nodes['Flag_Cylinder-Mesh004_2'].geometry}
            material={texm6}
          />
          <mesh
            name="Flag_Cylinder-Mesh004_3"
            geometry={nodes['Flag_Cylinder-Mesh004_3'].geometry}
            material={texm6}
          />
          <mesh
            name="Flag_Cylinder-Mesh004_4"
            geometry={nodes['Flag_Cylinder-Mesh004_4'].geometry}
            material={texm6}
          />
        </group>
        <mesh
          name="arcade_middle"
          onClick={() => funcs.changeScene(3)}
          geometry={nodes.arcade_middle.geometry}
          material={texm7}
        />
        <group name="vending" onClick={() => funcs.changeScene(2)}>
          <mesh
            name="mesh1848869498"
            geometry={nodes.mesh1848869498.geometry}
            material={texm7}
          />
          <mesh
            name="mesh1848869498_1"
            geometry={nodes.mesh1848869498_1.geometry}
            material={texm7}
          />
        </group>
        <mesh
          name="pic_sign"
          geometry={nodes.pic_sign.geometry}
          material={texm2}
        />
        <mesh
          name="pic_sign001"
          geometry={nodes.pic_sign001.geometry}
          material={texm2}
        />
        <mesh
          name="pic_sign002"
          geometry={nodes.pic_sign002.geometry}
          material={texm2}
        />
        <mesh
          name="pic_sign003"
          geometry={nodes.pic_sign003.geometry}
          material={texm2}
        />
        <group name="neon_guitar" onClick={funcs.riff}>
          <mesh
            name="Electric_Guitar_Cube035_1"
            geometry={nodes.Electric_Guitar_Cube035_1.geometry}
            material={texm2}
          />
          <mesh
            name="Electric_Guitar_Cube035_1_1"
            geometry={nodes.Electric_Guitar_Cube035_1_1.geometry}
            material={texm2}
          />
          <mesh
            name="Electric_Guitar_Cube035_1_2"
            geometry={nodes.Electric_Guitar_Cube035_1_2.geometry}
            material={texm2}
          />
        </group>
        <mesh
          name="cubes_sign_frame"
          geometry={nodes.cubes_sign_frame.geometry}
          material={texm2}
        />
        <group name="dragsign">
          <mesh
            name="Node-Mesh004"
            geometry={nodes['Node-Mesh004'].geometry}
            material={texm2}
          />
          <mesh
            name="Node-Mesh004_1"
            geometry={nodes['Node-Mesh004_1'].geometry}
            material={texm2}
          />
        </group>
      </group>
    </group>
  )
}

export default Model1
