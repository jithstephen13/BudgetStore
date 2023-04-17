import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Applinces from '../Pages/Product/Products'
import Success from '../Pages/Success'
import Error from '../Pages/Error'
import SingleProduct from '../Pages/SingleProduct'
import Order from '../Pages/Order'

const Allroutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      {['Aplinces', 'furnitur', 'Packeges'].map(path => <Route key={path} path={`/${path}`} element={<Applinces/>} />)}
      <Route path='/checkout-success' element={<Success/>}/>
      <Route path='/error' element={<Error/>}/>
      <Route path='/singleProduct/:id' element={<SingleProduct/>}/>
      <Route path='/OrderDetaile' element={<Order/>}/>
    </Routes>
  )
}

export default Allroutes