

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/anemone_deer/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group scale={2}>
        
        <primitive object={nodes._rootJoint} />
        <skinnedMesh geometry={nodes.Object_6.geometry} material={materials.Deer_Mat} skeleton={nodes.Object_6.skeleton} />
        <skinnedMesh geometry={nodes.Object_8.geometry} material={materials.Deer_Mat} skeleton={nodes.Object_8.skeleton} />
        <skinnedMesh geometry={nodes.Object_10.geometry} material={materials.Deer_Mat} skeleton={nodes.Object_10.skeleton} />
        <skinnedMesh geometry={nodes.Object_12.geometry} material={materials.Deer_Mat} skeleton={nodes.Object_12.skeleton} />
        <skinnedMesh geometry={nodes.Object_14.geometry} material={materials.Deer_Mat} skeleton={nodes.Object_14.skeleton} />
        <skinnedMesh geometry={nodes.Object_16.geometry} material={materials.Deer_Mat} skeleton={nodes.Object_16.skeleton} />
        <skinnedMesh geometry={nodes.Object_18.geometry} material={materials.Deer_Mat} skeleton={nodes.Object_18.skeleton} />
        <skinnedMesh geometry={nodes.Object_20.geometry} material={materials.Deer_Mat} skeleton={nodes.Object_20.skeleton} />
        <skinnedMesh geometry={nodes.Object_22.geometry} material={materials.Deer_Mat} skeleton={nodes.Object_22.skeleton} />
        <skinnedMesh geometry={nodes.Object_24.geometry} material={materials.Deer_Mat} skeleton={nodes.Object_24.skeleton} />
        <skinnedMesh geometry={nodes.Object_26.geometry} material={materials.Deer_Mat} skeleton={nodes.Object_26.skeleton} />
        <skinnedMesh geometry={nodes.Object_28.geometry} material={materials.Deer_Mat} skeleton={nodes.Object_28.skeleton} />
        <skinnedMesh geometry={nodes.Object_30.geometry} material={materials.Deer_Mat} skeleton={nodes.Object_30.skeleton} />
        <skinnedMesh geometry={nodes.Object_32.geometry} material={materials.Deer_Mat} skeleton={nodes.Object_32.skeleton} />
        <skinnedMesh geometry={nodes.Object_34.geometry} material={materials.Deer_Mat} skeleton={nodes.Object_34.skeleton} />
        <skinnedMesh geometry={nodes.Object_36.geometry} material={materials.Deer_Mat} skeleton={nodes.Object_36.skeleton} />
        <skinnedMesh geometry={nodes.Object_38.geometry} material={materials.Deer_Mat} skeleton={nodes.Object_38.skeleton} />
        <skinnedMesh geometry={nodes.Object_40.geometry} material={materials.Deer_Mat} skeleton={nodes.Object_40.skeleton} />
        <skinnedMesh geometry={nodes.Object_42.geometry} material={materials.Deer_Mat} skeleton={nodes.Object_42.skeleton} />
        <skinnedMesh geometry={nodes.Object_44.geometry} material={materials.Deer_Mat} skeleton={nodes.Object_44.skeleton} />
        <skinnedMesh geometry={nodes.Object_46.geometry} material={materials.Deer_Mat} skeleton={nodes.Object_46.skeleton} />
      </group>
      
    </group>
  )
}

useGLTF.preload('/anemone_deer/scene.gltf')
