
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
 import {
      Box,
      Button,
      ButtonGroup,
      Container,
      Flex,
      HStack,
      IconButton,
      Image,
      useBreakpointValue,
    } from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'
import { removeItem } from '../utility/localStorage'
 
    
export const Navbar = () => {
              const navigate=useNavigate() 
               const isDesktop = useBreakpointValue({ base: false, lg: true })
  return (
        <Box as="section" >
          <Box as="nav" bg="bg-surface" boxShadow="sm">
            <Container py={{ base: '4', lg: '5' }}>
              <HStack spacing="10" justify="space-between">
                  
                     <Image w={"20%"} src="https://res.cloudinary.com/dqgeth8jx/image/upload/v1680631886/BudgetApp/budget-store-low-resolution-logo-color-on-transparent-background_bwtac8.png" />
                  
                {isDesktop ? (
                  <Flex justify="space-between" flex="1">
                    <ButtonGroup variant="link" spacing="8">
                      {[{name:"Home",path:"/"}, {name:"New Items",path:"/addNew"}, {name:"Products",path:"/allProduct"},{name:"Order Status",path:"/orderdetails"} ].map((item,idx) => (
                        <Button key={idx} onClick={()=>navigate(item.path)} >{item.name}</Button>
                      ))}
                    </ButtonGroup>
                    <HStack spacing="3">
                      
                      <Button variant="primary"
                      
                      onClick={()=>{
                        removeItem("Admin")
                        window.location.reload()

                      }}
                      >Log Out</Button>
                    </HStack>
                  </Flex>
                ) : (
                  <IconButton
                    variant="ghost"
                    icon={<FiMenu fontSize="1.25rem" />}
                    aria-label="Open Menu"
                  />
                )}
              </HStack>
            </Container>
          </Box>
        </Box>
      )
    }














