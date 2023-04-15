import React, { useEffect, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import {BsCart4, BsFillBagHeartFill} from "react-icons/bs"

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getcategeryAsync } from "../../../redux/catagery/CategrySlice";




export default function ProductDropdownComponent() {
  const [visivility, setvisib]=useState(false)

  const [drowr,setDrowr]=useState(false)
  const dispatch =useDispatch()
  const navigate=useNavigate()
 
    return (
      <>
        
        {/* <div className="inline-flex bg-blaxk p-2 border-0 rounded-md relative">
        <BsFillBagHeartFill className="cursor-pointer"/>   
        </div> */}
        <div onClick={()=>{setDrowr(!drowr)}} className="inline-flex bg-blaxk p-2 border-0 rounded-md">
        
        </div>
        







        
        <div className="inline-flex bg-blaxk p-2 border-0 rounded-md">
           
          <h3 onClick={()=>setvisib(!visivility)} className="cursor-pointer text-md">  Product</h3>
            <div className="relative">
           

               {visivility&&<div className="absolute : right-0 top-5 z-10 w-56 mt-4 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg">
                    <div className="p-2">

                          <div className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                           onClick={()=>{ dispatch(getcategeryAsync("Aplinces"))     
                            navigate("/Aplinces")}} >
                         <p>Applincess</p>
                        </div>
                        <div className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"  
                        onClick={()=>{dispatch(getcategeryAsync("furnitur")) 
                          navigate("/furnitur")}} >
                        <p>Furniture</p>
                        </div>
                        <div className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700" 
                         onClick={()=>{dispatch(getcategeryAsync("Packeges")) 
                          navigate("/Packeges")}} >
                        <p>Packeges</p>
                        </div>

                      
                    </div>
                </div>} 
            </div>
        </div>
        
        </>
    );
}