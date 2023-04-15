import React from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { Suspense } from 'react'
import { ContactShadows, Environment, OrbitControls, SpotLight } from '@react-three/drei'
import { Html, useProgress } from '@react-three/drei'
import Chaire from './Chaire'

function Controls(){
  const{
    camera,
    gl:{domElement },
                   }=useThree()
              return <OrbitControls  args={[camera,domElement]}/>}



              function Loader() {
                          const { progress } = useProgress()
                          return <Html center>{progress} % loaded</Html> }


const ThreedMode = () => {
                return ( <Canvas camera={{ position: [5, 5, 15], fov: 20, }}>
                            <Suspense  fallback={<Loader/>}>
                                            <spotLight position={[0, 15, 0]} angle={0.3}  penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />
                                          
                                          
                                          <ambientLight intensity={0.5} />

                                          
                                          <Chaire scale={1.5} position={[-0.5, -0.18, 0]} rotation={[0, Math.PI / 5, 0]} />
                                          <OrbitControls  zoomSpeed={0}   autoRotate/>
                                          <ContactShadows position={[1,-0.5,0]}  blur={2} scale={20} far={10} />
                              

                            </Suspense>
                        </Canvas>) }

export default ThreedMode