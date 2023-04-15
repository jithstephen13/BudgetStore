import React, { useEffect, useRef, useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { SignUpUserAsync } from '../../redux/Auth/AuthSlice'
import store from '../../redux/store'
import Scucess from '../../Components/Toast/Scucess'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const SignIn = ({logIn,setLog}) => {
 const form=useRef()
 const [cred,setCread]=useState({})
 const dispatch=useDispatch() 
 const [confrm,setConform]=useState(null)

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

    try {
       dispatch(SignUpUserAsync(cred))
       setLog(!logIn) 

    } catch (error) {
        
    }
    
   
 }

 const [pwdInput, initValue] = useState({password: "",});
const [isError, setError] = useState(null);
const handlepassword = (e) => {
  let password = e.target.value;
  initValue({
    ...pwdInput,
    password: e.target.value,
  });
  setError(null);
  let caps, small, num, specialSymbol;
  if (password.length < 4) {
    setError(
      "Password should contain minimum 4 characters, with one UPPERCASE, lowercase, number and special character: @$! % * ? &"
    );
    return;
  } else {
    caps = (password.match(/[A-Z]/g) || []).length;
    small = (password.match(/[a-z]/g) || []).length;
    num = (password.match(/[0-9]/g) || []).length;
    specialSymbol = (password.match(/\W/g) || []).length;
    if (caps < 1) {
      setError("Must add one UPPERCASE letter");
      return;
    } else if (small < 1) {
      setError("Must add one lowercase letter");
      return;
    } else if (num < 1) {
      setError("Must add one number");
      return;
    } else if (specialSymbol < 1) {
      setError("Must add one special symbol: @$! % * ? &");
      return;
    }
  }
}
  



  return (
   <div>
  
    
<form ref={form} onSubmit={HandleSubmit}>
  <div className="relative z-0 w-full mb-6 group">
      <input type="email" name="email" id="email" 
      onChange={HandleChange}
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="email" className="peer-focus:font-medium absolute left-0  text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>
  <div className="relative z-0 w-full mb-6 group">
      <input type="password" name="password" id="password"
      onChange={HandleChange}
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="password" className="peer-focus:font-medium absolute left-0  text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
  </div>
  <div className="relative z-0 w-full mb-6 group">
      <input type="password" name="repeat_password" id="repeat_password" onChange={handlepassword} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="repeat_password" className="peer-focus:font-medium absolute left-0  text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
      <label for="repeat_password" className=" text-red-600"> {isError} </label>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-6 group">
        <input type="text" name="name" id="floating_Name"
        onChange={HandleChange}
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="name" className="peer-focus:font-medium absolute left-0  text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
    </div>
    <div className="relative z-0 w-full mb-6 group">
        <input type="text" name="age" id="age"
        onChange={HandleChange}
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="age" className="peer-focus:font-medium absolute left-0  text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Age</label>
    </div>
  </div>
 
  <div className="flex items-start mb-6">
    <div className="flex items-center h-5">
      <input id="terms" type="checkbox" value=""
      
      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
    </div>
    <label for="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
  </div>
  <button disabled={isError!=null ? true : false} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
  ; 
</form>

       </div>
  )
}

export default SignIn