import React, { useEffect, useState } from 'react'
import SideFilterBar from '../../Components/SideFilter/SideFilterBar'
import { useSelector,useDispatch } from 'react-redux'
import { getcategeryAsync } from '../../redux/catagery/CategrySlice'
import { getproductAsync } from '../../redux/Product/productSlice'
import ProductCard from '../../Components/ProductGridCard/ProductCard'
import Scleton from '../../Components/Loading/Scleton'
import SlideUp from '../../Components/SlideUp'
import SideFilterBarSmall from '../../Components/SideFilter/SideSmolScreen'
import TransitionEfect from '../../Components/TransitionEffectes/TransitionEfect'

const Products = () => {
  const [filter,setFilter]=useState(null)
 const dispatch= useDispatch()
 let path=window.location.pathname

 path=path.slice(1,path.length)
 const [Slide,setSlideUp]=useState(false)

 const {categries}=useSelector((store)=>store.categries)
 const {products,loading}=useSelector((store)=>store.products)



 useEffect(()=>{
    dispatch(getcategeryAsync(path))
   
     
 },[])


 
 useEffect(()=>{

  if(categries.length!==0&&categries[2].filterName!=undefined){
 dispatch(getproductAsync({categry:path,filterSlu:categries[0].filterName}))
  }
 
 },[categries])








  return (
    <>
    < TransitionEfect />
    <div className=' relative flex mt-16 w-full pt-2 justify-between '  >
    
       <SideFilterBar/>
       <div onClick={()=>setSlideUp(!Slide)}  className=' md:hidden  absolute w-16 h-16 z-10 top-1 left-1   flex items-center justify-center rounded-2xl bg-yellow-300'>
               <h1>{Slide ?"Hide ":"Filter Menu"}</h1>
       </div>
       {Slide&& <SlideUp >
           <div className='absolute top-16  w-36 h-auto z-30 rounded-xl overflow-hidden'>
              <SideFilterBarSmall/>
           </div>
          
         </SlideUp>}

                  <div className="p-4   sticky top-6 w-full md:ml-10 transition delay-150 duration-300 ease-in-out "> 
                  {loading && <Scleton/>}
                     <div className=" grid grid-cols-1  md:grid-cols-2 gap-4  pl-4">
      
               {/* product Section */}
              

               {products.products&&products.products.length>=1&&products.products.map((item,idx)=>{

               return <ProductCard key={idx} product={item}/>

               })}


                  </div>
                </div>
               </div>
               </> )}

export default Products