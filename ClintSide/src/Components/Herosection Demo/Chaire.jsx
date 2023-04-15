

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Chaire(props) {
  const { nodes, materials } = useGLTF('/leather_armchair_coffee_table_floorlamp/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01} >
        <group rotation={[-Math.PI / 2, 0, 0]}  scale={1.1}>
          <group position={[80.27, 19.27, 138.46]} rotation={[-0.02, 0.05, 0.69]} >
            <mesh geometry={nodes.FLOORLAMP_TEXSET_A_0.geometry} material={materials.TEXSET_A} position={[0, 0, -10.32]} />
          </group>
          <mesh geometry={nodes.ARMCHAIR_TEXSET_A_0.geometry} material={materials.TEXSET_A} rotation={[0, 0, 0.19]} />
          <mesh geometry={nodes.COFFEETABLE_TEXSET_A_0.geometry} material={materials.TEXSET_A} position={[23.31, -100.42, 0]} rotation={[0, 0, 0.07]} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/leather_armchair_coffee_table_floorlamp/scene.gltf')
