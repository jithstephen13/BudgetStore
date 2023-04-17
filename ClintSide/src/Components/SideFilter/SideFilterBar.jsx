import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getproductAsync } from '../../redux/Product/productSlice'
import { useNavigate } from "react-router-dom";
import { getcategeryAsync } from '../../redux/catagery/CategrySlice';

const SideFilterBar = () => {
  const {categries}=useSelector((store)=>store.categries)
  const [filter,setFilter]=useState(categries[0] ?  categries[0].filterName:"Air Conditioners" )
  let path=window.location.pathname
  const navigate=useNavigate()

  path=path.slice(1,path.length)

  const dispatch=useDispatch()

  useEffect(()=>{

    if(categries.length!==0&&categries[2].filterName!=undefined){
   dispatch(getproductAsync({categry:path,filterSlu:filter}))
    }
   
   },[filter])

   useEffect(()=>{
    if(categries.length!==0&&categries[2].filterName!=undefined){
      setFilter(categries[0].filterName)
    }
   },[categries])
  

    
  return (   <aside id="default-sidebar" className=" sticky  top-6 left-0 z-10 w-64 h-auto transition-transform -translate-x-full sm:translate-x-0  hidden  md:block" aria-label="Sidebar">
  <div className="h-auto px-3 py-4 overflow-y-auto  bg-gray-50 dark:bg-gray-800">
      <ul className="space-y-2 font-medium">
        {categries.length>0 && categries.map((item,idx)=>{return<li key={idx} >
            <div className=' flex justify-start  items-center'>
            <input type="checkBox"  
            value={item.filterName}
            checked ={filter==item.filterName ? true:false}
            onChange={()=>{setFilter(item.filterName)}}
            />
            <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 flex hover:cursor-pointer">
              <img aria-hidden="true" className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor"  src={`https://www.rentomojo.com${item.backgroundImage}`} ></img>
              <span className="ml-3 font-thin text-xs">{item.filterName}</span>
            </div></div>
        </li>})}
        
      </ul>
<hr />
<p>category</p>

<hr />
      <div className="p-2">

<div className="block px-4 py-2 text-sm text-left text-gray-500 rounded-lg  hover:bg-gray-50 hover:text-gray-700 hover:cursor-pointer"
 onClick={()=>{ dispatch(getcategeryAsync("Aplinces"))     
  navigate("/Aplinces")}} >
<p>Applincess</p>
</div>
<div className="block px-4 py-2 text-sm text-left text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700 hover:cursor-pointer"  
onClick={()=>{dispatch(getcategeryAsync("furnitur")) 
navigate("/furnitur")}} >
<p>Furniture</p>
</div>
<div className="block px-4 py-2 text-sm text-left text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700 hover:cursor-pointer" 
onClick={()=>{dispatch(getcategeryAsync("Packeges")) 
navigate("/Packeges")}} >
<p>Packeges</p>
</div>


</div>
      
  </div>
</aside>)
}

export default SideFilterBar