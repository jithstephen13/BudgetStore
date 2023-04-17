
import React from 'react'
import Tracking from './Tracking'
import { useDispatch, useSelector } from 'react-redux'
import { UpdateItemOrder, UpdateOrderAsync } from '../../redux/Order/Orderslice'


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
    return <h1 className=' text-red-500 text-lg mt-12'> Order Canceled</h1>
  }
  else{
return (<div  className=' flex gap-3 mt-5  justify-around'>
   {year<=yearNow&&mont<=monthNow&&dateNow-date<2? <button className=' p-4 bg-green-700'   onClick={HandleClick} >Cancel</button>:<button className=' p-4 bg-pink-500'  disabled > Cancel</button> } 
    <Tracking  year={year} mont={mont } date={date}/>
    {year<=yearNow&&mont<=monthNow&&dateNow-date<2? <span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-pink-400">pending</span>: 
    <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">delivered</span>}
    
  </div>)
  }
  
}

export default Oderdetiles