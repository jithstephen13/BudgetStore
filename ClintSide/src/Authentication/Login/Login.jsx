import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LoginUserAsync } from '../../redux/Auth/AuthSlice'
import { getOrderAsync } from '../../redux/Order/Orderslice'

const Login = ({logIn,setLog,showModal, setShowModal}) => {
    const dispatch=useDispatch() 
    const [cred,setCread]=useState({})

    const {user,
       loading,
       error,
       Signed}=useSelector((store)=>store.auth)

      
   
    const HandleChange=(e)=>{
       const { name, value } = e.target;
       setCread({
         ...cred,
         [name]: value,
       });
       
   
    }
   
   
    const HandleSubmit=(e)=>{
       e.preventDefault()
          console.log(cred)
          dispatch(LoginUserAsync(cred))

          setTimeout(() => {
            dispatch(getOrderAsync())
          }, 3000);
         


    }

    

  return (
    <form className='w-full' onSubmit={HandleSubmit}>
    <div className="mb-6">
      <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
      <input type="email" id="email" name='email' onChange={HandleChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required/>
    </div>
    <div className="mb-6">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
      <input type="password" id="password" name='password'  onChange={HandleChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required/>
    </div>
    
    <button type="submit" className="text-white bg-blue-700 w-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log In</button>
    <div className="text-sm font-medium text-gray-500 dark:text-gray-300 mt-6"
    onClick={()=>setLog(!logIn)}
    >
                        Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
    </div>
  </form>
  )
}

export default Login