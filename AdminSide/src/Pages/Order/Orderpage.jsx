import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UpdateItem, UpdateItemOrder, UpdateOrderAsync, getOrderAsync } from '../../redux/Order/OderSlice'
import { Badge, Grid, VStack } from '@chakra-ui/react'
import SeeMore from './SeeMore'
import TransitionEfect from '../../Component/TransitionEffectes/TransitionEfect'

const Orderpage = () => {
  const dispatch=useDispatch()
  const {Order,loading,error} =useSelector((store)=>store.Order)


              useEffect(()=>{
                dispatch(getOrderAsync())
              },[])


const HandleClick=(id,status)=>{
 
                    if(status=="success"){
                      let cred={delivery_status:"pendding"}
                      dispatch(UpdateOrderAsync({id,cred}))
                    dispatch( UpdateItemOrder({id,cred}))
                    

                    }
                    else{
                      let cred={delivery_status:"success"}
                      dispatch(UpdateOrderAsync({id,cred}))
                    dispatch( UpdateItemOrder({id,cred}))
                    }}
  
                      return (
                        <div>
                    <TransitionEfect/>
                                    <Grid templateColumns={['repeat(1, 1fr)','repeat(2, 1fr)','repeat(3, 1fr)','repeat(4, 1fr)']} p={6} gap={6}>
                                          {Order.map((item,idx)=>{
                                            return <div key={idx}>

                                                  <VStack maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' 
                                                                               textAlign={'center'} boxShadow='dark-lg' >
                                                      <p>User Id: {item.userId}</p>
                                                      <p>total : {item.total}</p>
                                                      <Badge bg={item.payment_status=="success" ?"green.400":"red.300"}>Payment Status : {item.payment_status}</Badge>
                                                      <Badge cursor={"pointer"}
                                                      bg={item.delivery_status=="success" ?"green.400":"red.300"}
                                                      onClick={()=>{HandleClick(item._id,item.delivery_status)}} >Delivery Status : {item.delivery_status}  </Badge>
                                                    

                                                      <SeeMore   products={item.products}/>

                                                  </VStack>
                                            </div>
                                          })}</Grid>
                        </div> )}

                    export default Orderpage