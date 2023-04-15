import { Box, Button, Grid,  Image, Select, Stack,  Flex,  useDisclosure, Badge, } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getcategeryAsync } from '../../redux/catagery/CategrySlice'
import { DeletproductAsync, getproductAsync, removeItem } from '../../redux/Product/productSlice'
import ModalContainer from '../../Component/Modal/Modal'
import SearchBox from '../../Component/SearchBox/Search'


const Product = () => {
    const [categry,setCategry]=useState("Aplinces")
    const dispatch=useDispatch()
    const {categries}=useSelector((store)=>store.categries)
    const {products,loading}=useSelector((store)=>store.products)
    const [filterSlu,setfilterSlug]=useState("refrigerators")
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [editid,setEdit]=useState(null)

   useEffect(()=>{
       dispatch(getcategeryAsync(categry))
       console.log(categry)
       setTimeout(() => {
               dispatch(getproductAsync({categry,filterSlu}))
       }, 2000);
              },[categry,filterSlu])

   
     const handleChagery=(e)=>{
       setCategry(e.target.value)
     }

     const handleClick=(id)=>{
        dispatch(DeletproductAsync(id))
        dispatch(removeItem(id))
       }
  return (<>
                         <Stack w={'full'}  style={{ backgroundImage:`url(https://res.cloudinary.com/dqgeth8jx/image/upload/v1680631886/BudgetApp/budget-store-website-favicon-color_jb6t16.png)`}}>
                           <Flex>                
                                                                              {/* catagery filter */}
                                  <Select name='categorySlug' onChange={handleChagery} bg={"gold"} zIndex={"auto"}>
                                              <option value='Aplinces'>appliances</option>
                                              <option value='Packeges'>packages</option>
                                              <option value='furnitur'>furniture</option>
                                  </Select>
                                                                              {/* filter by subcategery */}
                                  <Select name='filterSlug' onChange={(e)=>{setfilterSlug(e.target.value)}} bg={"olive"}  >
                                             { categries&&categries.map((item,idx)=>{return <option key={idx} value={item.filterName}>{item.filterName}</option>})}

                                  </Select>
                                    
                                      
                                  </Flex>
                                  <SearchBox/>

                                 
    
                                                                              <Grid  templateColumns={['repeat(1, 1fr)','repeat(2, 1fr)','repeat(3, 1fr)','repeat(4, 1fr)']} gap={6}>
                                    
                                              {products.products&&products.products.length>=1&&products.products.map((item,idx)=>{
                                                                                                                //  product Card
                                                    return     <Flex key={idx} flexDirection={"column"} bg={"white"} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' textAlign={'center'} boxShadow='dark-lg'>
                                                                              {item.productImages[0]+item.productImages[1]==="ht"? <Image   src={item.productImages}/>:<Image    src={`https:${item.productImages}-250x250.jpg`}/>}

                                                                                <Box p='6'>
                                                                                  <Box display='flex' alignItems='baseline'>
                                                                                    <Badge borderRadius='full' px='2' colorScheme='teal'>
                                                                                    {item.id}
                                                                                    </Badge>
                                                                                    
                                                                                  </Box>

                                                                                  <Box
                                                                                    mt='1'
                                                                                    fontWeight='semibold'
                                                                                    as='h4'
                                                                                    lineHeight='tight'
                                                                                    noOfLines={1}
                                                                                  >
                                                                                    {item.name}
                                                                                  </Box>

                                                                                  <Box
                                                                                    mt='1'
                                                                                    fontWeight='semibold'
                                                                                    as='h4'
                                                                                    lineHeight='tight'
                                                                                    noOfLines={1}
                                                                                  >
                                                                                    {item.minRentAmount}
                                                                                  </Box>
                                                                                  <Box
                                                                                    mt='1'
                                                                                    fontWeight='semibold'
                                                                                    as='h4'
                                                                                    lineHeight='tight'
                                                                                    noOfLines={1}
                                                                                  >
                                                                                    {item.categorySlug}
                                                                                  </Box>
                                                                                  <Box
                                                                                    mt='1'
                                                                                    fontWeight='semibold'
                                                                                    as='h4'
                                                                                    lineHeight='tight'
                                                                                    noOfLines={1}
                                                                                  >
                                                                                    {item.filterSlug}
                                                                                  </Box>
                                                                                            <Flex justifyContent={"space-around"}> <Button onClick={()=>{onOpen()
                                                                                                
                                                                                                               setEdit(item._id)
                                                                                                                }}>Edit</Button>
                                                                                                              <ModalContainer isOpen={isOpen} onClose={onClose} item={editid} />
                                                                                
                                                                          <Flex > <Button onClick={()=>handleClick(item._id)}>Delete</Button></Flex>
                                                                    </Flex>         
                                                                </Box>
                                                        </Flex> 
        
                                                   }) }</Grid>  
                
          
                                            </Stack>
                                            </> )}

export default Product