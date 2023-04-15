import React from 'react'
import {Routes,Route} from "react-router-dom"
import { AddProduct} from '../Pages/Product/AddProduct'
import Product from '../Pages/Product/Product'
import Home from '../Pages/Home/Home'
import Orderpage from '../Pages/Order/Orderpage'
import { Stack } from '@chakra-ui/react'
import Login from '../Pages/Login/Login'
import PrivateRoute from './PrivertRoute'

export const AllRoutes = () => {
  return (
    <Stack minH={500} >

        <Routes>
           
            <Route path='/' element={ <PrivateRoute><Home/></PrivateRoute>} />

            <Route path='/addNew' element={<PrivateRoute><AddProduct/></PrivateRoute>} />

            <Route path='/allProduct' element={<PrivateRoute><Product/></PrivateRoute>} />

            <Route path='/orderdetails' element={<PrivateRoute><Orderpage/></PrivateRoute>} />

            <Route path='/Login' element={<Login/>} />



        </Routes>
    </Stack>
  )
}
