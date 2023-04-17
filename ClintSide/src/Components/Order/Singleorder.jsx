import React from 'react'
import { useDispatch } from 'react-redux'
import Oderdetiles from './Oderdetiles'
import { UpdateItemOrder, UpdateOrderAsync } from '../../redux/Order/Orderslice'
import Accordion from './SeeMore'

const Singleorder = ({item}) => {
    
    const dispatch=useDispatch()

    
    
  return (<div className=' min-h-64' >

    <div className=' max-w-sm border-2 rounded-lg  overflow-hidden text-center shadow-lg shadow-black '  >
        
        <p>Total Amount : {item.total}</p>
        {item.payment_status=="success" ? <span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400">Payment Status : {item.payment_status}</span>:
        <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">Payment Status : {item.payment_status}</span>}
        <Oderdetiles  item={item}/>
       
       
         <Accordion title={"See more"}  products={item.products}/>

    </div>
</div>
  )
}

export default Singleorder