import { Button, Flex, Image, Input, Select, Spinner, Stack, useToast } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getcategeryAsync } from '../../redux/catagery/CategrySlice'
import store from '../../redux/store'
import axios from 'axios'
import { PostproductAsync } from '../../redux/Product/productSlice'
import TransitionEfect from '../../Component/TransitionEffectes/TransitionEfect'


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

export const AddProduct = () => {
  const [categry,setCategry]=useState("Aplinces")
  const dispatch=useDispatch()
   const [cred, setCred] = useState(null);
   const [isloading, setLoading] = useState(false);
   const [url, setUrl] = useState(null);
   const [amout, setAmount] = useState(0);
   const toast = useToast()

  const {categries,loading}=useSelector((store)=>store.categries)
  const formref=useRef()

  useEffect(()=>{
    dispatch(getcategeryAsync(categry))
      
  },[categry])



  const handleChagery=(e)=>{
    setCategry(e.target.value)
  }




  const handlechenge = (e) => {
    const { name, value } = e.target;
    setCred({
      ...cred,
      [name]: value,
    });
    
  };

  function uploadSingleImage(base64) {
    setLoading(true);
    axios.post("https://nice-teal-grasshopper-hose.cyclic.app/uploadImg", { image: base64 })
      .then((res) => {
        setUrl(res.data);
        setLoading(false);
        setCred({...cred,productImages:res.data,categorySlug:categry,id:Math.floor(Math.random()*1000)*1000,minRentAmount:Number(amout)})
      
      })
      .then(() => setLoading(false))
      .catch(console.log);
  }



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
   e.preventDefault()

   try {
    
       dispatch(PostproductAsync(cred))
   toast({
    title: 'Success',
    description: "new item added sucessfully",
    status: 'success',
    duration: 4000,
    isClosable: true,
  })
    
  window.location.reload(false)
   } catch (error) {
    
    toast({
      title: 'Error ',
    
      status: 'error',
      duration: 4000,
      isClosable: true,
    })
   }
   
  
   
  }

  return (<>
 
 
    <Stack bg={"blue.400"} alignItems={"center"}  style={{ backgroundImage:`url(https://res.cloudinary.com/dqgeth8jx/image/upload/v1680631886/BudgetApp/budget-store-website-favicon-color_jb6t16.png)`}}>
      <h1>Add New Product</h1>
      <Flex w={"full"}>
        <Stack w={"50%"} alignItems={"center"} justifyContent={"center"}
          // bgGradient="linear(to-l, #7928CA, #FF0080)"
           >
             <Image w={'50%'} h={'fit-content'} src='https://res.cloudinary.com/dqgeth8jx/image/upload/v1681324719/BudgetApp/download_bt4nbi.jpg' alt='' />
        </Stack>

      <Stack w={{ base: '100%', md: '50%', lg: '50%'}} m={"auto"}

         p={6}>


                          <form ref={formref} action="" style={{display:"flex",flexDirection:"column" ,justifyContent:"center",textAlign:"center",gap:"15px"}}>


                                    <Input name='slug' backgroundBlendMode={"hard-light"} backgroundColor={"black"} textColor={"white"} border={"1px solid black"} placeholder='Slag...' onChange={handlechenge} />


                                    <Input  name='name' backgroundBlendMode={"hard-light"} backgroundColor={"black"} textColor={"white"}  border={"1px solid black"} placeholder='name...' onChange={handlechenge} />


                                    <Input name='minRentAmount' backgroundBlendMode={"hard-light"} backgroundColor={"black"} textColor={"white"} type='Number' border={"1px solid black"} 
                                    placeholder='minRentAmount...'  onChange={(e)=>{setAmount(e.target.value)}} />
                                    <Select name='categorySlug'  onChange={handleChagery}>
                                            <option value='' backgroundColor={"black"} textColor={"white"} >select categery</option>
                                            <option value='Aplinces' textColor={"black"} >appliances</option>
                                            <option value='Packeges' textColor={"black"} >packages</option>
                                            <option value='furnitur'>furniture</option>
                                    </Select>

                                    <Select name='filterSlug'  onChange={handlechenge} >
                                    <option textColor={"black"} value=''> select sub categery</option>
                                            {categries&&categries.map((item,idx)=>{return <option key={idx} textColor={"black"} value={item.filterName}>{item.filterName}</option>}) }

                                    </Select>
                                    <Flex  justify={"space-around"} gap={"10"} >
                                                <input type="file" name="productImages" id="productImages" 
                                                style={{height:"200px",border:"1px solid black"}} width={"50%"} onChange={handleFileUpload} />
                                                {isloading&& <Spinner/>}
                                                {url&&<Image src={url} w={"200px"}  />}
                                    </Flex>
                                 
                                   <Button onClick={handleForm}>click</Button>

                    </form>





        </Stack>


      
      </Flex>

    </Stack>
   </>)
}
