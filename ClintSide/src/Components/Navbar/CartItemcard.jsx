import React, { useEffect } from 'react'
import {useDispatch,useSelector} from "react-redux"
import { DeletCartAsync, UpdateCartAsync, UpdateItem, removeItem } from '../../redux/cart/Cartslice'
const CartItemcard = ({_id,categorySlug,filterSlug,minRentAmount,name,productImages,quentity}) => {
    const dispatch= useDispatch()
    const {Carts} =useSelector((store)=>store.cart)

   
    const HandleRemove=()=>{
       dispatch(DeletCartAsync(_id))

       setTimeout(()=>{dispatch(removeItem(_id)) },1000)
       
    }


    const HandileChange=(e)=>{
        dispatch(UpdateCartAsync({id:_id,cred:{quentity:e.target.value}}))
         setTimeout(()=>{  dispatch(UpdateItem({id:_id,cred:{quentity:e.target.value}}))},1000)
    }
  
  
  return (
    <div className="w-full  bg-white border mt-11 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col sm:flex-row h-auto justify-start items-center ">
    
       
    {productImages[0]+productImages[1]==="ht"? <img className="p-8 w-36  rounded-t-lg h-2/1" src={productImages} alt="product image" />:<img  className="p-8 w-36  rounded-t-lg h-2/1" src={`https:${productImages}-250x250.jpg`} alt="product image" />}
     <div className="px-5 pb-5 flex flex-col  justify-start items-center gap-3">
       <a href="#">
        <p className="text-xs font-semibold tracking-tight text-gray-900 dark:text-white  max-w-xs text-center">{name}</p>
      

       
    </a>
    
    <div className="flex  flex-col sm:flex-row items-center justify-start gap-6 m-0 p-0">
        <span className="text-xl font-bold text-gray-900 dark:text-white">₹:{minRentAmount}<span className=' text-xs'>/Month</span></span>
        <span className=' text-xs'>Month : <select  onChange={HandileChange}>
        <option value={`${quentity}`}>{quentity}</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select></span>
        <div className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center
         dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:cursor-pointer"
          onClick={HandleRemove}
         >Remove from cart</div>
    </div>
</div>
</div>
  )
}

export default CartItemcard