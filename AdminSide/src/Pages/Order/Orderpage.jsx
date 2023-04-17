import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UpdateItem, UpdateItemOrder, UpdateOrderAsync, getOrderAsync } from '../../redux/Order/OderSlice'
import { Badge, Grid, VStack } from '@chakra-ui/react'
import SeeMore from './SeeMore'
import TransitionEfect from '../../Component/TransitionEffectes/TransitionEfect'
import Singleorder from './Singleorder'

const Orderpage = () => {
  const dispatch=useDispatch()
  const {Order,loading,error} =useSelector((store)=>store.Order)
  useEffect(()=>{
    dispatch(getOrderAsync())
  },[])



  
  return (
    <div>
<TransitionEfect/>


    
<Grid templateColumns={['repeat(1, 1fr)','repeat(2, 1fr)','repeat(3, 1fr)','repeat(4, 1fr)']} p={6} gap={6}>
      {Order.map((item,idx)=>{
        return <Singleorder key={idx} item={item} />
      })}</Grid>
    </div>
  )
}

export default Orderpage