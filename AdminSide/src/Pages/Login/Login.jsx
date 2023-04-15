import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LoginUserAsync } from '../../redux/Auth/AuthSlice'
import { Button, Flex, Input, Spinner, useToast } from '@chakra-ui/react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { getItem } from '../../utility/localStorage'

const Login = ({logIn,setLog,showModal, setShowModal}) => {
    const dispatch=useDispatch() 
    const [cred,setCread]=useState({})
    const location = useLocation();
    const navigate=useNavigate()
    const toast = useToast();
  
    
    const pathname = location.pathname ? location.pathname : null;
    const {user, loading,error,Signed}=useSelector((store)=>store.auth)

      
      
   
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
             setTimeout(()=>{
                              if(getItem("Admin")){
                                  navigate("/") }},1500)
                     }

                      return (
                                <Flex justify={"center"} >
                                <form  style={{width:"60%"}} onSubmit={HandleSubmit}>
                                        <div className="mb-6">
                                                  <label  >Your email</label>
                                                  <Input type="email" id="email" name='email' onChange={HandleChange}  placeholder="name@flowbite.com" required/>
                                        </div>
                                        <div className="mb-6">
                                                  <label >Your password</label>
                                                  <Input type="password" id="password" name='password'  onChange={HandleChange}   required/>
                                        </div>
                                        
                                        <Button type="submit" w={"full"}  mt={5}>{loading? <Spinner/> :"Log In"}</Button>
                                      
                              </form></Flex>)}

             
             export default Login