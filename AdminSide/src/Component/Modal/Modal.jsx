import React, { useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button
  } from '@chakra-ui/react'
import { AddProduct } from '../../Pages/Product/AddProduct'
import Form from '../Form/Form'

const ModalContainer = ({ isOpen, onClose,item} ) => {

      

    const [edit,setEdit]=useState(null)
    
   
    return (
      <>
        
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>    
                   <Form  editd={item} />
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue'  onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}

export default ModalContainer