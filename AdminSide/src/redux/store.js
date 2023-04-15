import { configureStore } from '@reduxjs/toolkit'
import todoReducer from "./todo/todoSlice"
import CategryReducer from './catagery/CategrySlice'
import productReducer from './Product/productSlice'
import OrderReducer from './Order/OderSlice'

import AuthReducer from "./Auth/AuthSlice"

export default configureStore({
  reducer: {
    todo:todoReducer,
    categries:CategryReducer,
    products:productReducer,
    Order:OrderReducer,
    auth:AuthReducer
  },
})