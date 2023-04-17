import React from 'react'
import SeeMore from './SeeMore'
import { Badge, Progress, VStack } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { UpdateItem, UpdateItemOrder, UpdateOrderAsync, getOrderAsync } from '../../redux/Order/OderSlice'
import Oderdetiles from './Oderdetiles'

const Singleorder = ({item}) => {
    console.log(item)
    const dispatch=useDispatch()

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
        }
      }
    
  return (<div >

    <VStack maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' textAlign={'center'} boxShadow='dark-lg' >
        <p>User Id: {item.userId}</p>
        <p>total : {item.total}</p>
        <Badge bg={item.payment_status=="success" ?"green.400":"red.300"}>Payment Status : {item.payment_status}</Badge>
        {/* <Badge cursor={"pointer"} */}
        {/* //  bg={item.delivery_status=="success" ?"green.400":"red.300"}
        // onClick={()=>{HandleClick(item._id,item.delivery_status)}} >Delivery Status : {item.delivery_status}  </Badge> */}

        <Oderdetiles  item={item}/>
       
       
         <SeeMore   products={item.products}/>

    </VStack>
</div>
  )
}

export default Singleorder