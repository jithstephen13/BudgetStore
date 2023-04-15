import React, { useEffect, useState } from 'react'

import { IoMdMenu, IoMdClose } from "react-icons/io"
import Switcher from '../Darkmode/Switcher'
import DropdownComponent from './Dropdown'
import { useNavigate } from 'react-router-dom'
import LoginSignModal from './LoginSignModal'
import { getItem } from '../../utility/localStorage'
import { useSelector,useDispatch } from 'react-redux'
import { getCartAsync } from '../../redux/cart/Cartslice'
import ProductDropdownComponent from './DropDown/ProsuctDropdown'



const NAV_ITEMS= [
    {
      label: "Home",
      page: "home",
    },]

const Navbar = () => {
    const [navbar, setNavbar] = useState(false)
    const navigate=useNavigate()
    const {user, loading, error, Signed}=useSelector((store)=>store.auth)
    const dispatch =useDispatch()
    useEffect(()=>{
      dispatch(getCartAsync())},[])
    
  
          const handleResume=()=>{
            window.location.href="https://drive.google.com/file/d/1RpHZgTgGbC4Y5xsCedBbqq_YIL-hFUYh/view?usp=sharing"
          }


    return (
      <nav  className="w-full mx-auto py-0 px-4 sm:px-20 fixed  text-white top-0 left-0 z-50 shadow bg-black dark:bg-stone-900 dark:border-b 
                          dark:border-stone-600 ">
        <div className="justify-between  items-center md:items-center md:flex ">
          <div>
            <div  className="flex items-center justify-between py-3 md:py-5 md:block" >
              <a to="home">
            <div className="container flex items-center justify-center space-x-2" onClick={()=>{navigate("/")}}>
               
                <img
                src="https://res.cloudinary.com/dqgeth8jx/image/upload/v1680631886/BudgetApp/budget-store-low-resolution-logo-white-on-transparent-background_gnp1m9.png"
                alt="logo"
                width={100}
                height={50} />
             </div>
              </a>
              <div className="md:hidden flex  gap-4 items-center justify-center">
                    <button  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border m-2"
                            onClick={() => setNavbar(!navbar)}>
                            {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
                    </button>
              </div>
            </div>
          </div>
  
          <div className=' '>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <div className="items-center justify-center space-y-8  md:flex md:space-x-6 md:space-y-0">
                {NAV_ITEMS.map((item, idx) => {
                  return (
                    <a
                      key={idx}
                      to={item.page}
                      className={
                        "block lg:inline-block text-white  hover:text-neutral-500 dark:text-neutral-100 cursor-pointer"
                      }
                       onClick={() => navigate("/")} >
                      {item.label}
                    </a>
                  )
                })}
                <div      className={"block lg:inline-block text-white  hover:text-neutral-500 dark:text-neutral-100 cursor-pointer" }>
                    <ProductDropdownComponent/>
                </div>
                
                
             
               
               {user &&user.token ? <DropdownComponent /> : <LoginSignModal/>}
                <div className={` ${
                      navbar ? "hidden" : "flex"} justify-center items-center  mt-8 md:block md:pb-0 md:mt-0`}>
                
                  
                               {/* <Switcher /> */}
                     
                 </div>
              </div>
              
            </div> 
            

             
           
          </div>
        </div>
      </nav>
  )}

export default Navbar