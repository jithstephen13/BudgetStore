import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    useDisclosure,
    Button,
    VStack,
    Progress,
    Badge,
    Flex,
  } from '@chakra-ui/react'
import { useRef } from 'react'

function Tracking({mont,year,date}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = useRef()
    
    let event=new Date()

    let dateNow=event.getUTCDate()
    let monthNow=event.getUTCMonth()
    let yearNow=event.getUTCFullYear()

    let maxday=2

    let percentage=Number(((dateNow-date)/maxday )*100)

    
  
    return (
      <>
        <Button colorScheme='blue' onClick={onOpen}>
          Track
        </Button>
  
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                Delete Customer
              </AlertDialogHeader>
  
              <AlertDialogBody>

             {year<=yearNow&&mont<=monthNow&&dateNow-date<2? <VStack>
                <Flex gap={10}>
                <Badge color={"red"}>Pending</Badge>
                <Badge color={"red"}>expexted Delivery :{ date+2+"-"+mont+"-"+year }</Badge></Flex>

                <Progress value={percentage==0 ? 10: percentage} size='xs' w={"full"} colorScheme='pink' />
             </VStack>:<VStack>
                <Flex gap={10}>
                <Badge color={"green"}>Sucess</Badge>
                <Badge color={"blue"}> Delivered On :{ date+2+"-"+mont+"-"+year }</Badge></Flex>

                <Progress value={percentage==0 ? 10: percentage} size='xs' w={"full"} colorScheme='pink' />
             </VStack>}










              </AlertDialogBody>
  
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme='red' onClick={onClose} ml={3}>
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    )
  }

  export default Tracking