import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Grid,
    VStack,
    Image,
  } from '@chakra-ui/react'

                    const SeeMore = ({products}) => {
                      return ( <Accordion allowMultiple>
                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Box as="span" flex='1' textAlign='left'>
                              SeeMore.....
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            <Grid templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)']} gap={5} >
                            {products&& products.map((item)=>{
                                return <VStack>
                                        {item.productImages[0]+item.productImages[1]==="ht"? <Image   src={item.productImages}/>:<Image    src={`https:${item.productImages}-250x250.jpg`}/>}
                                        <p>{item.name}</p>
                                </VStack>

                            })}</Grid>
                          </AccordionPanel>
                        </AccordionItem>

                      
                      </Accordion>)
                    }

                    export default SeeMore