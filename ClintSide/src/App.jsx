
import { Canvas, useThree } from '@react-three/fiber'
import './App.css'
import Allroutes from './routes/Allroutes'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'

import { Suspense } from 'react'
import { ContactShadows, Environment, OrbitControls, SpotLight } from '@react-three/drei'
import { Html, useProgress } from '@react-three/drei'
import ThreedMode from './Components/Herosection Demo/ThreedMode'
import { ToastContainer } from 'react-toastify'


function Controls(){
  const{
    camera,
    gl:{domElement },
  }=useThree()

  return <OrbitControls args={[camera,domElement]}/>

}
function Loader() {
  const { progress } = useProgress()
  return <Html center>{progress} % loaded</Html>
}

function App() {


  return (
    <>
      <Navbar />
      <Allroutes/>
      
     
      <Footer/>
      <ToastContainer />
    </>
   
  )
}

export default App
