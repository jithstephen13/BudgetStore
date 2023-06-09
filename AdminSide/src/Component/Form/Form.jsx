import React, { useEffect, useRef, useState } from 'react'
import InputC from './Input'
import { Button, Flex, Image, Select, Spinner, VStack, useToast } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { getcategeryAsync } from '../../redux/catagery/CategrySlice'
import axios from 'axios'
import { PostproductAsync, UpdateItem, UpdateproductAsync } from '../../redux/Product/productSlice'

const Form = ({editd}) => {
   const dispatch=useDispatch()
   const [cred, setCred] = useState(null);
   const [amout, setAmount] = useState(0);
   const [categry,setCategry]=useState("Aplinces")
   const {categries,loading}=useSelector((store)=>store.categries)
   const [isloading, setLoading] = useState(false);
   const [url, setUrl] = useState(null);
   const toast=useToast()

                                          // get categries brom backend    
                        useEffect(()=>{
                          dispatch(getcategeryAsync(categry))  
                        },[categry])
                      
 
                                        //   chenging the sealect tag and  storing  store the defrent categery
                        const handleChagery=(e)=>{
                                       setCategry(e.target.value)
                        }

                                  // form   value are storing in object withh key  as  name 
                      const handlechenge = (e) => {
                          const { name, value } = e.target;
                          setCred({
                            ...cred,
                            [name]: value,
                          });
                          console.log(amout)
                    };


                       //upload  converted base64 format string in to cloudnery 
                    
                        function uploadSingleImage(base64) {
                          setLoading(true);
                          axios.post("https://nice-teal-grasshopper-hose.cyclic.app/uploadImg", { image: base64 })
                            .then((res) => {
                              setUrl(res.data);
                              setLoading(false);
                                     // store the responded  url as my image in to mongo db backend so am passing this  
                              setCred({...cred,productImages:res.data,categorySlug:categry,id:Math.floor(Math.random()*1000)*1000})
                            
                            })
                            .then(() => setLoading(false))
                            .catch(console.log);
                        }


                          // this is the function get triger when  am uploading an image it will be in binery format 
                          // and we passing tha  tnto covert base64 string format and uploading that
                          const handleFileUpload = async (e) => {

                            const files = e.target.files;
                            console.log(files.length);

                            if (files.length === 1) {
                            const file = e.target.files[0];
                            const base64 = await convertToBase64(file);
                          
                            uploadSingleImage(base64);
                            }
                          }



  
  const handleForm=(e)=>{
                  //passing this into outr backend using redux 
                    e.preventDefault()
                        dispatch(UpdateproductAsync({id:editd,cred}))
                        dispatch(UpdateItem({id:editd,cred}))
                            toast({
                            title: 'Success',
                            description: "new item added sucessfully",
                            status: 'success',
                            duration: 4000,
                            isClosable: true,
                        })    
                  }


  return (<>
      
       <VStack>
       <InputC name={"name"}   placeholder={"Enter Name"} onChange={handlechenge} />
       <InputC name='slug'  placeholder='Slag...' onChange={handlechenge} />
       <InputC name='minRentAmount' type='Number'  placeholder='minRentAmount...'  onChange={(e)=>{setCred({...cred,minRentAmount:Number(e.target.value)})}} />

       <Select name='categorySlug' onChange={handleChagery}>
                        <option value='Aplinces'>appliances</option>
                         <option value='Packeges'>packages</option>
                         <option value='furnitur'>furniture</option>
       </Select>

       <Select name='filterSlug'  onChange={handlechenge} >
                   {categries&&categries.map((item,idx)=>{return <option key={idx} value={item.filterName}>{item.filterName}</option>}) }


       </Select>

       <Flex justify={"space-around"} gap={"10"}  >
                                                <input type="file" name="productImages" id="productImages" 
                                                
                                                style={{height:"200px",border:"1px solid black"}} width={"50%"} onChange={handleFileUpload} />
                                                {isloading&& <Spinner/>}
                                                {url&&<Image src={url} w={"200px"}  />}
       </Flex>

       <Button onClick={handleForm}>click</Button>
       </VStack>



    </>)}

                                  // converting banery into base64 
                      function convertToBase64(file){
                          return new Promise((resolve, reject) => {
                            const fileReader = new FileReader();
                            fileReader.readAsDataURL(file);
                            fileReader.onload = () => {
                              resolve(fileReader.result)
                            };
                            fileReader.onerror = (error) => {
                              reject(error)
                            }
                          })
                        }

export default Form