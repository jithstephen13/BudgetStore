import React, { useEffect, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import {BsCart4, BsFillBagHeartFill} from "react-icons/bs"
import { removeItem, setItem } from "../../utility/localStorage";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/Auth/AuthSlice";
import CartModal from "./CartModal";
import { getCartAsync } from "../../redux/cart/Cartslice";

export default function DropdownComponent() {
  const [visivility, setvisib]=useState(false)

  const [drowr,setDrowr]=useState(false)
  const dispatch =useDispatch()
  useEffect(()=>{
    dispatch(getCartAsync())
})
    return (
      <>
        
        {/* <div className="inline-flex bg-blaxk p-2 border-0 rounded-md relative">
        <BsFillBagHeartFill className="cursor-pointer"/>   
        </div> */}
        <div onClick={()=>{setDrowr(!drowr)}} className="inline-flex bg-blaxk p-2 border-0 rounded-md">
          <CartModal/>
        </div>
        







        
        <div className="inline-flex bg-blaxk p-2 border-0 rounded-md">
           
          <FaUserAlt  onClick={()=>setvisib(!visivility)} className="cursor-pointer"/>
            <div className="relative">
           

               {visivility&&<div className="absolute : right-0 top-5 z-10 w-56 mt-4 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg">
                    <div className="p-2">
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                        >
                            User Details
                        </a>
                        <a
                            href="https://budgetstoreadmin.netlify.app/"
                            className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                        target="_blank">
                           Admin Page
                        </a>
                        <div
                            onClick={()=>{
                                removeItem("User")
                                dispatch(logOut())
                                
                            }}

                            className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                        >
                          Log out
                        </div>
                    </div>
                </div>} 
            </div>
        </div>
        
        </>
    );
}