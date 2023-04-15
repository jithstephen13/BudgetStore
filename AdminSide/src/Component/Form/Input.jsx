import { Input } from '@chakra-ui/react'
import React from 'react'

const InputC = ({name,placeholder,onChange,style}) => {
  return (
    <>
     <Input name={name} placeholder={placeholder} onChange={onChange} border={"1px solid black"}  />
    </>
  )
}

export default InputC