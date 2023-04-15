import React, { useEffect, useState } from 'react'
import { BsCart4 } from 'react-icons/bs';
import {useDispatch,useSelector} from "react-redux"
import store from '../../redux/store';
import { Stripe_CheckoutApi, getCartAsync } from '../../redux/cart/Cartslice';
import CartItemcard from './CartItemcard';

const CartModal = () => {
    const [showModal, setShowModal] = useState(false);
    const dispatch= useDispatch()
    const {Carts,total} =useSelector((store)=>store.cart)
  let todal
  const HandleCart=()=>{
    dispatch(Stripe_CheckoutApi(Carts))
  }
    
    

  return (
    <div>
          <div className="flex items-center justify-center "  onClick={() => setShowModal(true)}>
            <div className=' relative p-0'>
           { Carts.length>0&&<p className='text-md absolute bottom-1 left-3 m-0 '>{Carts.length}</p>}
            </div>
           <BsCart4   className="cursor-pointer"/>
          
            </div>
            {showModal ? (
                <>
                    <div className="fixed inset-0 z-10 overflow-y-auto ">
                      <div  className="fixed inset-0 w-full h-full bg-black opacity-40"
                         onClick={() => setShowModal(false)} ></div>
                        <div className="flex items-start min-h-screen px-4 py-4 h-400px">
                         <div className="relative w-full max-w-2xl p-4 mx-auto bg-white rounded-md shadow-lg text-black">
                            <button className="absolute top-0 right-0 w-16 mt-2 p-2 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                             onClick={() => setShowModal(false) } > {"X"} </button>
                             <div className=' mt-5' >
                              {Carts.length==0&& <div className='text-black'>
                                <img src="https://res.cloudinary.com/dqgeth8jx/image/upload/v1681303387/BudgetApp/preview_yauhnf.png" alt="emty" />
                                </div>}
                              {Carts.length>0&& <div className=' '>

                                <div className=' w-full' >
                                    {Carts.map((item,idx)=><CartItemcard key={idx} {...item}/>)}

                                </div>
                    



                              </div>
                              
                              
                              }
                                    
                                    
                             </div>

                             <div className=' w-full bg-slate-300 p-4 mt-10 flex items-center justify-around'>
                                <div className='flex'>
                                 <h1 className=' text-2xl'> Total : </h1>
                                 <h1 className=' text-2xl'> {total} </h1></div>

                                <button  disabled={Carts.length==0 ? true : false} onClick={HandleCart} className=' p-4 bg-red-200 rounded-2xl'> Checkout</button>
                             </div>

                              
                            </div>
                        </div>
                    </div>
                </>
            ) : null}

    </div>
  )
}

export default CartModal