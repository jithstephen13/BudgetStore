import { configureStore,combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';

import CategryReducer from "./catagery/CategrySlice"
import productReducer from "./Product/productSlice"

import AuthReducer from "./Auth/AuthSlice"
import CartsReducer from "./cart/Cartslice"


const persistConfig = {
  key: 'root',
  version:1,
  storage,
}

const reducer =combineReducers({
   categries:CategryReducer,
    products:productReducer,
    auth:AuthReducer,
    cart:CartsReducer
})
const persistReducr=persistReducer(persistConfig,reducer)

export default configureStore({
  reducer: persistReducr,
  middleware: [thunk]

})