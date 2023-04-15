import { Button, Flex, Input } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import {useDispatch,useSelector } from "react-redux"
import { getproductAsyncSearch } from '../../redux/Product/productSlice'

const SearchBox = () => {
 const [text ,setText]=useState(null) 
 const dispatch = useDispatch()
 const handleSearch=()=>{
    dispatch(getproductAsyncSearch(text))
    setText("")
 }  

  return ( <Flex>
    <Input bg={"cornsilk"}  value={text} onChange={(e)=>setText(e.target.value)} />
     <Button onClick={handleSearch}> Search</Button>
 </Flex>)
}

export default SearchBox