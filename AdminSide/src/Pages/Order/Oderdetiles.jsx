import { Badge, Button, Flex } from '@chakra-ui/react'
import React from 'react'
import Tracking from './Tracking'
import { useDispatch, useSelector } from 'react-redux'
import { UpdateItem, UpdateItemOrder, UpdateOrderAsync, getOrderAsync } from '../../redux/Order/OderSlice'

const Oderdetiles = ({item}) => {
    const dispatch=useDispatch()
    const event = new Date(item.updatedAt)
    let date=event.getUTCDate()
    let year=event.getUTCFullYear()
    let mont=event.getUTCMonth()

    let eventNow=new Date()

    let dateNow=eventNow.getUTCDate()
    let monthNow=eventNow.getUTCMonth()
    let yearNow=eventNow.getUTCFullYear()
    let deliv=item.delivery_status=="Canceld"

    let HandleClick=()=>{

        let cred={delivery_status:"Canceld"}
        dispatch(UpdateOrderAsync({id:item._id,cred}))
       dispatch( UpdateItemOrder({id:item._id,cred}))
    }
  
  if(deliv){
    return <h1 color='red'> Order Canceled</h1>
  }
  else{
return (<Flex gap={3}>
   {year<=yearNow&&mont<=monthNow&&dateNow-date<2? <Button color={"red"}   onClick={HandleClick} >Cancel</Button>:<Button color={"pink"}  disabled >Cancel</Button> } 
    <Tracking  year={year} mont={mont } date={date}/>
    <Badge color={year<=yearNow&&mont<=monthNow&&dateNow-date<2? "pink.500": "green"}>{year<=yearNow&&mont<=monthNow&&dateNow-date<2? "pending": "delivered"}</Badge>
  </Flex>
  )
  }
  
}

export default Oderdetiles