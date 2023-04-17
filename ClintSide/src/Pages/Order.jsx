import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderAsync } from '../redux/Order/Orderslice'
import Singleorder from '../Components/Order/Singleorder'

const Order = () => {
  const dispatch=useDispatch()
    const {Order,loading,error} =useSelector((store)=>store.Order)
    useEffect(()=>{
      dispatch(getOrderAsync())
    },[])
    console.log(Order)
   
  return (

    
    <div>

<div className=' grid  grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  p-6  mt-9' >
      {Order && Order.map((item,idx)=>{
        return <Singleorder key={idx} item={item} />
      })}</div>

   
    </div>
  )
}

export default Order